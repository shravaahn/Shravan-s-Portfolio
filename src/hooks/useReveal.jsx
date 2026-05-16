import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export function useReveal() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })
  return { ref, inView }
}

export function Reveal({ children, delay = 0, y = 24, className }) {
  const { ref, inView } = useReveal()
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
