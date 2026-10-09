export type TeamMember = {
  id: string
  name: string
  role: string
  /**
   * Approved headshot in src/assets/team/, when a file exists for this person.
   * Lifestyle photography must not be assigned here.
   */
  imageSrc: string | null
  imageAlt: string
}

export const team: TeamMember[] = [
  {
    id: 'rizwan-haq',
    name: 'Rizwan Haq',
    role: 'Chief Executive Officer',
    imageSrc: null,
    imageAlt: 'Rizwan Haq',
  },
  {
    id: 'patrick-zola',
    name: 'Dr. Patrick Zola',
    role: 'Senior Adviser, Health Care Transformation',
    imageSrc: null,
    imageAlt: 'Dr. Patrick Zola',
  },
  {
    id: 'shakeeb-ahmed',
    name: 'Shakeeb Ahmed',
    role: 'Director, Digital Health',
    imageSrc: null,
    imageAlt: 'Shakeeb Ahmed',
  },
  {
    id: 'mohamed-elmokadm',
    name: 'Mohamed Elmokadm',
    role: 'Senior Account Manager',
    imageSrc: null,
    imageAlt: 'Mohamed Elmokadm',
  },
  {
    id: 'abdulmohsen-albrag',
    name: 'Abdulmohsen Albrag',
    role: 'Business Relationships Director',
    imageSrc: null,
    imageAlt: 'Abdulmohsen Albrag',
  },
]

export function getInitials(name: string) {
  const withoutTitle = name.replace(/^Dr\.\s+/i, '')
  return withoutTitle
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}
