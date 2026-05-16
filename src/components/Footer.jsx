import { data } from '../data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <span className={styles.left}>{data.nameShort} — 2025</span>
        <span className={styles.right}>HYD, INDIA · OPEN TO WORK</span>
      </div>
    </footer>
  )
}
