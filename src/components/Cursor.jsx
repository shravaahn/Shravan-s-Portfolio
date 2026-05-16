import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const raf = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px'
        dotRef.current.style.top = e.clientY + 'px'
      }
    }

    const loop = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1
      ring.current.y += (pos.current.y - ring.current.y) * 0.1
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px'
        ringRef.current.style.top = ring.current.y + 'px'
      }
      raf.current = requestAnimationFrame(loop)
    }

    const onEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(2.2)'
        ringRef.current.style.borderColor = 'var(--a2)'
        ringRef.current.style.opacity = '0.6'
      }
    }
    const onLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)'
        ringRef.current.style.borderColor = 'var(--a)'
        ringRef.current.style.opacity = '1'
      }
    }

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })
    raf.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', width: 8, height: 8, borderRadius: '50%',
        background: 'var(--a)', pointerEvents: 'none', zIndex: 9999,
        transform: 'translate(-50%,-50%)', mixBlendMode: 'screen',
        transition: 'transform 0.1s'
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', width: 34, height: 34, borderRadius: '50%',
        border: '1px solid var(--a)', pointerEvents: 'none', zIndex: 9998,
        transform: 'translate(-50%,-50%)', mixBlendMode: 'screen',
        transition: 'transform 0.25s ease, border-color 0.25s, opacity 0.25s'
      }} />
    </>
  )
}
