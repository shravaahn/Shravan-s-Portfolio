import { data } from '../data'
import { Reveal } from '../hooks/useReveal'
import SectionLabel from './SectionLabel'
import styles from './Skills.module.css'

const keySkills = ['Workday HCM', 'Zendesk', 'ClickUp', 'Requirement Gathering', 'Business Process Analysis']

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.wrap}>
        <Reveal><SectionLabel index={3} title="skills" sub="Functional consulting meets technical depth" /></Reveal>

        <div className={styles.grid}>
          {data.skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.07}>
              <div className={styles.block}>
                <div className={styles.label}>{group.category}</div>
                <div className={styles.pills}>
                  {group.items.map(item => (
                    <span
                      key={item}
                      className={`${styles.pill} ${keySkills.includes(item) ? styles.key : ''}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className={styles.certStrip}>
            {data.certs.map(cert => (
              <div key={cert.name} className={styles.certCard}>
                <div className={styles.certBadge}>WD<br />PRO</div>
                <div>
                  <div className={styles.certName}>{cert.name}</div>
                  <div className={styles.certIssuer}>{cert.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
