export function focusSectionHeading(href: string) {
  const section = document.querySelector(href)
  if (!(section instanceof HTMLElement)) return

  const heading = section.querySelector('h1, h2')
  if (!(heading instanceof HTMLElement)) return

  heading.focus({ preventScroll: true })
}
