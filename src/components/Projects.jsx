import { data } from '../data'
import { Reveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal><SectionLabel index={2} title="projects" sub="From enterprise integrations to production apps" /></Reveal>
        <div className={styles.grid}>
          {data.projects.map((proj, i) => (
            <Reveal key={proj.id} delay={i * 0.07}>
              <div className={styles.card} data-highlight={proj.highlight}>
                <div className={styles.topRow}>
                  <span className={styles.num}>PROJECT_{proj.id}</span>
                  {proj.link && (
                    <a className={styles.linkBtn} href={proj.link} target="_blank" rel="noreferrer">↗</a>
                  )}
                </div>
                <h3 className={styles.name}>{proj.name}</h3>
                <p className={styles.desc}>{proj.desc}</p>
                <div className={styles.chips}>
                  {proj.tags.map(t => <span key={t} className={styles.chip}>{t}</span>)}
                </div>
                {proj.highlight && <div className={styles.glow} />}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
