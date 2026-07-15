import { useEffect, useRef } from 'react'

/**
 * Scroll-reveal hook. Attach the returned ref to an element with the `reveal`
 * class; when it enters the viewport, `is-visible` is added once and the
 * observer disconnects. Respects prefers-reduced-motion (CSS disables the
 * transition, so elements are simply visible).
 */
export default function useReveal() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.classList.add('is-visible')
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
