import { useEffect, useRef, useState, type FormEvent } from 'react'
import { media } from '../assets/media'
import { Button } from './Button'
import { Reveal } from './Reveal'

type FieldName = 'name' | 'organization' | 'role' | 'email' | 'phone' | 'message'

type FormValues = Record<FieldName, string>

type FieldErrors = Partial<Record<FieldName, string>>

const fieldOrder: FieldName[] = ['name', 'organization', 'role', 'email', 'phone', 'message']

const emptyValues: FormValues = {
  name: '',
  organization: '',
  role: '',
  email: '',
  phone: '',
  message: '',
}

const fields: {
  name: FieldName
  label: string
  type: 'text' | 'email' | 'tel'
  autoComplete: string
  full?: boolean
  multiline?: boolean
}[] = [
  { name: 'name', label: 'Name', type: 'text', autoComplete: 'name' },
  { name: 'organization', label: 'Organization', type: 'text', autoComplete: 'organization' },
  { name: 'role', label: 'Role', type: 'text', autoComplete: 'organization-title' },
  { name: 'email', label: 'Email', type: 'email', autoComplete: 'email' },
  { name: 'phone', label: 'Phone', type: 'tel', autoComplete: 'tel', full: true },
  { name: 'message', label: 'Message', type: 'text', autoComplete: 'off', full: true, multiline: true },
]

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {}

  const required: { name: FieldName; message: string }[] = [
    { name: 'name', message: 'Enter your name.' },
    { name: 'organization', message: 'Enter your organization.' },
    { name: 'role', message: 'Enter your role.' },
    { name: 'email', message: 'Enter your email.' },
    { name: 'phone', message: 'Enter your phone number.' },
    { name: 'message', message: 'Enter a message.' },
  ]

  for (const field of required) {
    if (!values[field.name].trim()) errors[field.name] = field.message
  }

  if (!errors.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!errors.phone) {
    const phone = values.phone.trim()
    const digits = phone.replace(/\D/g, '')
    if (!/^[0-9+().\-\s]+$/.test(phone) || digits.length < 7) {
      errors.phone = 'Enter a valid phone number.'
    }
  }

  return errors
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(emptyValues)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const statusRef = useRef<HTMLParagraphElement>(null)
  const hasErrors = Object.keys(errors).length > 0

  useEffect(() => {
    if (submitted) statusRef.current?.focus()
  }, [submitted])

  function updateField(name: FieldName, value: string) {
    const nextValues = { ...values, [name]: value }
    setValues(nextValues)
    setErrors((current) => {
      if (!current[name]) return current
      const next = { ...current }
      const fieldError = validate(nextValues)[name]
      if (fieldError) next[name] = fieldError
      else delete next[name]
      return next
    })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)

    const firstInvalid = fieldOrder.find((name) => nextErrors[name])
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    // TODO: Connect this form to the contact API or email service once the contact email is confirmed.
    setSubmitted(true)
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-surface">
      <div className="grid lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)]">
        <div className="flex min-h-full flex-col bg-brand-primary-deep">
          <div className="px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
            <h2
              id="contact-heading"
              tabIndex={-1}
              className="max-w-[12ch] text-[clamp(2.4rem,4vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-ink-inverse"
            >
              Let's talk about your care programmes.
            </h2>
          </div>
          <div className="relative mt-auto min-h-72 flex-1">
            <img
              src={media.overhead}
              alt="A man uses a phone while seated on a navy sofa, photographed from above."
              className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
              width={1400}
              height={1600}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="bg-surface px-5 py-14 sm:px-8 sm:py-16 lg:px-16 lg:py-20 xl:pr-24">
          <Reveal>
          {submitted ? (
            <p
              ref={statusRef}
              tabIndex={-1}
              role="status"
              className="rounded-lg border border-line bg-surface-muted px-5 py-6 text-lg text-ink"
            >
              Thank you. Your message has been received.
            </p>
          ) : (
            <form noValidate onSubmit={handleSubmit} aria-describedby="contact-required-note">
              <p id="contact-required-note" className="text-sm text-ink-soft">
                All fields are required.
              </p>
              {hasErrors ? (
                <p id="contact-error-summary" role="alert" className="mt-4 text-sm text-danger">
                  Please correct the highlighted fields.
                </p>
              ) : null}
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {fields.map((field) => {
                  const error = errors[field.name]
                  const inputId = `contact-${field.name}`
                  const errorId = `${inputId}-error`
                  const describedBy = error ? errorId : undefined
                  const fieldClass = `w-full border-0 border-b-2 bg-transparent px-0 py-3 text-base text-ink ${
                    error ? 'border-danger' : 'border-line'
                  }`

                  return (
                    <div key={field.name} className={field.full ? 'sm:col-span-2' : undefined}>
                      <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-ink">
                        {field.label}
                        <span className="sr-only"> (required)</span>
                      </label>
                      {field.multiline ? (
                        <textarea
                          id={inputId}
                          name={field.name}
                          rows={5}
                          autoComplete={field.autoComplete}
                          value={values[field.name]}
                          aria-required="true"
                          aria-invalid={Boolean(error)}
                          aria-describedby={describedBy}
                          className={fieldClass}
                          onChange={(event) => updateField(field.name, event.target.value)}
                        />
                      ) : (
                        <input
                          id={inputId}
                          name={field.name}
                          type={field.type}
                          autoComplete={field.autoComplete}
                          value={values[field.name]}
                          aria-required="true"
                          aria-invalid={Boolean(error)}
                          aria-describedby={describedBy}
                          className={fieldClass}
                          onChange={(event) => updateField(field.name, event.target.value)}
                        />
                      )}
                      {error ? (
                        <p id={errorId} className="mt-2 text-sm text-danger">
                          {error}
                        </p>
                      ) : null}
                    </div>
                  )
                })}
              </div>
              <div className="mt-6">
                <Button type="submit" className="w-full sm:w-auto">
                  Send message
                </Button>
              </div>
            </form>
          )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
