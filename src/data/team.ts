import abdulmohsenAlbrag from '../assets/team members/5.png'
import mohamedElmokadm from '../assets/team members/4.png'
import patrickZola from '../assets/team members/2.png'
import rizwanHaq from '../assets/team members/1.png'
import shakeebAhmed from '../assets/team members/3.png'

export type TeamMember = {
  id: string
  name: string
  role: string
  /** Portrait from src/assets/team members, in roster order. */
  imageSrc: string
  imageAlt: string
}

export const team: TeamMember[] = [
  {
    id: 'rizwan-haq',
    name: 'Rizwan Haq',
    role: 'Chief Executive Officer',
    imageSrc: rizwanHaq,
    imageAlt: 'Rizwan Haq',
  },
  {
    id: 'patrick-zola',
    name: 'Dr. Patrick Zola',
    role: 'Senior Adviser, Health Care Transformation',
    imageSrc: patrickZola,
    imageAlt: 'Dr. Patrick Zola',
  },
  {
    id: 'shakeeb-ahmed',
    name: 'Shakeeb Ahmed',
    role: 'Director, Digital Health',
    imageSrc: shakeebAhmed,
    imageAlt: 'Shakeeb Ahmed',
  },
  {
    id: 'mohamed-elmokadm',
    name: 'Mohamed Elmokadm',
    role: 'Senior Account Manager',
    imageSrc: mohamedElmokadm,
    imageAlt: 'Mohamed Elmokadm',
  },
  {
    id: 'abdulmohsen-albrag',
    name: 'Abdulmohsen Albrag',
    role: 'Business Relationships Director',
    imageSrc: abdulmohsenAlbrag,
    imageAlt: 'Abdulmohsen Albrag',
  },
]
