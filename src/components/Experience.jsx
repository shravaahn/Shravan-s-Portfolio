import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { data } from '../data'
import { Reveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import styles from './Experience.module.css'

export default function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <section id="work" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal><SectionLabel index={1} title="experience" sub="Consulting, implementation, and enterprise tech" /></Reveal>

        <div className={styles.list}>
          {data.experience.map((exp, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className={styles.item} data-open={open === i}>
                <button className={styles.header} onClick={() => setOpen(open === i ? -1 : i)}>
                  <div className={styles.headerLeft}>
                    <div className={styles.role}>{exp.role}</div>
                    <div className={styles.company}>{exp.company}</div>
                  </div>
                  <div className={styles.headerRight}>
                    {exp.current && <span className={styles.badge}>Current</span>}
                    <span className={styles.date}>{exp.period}</span>
                    <span className={styles.chevron} data-open={open === i}>›</span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      className={styles.body}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ul className={styles.bullets}>
                        {exp.bullets.map((b, j) => (
                          <li key={j}>{b}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
