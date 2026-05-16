import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { data } from '../data'
import styles from './Nav.module.css'

const links = ['work', 'projects', 'skills', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        className={styles.nav}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        data-scrolled={scrolled}
      >
        <button className={styles.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className={styles.logoDot} />
          {data.nameShort}
        </button>

        <div className={styles.links}>
          {links.map(l => (
            <button key={l} className={styles.link} onClick={() => scrollTo(l)}>
              {l}
            </button>
          ))}
          <a className={styles.hire} href={`mailto:${data.email}`}>
            hire me ↗
          </a>
        </div>

        <button className={styles.burger} onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          <span data-open={menuOpen} />
          <span data-open={menuOpen} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {links.map(l => (
              <button key={l} className={styles.mobileLink} onClick={() => scrollTo(l)}>
                {l}
              </button>
            ))}
            <a className={styles.mobileHire} href={`mailto:${data.email}`}>hire me ↗</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
