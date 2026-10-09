import { useEffect, useId, useRef, useState } from 'react'
import { contactHref, navigation } from '../data/navigation'
import { focusSectionHeading } from '../lib/focusSection'
import { ButtonLink } from './Button'
import { Logo } from './Logo'

export function Header() {
  const [open, setOpen] = useState(false)
  const menuId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const restoreFocus = useRef(true)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)')
    const onChange = () => {
      if (media.matches) setOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!open) return

    const panel = panelRef.current
    if (!panel) return
    const dialog = panel

    restoreFocus.current = true
    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null

    function getFocusable() {
      return Array.from(
        dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]):not([tabindex="-1"])',
        ),
      )
    }

    getFocusable()[0]?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false)
        return
      }
      if (event.key !== 'Tab') return

      const items = getFocusable()
      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const main = document.getElementById('main')
    const footer = document.querySelector('footer')
    if (main) main.inert = true
    if (footer) footer.inert = true

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      if (main) main.inert = false
      if (footer) footer.inert = false
      if (restoreFocus.current) previouslyFocused?.focus()
    }
  }, [open])

  function handleNavigate(href: string) {
    restoreFocus.current = false
    setOpen(false)
    window.setTimeout(() => focusSectionHeading(href), 0)
  }

  return (
    <header id="top" className="sticky top-0 z-40 border-b border-line bg-surface">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <a href="#top" className="rounded-sm">
          <Logo className="text-lg" />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <nav aria-label="Primary">
            <ul className="flex items-center gap-8">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-ink underline-offset-8 hover:text-brand-teal-deep hover:underline"
                    onClick={() => focusSectionHeading(item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href={contactHref} onClick={() => focusSectionHeading(contactHref)}>
            Talk to our team
          </ButtonLink>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span aria-hidden="true" className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id={menuId}
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
          className="fixed inset-0 z-50 lg:hidden"
        >
          <button
            type="button"
            className="absolute inset-0 bg-overlay opacity-40"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-full flex-col bg-surface px-6 py-6 sm:max-w-sm sm:border-l sm:border-line">
            <div className="flex justify-end">
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-ink"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-6">
              <ul className="flex flex-col">
                {navigation.map((item) => (
                  <li key={item.href} className="border-b border-line">
                    <a
                      href={item.href}
                      className="block py-4 text-lg font-medium text-ink"
                      onClick={() => handleNavigate(item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ButtonLink
              href={contactHref}
              className="mt-8 w-full"
              onClick={() => handleNavigate(contactHref)}
            >
              Talk to our team
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  )
}
