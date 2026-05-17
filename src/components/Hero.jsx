import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { data } from '../data'
import styles from './Hero.module.css'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  const frameRef = useRef(null)
  const scanRef = useRef(null)

  useEffect(() => {
    if (!scanRef.current) return
    gsap.to(scanRef.current, {
      top: 'calc(100% - 2px)',
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <section className={styles.hero} id="hero">
      <div className={styles.inner}>
        <div className={styles.left}>
          <motion.div className={styles.badge} {...fadeUp(0.2)}>
            <span className={styles.dot} />
            <span>OPEN TO ROLES — HYD / REMOTE</span>
          </motion.div>

          <motion.h1 className={styles.h1} {...fadeUp(0.35)}>
            {data.title}
            <br />
            <em>&amp; {data.subtitle}</em>
          </motion.h1>

          <motion.p className={styles.bio} {...fadeUp(0.5)}>
            {data.bio}
          </motion.p>

          <motion.div className={styles.btns} {...fadeUp(0.65)}>
            <a className={styles.btnPrimary} href={`mailto:${data.email}`}>
              get in touch
            </a>
            <a className={styles.btnGhost} href={data.linkedin} target="_blank" rel="noreferrer">
              linkedin ↗
            </a>
            <a className={styles.btnGhost} href={data.github} target="_blank" rel="noreferrer">
              github ↗
            </a>
          </motion.div>
        </div>

        <motion.div
          className={styles.avatarWrap}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.avFrame} ref={frameRef}>
            <div className={styles.scanLine} ref={scanRef} />
            <div className={styles.avInitials}>SK</div>
            <span className={`${styles.corner} ${styles.tl}`} />
            <span className={`${styles.corner} ${styles.tr}`} />
            <span className={`${styles.corner} ${styles.bl}`} />
            <span className={`${styles.corner} ${styles.br}`} />
            <div className={styles.avLabel}>
              <span className={styles.avDot} />
              AVAILABLE
            </div>
            <div className={styles.avCoords}>
              {data.coords}
              <br />HYD, IN
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className={styles.stats}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
      >
        {[
          { val: '1+', label: 'Years experience' },
          { val: '2', label: 'Workday Pro certifications' },
          { val: '4+', label: 'Live projects' },
          { val: '3', label: 'Enterprise platforms' },
        ].map(s => (
          <div key={s.label} className={styles.stat}>
            <span className={styles.statVal}>{s.val}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
