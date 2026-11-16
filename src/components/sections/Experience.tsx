"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { roles, education, certifications, languages } from "@/data/experience";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

function ListCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex flex-col gap-4 rounded-sm border border-[#1e1e1e] bg-[#0d0d0d] p-6"
    >
      <h3 className="font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">{title}</h3>
      {children}
    </motion.div>
  );
}

export function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section
      id="experience"
      className="relative w-full border-t border-[#1e1e1e] bg-[#0b0b0b] py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-16"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-[#6b6b6b]">
            {t.experience.eyebrow}
          </p>
          <h2 className="mb-4 text-3xl font-semibold leading-tight text-[#ededed] md:text-4xl lg:text-5xl">
            {t.experience.title}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-[#6b6b6b] md:text-base">
            {t.experience.subtitle}
          </p>
        </motion.div>

        {/* Roles */}
        <ol className="flex flex-col gap-4">
          {roles.map((role) => (
            <motion.li
              key={role.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="grid gap-6 rounded-sm border border-[#1e1e1e] bg-[#0d0d0d] p-6 lg:grid-cols-[260px_1fr]"
            >
              <header className="flex flex-col gap-1.5">
                <p className="font-mono text-xs uppercase tracking-widest text-[#ff2d2d]">
                  {role.period[lang]}
                </p>
                <h3 className="text-lg font-semibold text-[#ededed] md:text-xl">{role.company}</h3>
                <p className="text-sm text-[#b5b5b5]">{role.title[lang]}</p>
                <p className="text-sm text-[#6b6b6b]">{role.location[lang]}</p>
              </header>

              <div className="flex flex-col gap-4">
                <ul className="flex flex-col gap-2.5">
                  {role.highlights.map((item) => (
                    <li
                      key={item.en}
                      className="relative pl-4 text-sm leading-relaxed text-[#b5b5b5] before:absolute before:left-0 before:top-[0.6em] before:h-px before:w-2 before:bg-[#ff2d2d] md:text-base"
                    >
                      {item[lang]}
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-1.5" aria-label={t.experience.stack}>
                  {role.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-sm bg-[#141414] px-2 py-0.5 font-mono text-xs uppercase tracking-wider text-[#9a9a9a]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* Education, certifications, languages */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ staggerChildren: 0.1 }}
          className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          <ListCard title={t.experience.education}>
            <ul className="flex flex-col gap-3">
              {education.map((item) => (
                <li key={item.period} className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-[#ededed] md:text-base">{item.title[lang]}</span>
                  <span className="text-sm text-[#6b6b6b]">
                    {item.school} · {item.period}
                  </span>
                </li>
              ))}
            </ul>
          </ListCard>

          <ListCard title={t.experience.certifications}>
            <ul className="flex flex-col gap-2">
              {certifications.map((item) => (
                <li key={item.en} className="text-sm text-[#b5b5b5] md:text-base">
                  {item[lang]}
                </li>
              ))}
            </ul>
          </ListCard>

          <ListCard title={t.experience.languages}>
            <ul className="flex flex-col gap-2">
              {languages.map((item) => (
                <li key={item.en} className="text-sm text-[#b5b5b5] md:text-base">
                  {item[lang]}
                </li>
              ))}
            </ul>
          </ListCard>
        </motion.div>
      </div>
    </section>
  );
}
