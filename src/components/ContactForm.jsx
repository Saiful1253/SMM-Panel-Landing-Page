import { useEffect, useMemo, useState } from 'react'
import { validateContactForm } from '../lib/validation'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const validationErrors = useMemo(() => validateContactForm(formData), [formData])

  useEffect(() => {
    setFormData({ name: '', email: '', phone: '', message: '' })
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
    setSubmitStatus(null)
  }, [])

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const handleChange = (field) => (e) => {
    const value = e.target.value
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const displayError = (field) => {
    if (!touched[field]) return null
    return errors[field] || validationErrors[field] || null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const allTouched = { name: true, email: true, phone: true, message: true }
    setTouched(allTouched)

    const currentErrors = validateContactForm(formData)
    setErrors(currentErrors)

    if (Object.keys(currentErrors).length > 0) return

    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitStatus('success')
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTouched({})
    setErrors({})

    setTimeout(() => setSubmitStatus(null), 5000)
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" noValidate>
      <div className="form-group">
        <label htmlFor="contact-name">Full Name</label>
        <input
          type="text"
          id="contact-name"
          value={formData.name}
          onChange={handleChange('name')}
          onBlur={() => handleBlur('name')}
          placeholder="Enter your full name"
          className={displayError('name') ? 'input-error' : ''}
          aria-invalid={!!displayError('name')}
          aria-describedby={displayError('name') ? 'contact-name-error' : undefined}
        />
        {displayError('name') && (
          <span className="field-error" id="contact-name-error" role="alert">
            {displayError('name')}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-email">Email</label>
        <input
          type="email"
          id="contact-email"
          value={formData.email}
          onChange={handleChange('email')}
          onBlur={() => handleBlur('email')}
          placeholder="Enter your email"
          className={displayError('email') ? 'input-error' : ''}
          aria-invalid={!!displayError('email')}
          aria-describedby={displayError('email') ? 'contact-email-error' : undefined}
        />
        {displayError('email') && (
          <span className="field-error" id="contact-email-error" role="alert">
            {displayError('email')}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-phone">Phone Number</label>
        <input
          type="tel"
          id="contact-phone"
          value={formData.phone}
          onChange={handleChange('phone')}
          onBlur={() => handleBlur('phone')}
          placeholder="+880 1XXX-XXXXXX"
          className={displayError('phone') ? 'input-error' : ''}
          aria-invalid={!!displayError('phone')}
          aria-describedby={displayError('phone') ? 'contact-phone-error' : undefined}
        />
        {displayError('phone') && (
          <span className="field-error" id="contact-phone-error" role="alert">
            {displayError('phone')}
          </span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          value={formData.message}
          onChange={handleChange('message')}
          onBlur={() => handleBlur('message')}
          placeholder="Tell us how we can help you..."
          rows="2"
          className={displayError('message') ? 'input-error' : ''}
          aria-invalid={!!displayError('message')}
          aria-describedby={displayError('message') ? 'contact-message-error' : undefined}
        />
        {displayError('message') && (
          <span className="field-error" id="contact-message-error" role="alert">
            {displayError('message')}
          </span>
        )}
      </div>

      <button type="submit" className="btn btn-primary contact-submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {submitStatus === 'success' && (
        <div className="form-success" role="status">
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}
    </form>
  )
}
