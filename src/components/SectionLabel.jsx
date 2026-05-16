import styles from './SectionLabel.module.css'

export default function SectionLabel({ index, title, sub }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.eyebrow}>// {index.toString().padStart(2,'0')} — {title}</div>
      {sub && <p className={styles.sub}>{sub}</p>}
    </div>
  )
}
