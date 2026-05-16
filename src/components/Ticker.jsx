import { data } from '../data'
import styles from './Ticker.module.css'

export default function Ticker() {
  const items = [...data.ticker, ...data.ticker]
  return (
    <div className={styles.wrap}>
      <div className={styles.track}>
        {items.map((item, i) => (
          <span key={i} className={styles.item}>
            {item}
            <span className={styles.sep}>//</span>
          </span>
        ))}
      </div>
    </div>
  )
}
