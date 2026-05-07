"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

/*
 * Reference design size — all HUD elements are positioned/sized as if the
 * 16:9 stage is exactly 1440 × 810 px.  ScaledHUD measures the actual stage
 * width and applies a uniform CSS scale so every pixel value stays correct
 * at any viewport size.
 */
const DESIGN_W = 1920;
const DESIGN_H = 1080; // 1920 × (9/16)
const SCALE_FACTOR = 1.0;

export function ScaledHUD({ children }: { children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;

    const measure = () =>
      setScale((el.offsetWidth / DESIGN_W) * SCALE_FACTOR);

    const ro = new ResizeObserver(([entry]) => {
      setScale((entry.contentRect.width / DESIGN_W) * SCALE_FACTOR);
    });
    ro.observe(el);
    measure();

    // iOS Safari can report stale dimensions immediately after rotation.
    // Re-measure once the browser has settled (~150 ms is enough).
    const onOrientationChange = () => setTimeout(measure, 150);
    window.addEventListener("orientationchange", onOrientationChange);

    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", onOrientationChange);
    };
  }, []);

  return (
    /* Outer div fills the 16:9 stage — used only for measuring */
    <div ref={outerRef} className="pointer-events-none absolute inset-0">
      {/*
       * Inner div is always 1440 × 810 in logical px, scaled to match the
       * actual stage size.  All children use absolute positioning relative
       * to this fixed-size space.
       */}
      <div
        className="pointer-events-auto absolute top-0 left-0"
        style={{
          width: DESIGN_W,
          height: DESIGN_H,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
