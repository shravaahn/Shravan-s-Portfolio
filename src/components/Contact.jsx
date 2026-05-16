import { Reveal } from '../hooks/useReveal'
import { data } from '../data'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal>
          <div className={styles.eyebrow}>// 04 — contact</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className={styles.heading}>Let's build<br /><em>something.</em></h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className={styles.sub}>
            Open to Business Analyst, Technical Consultant, and dev-adjacent roles.<br />
            Hyderabad — remote friendly.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className={styles.links}>
            <a className={`${styles.btn} ${styles.primary}`} href={`mailto:${data.email}`}>
              <span>✉</span> {data.email}
            </a>
            <a className={styles.btn} href={data.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a className={styles.btn} href={data.github} target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a className={styles.btn} href={`tel:${data.phone}`}>
              {data.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
