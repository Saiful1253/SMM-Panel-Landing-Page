import { useEffect, useMemo, useState } from 'react'
import Modal from './Modal'
import { validateAuthForm } from '../lib/validation'

export default function AuthModal({ isOpen, onClose, initialMode = 'signin' }) {
  const [mode, setMode] = useState(initialMode)
  const [formData, setFormData] = useState({ email: '', password: '', name: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validationErrors = useMemo(() => validateAuthForm(formData, mode), [formData, mode])

  useEffect(() => {
    setFormData({ email: '', password: '', name: '' })
    setErrors({})
    setTouched({})
    setIsSubmitting(false)
  }, [mode])

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
    const allTouched = { email: true, password: true }
    if (mode === 'signup') allTouched.name = true
    setTouched(allTouched)

    const currentErrors = validateAuthForm(formData, mode)
    setErrors(currentErrors)

    if (Object.keys(currentErrors).length > 0) return

    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 800))

    alert(`${mode === 'signin' ? 'Sign In' : 'Sign Up'} functionality will be implemented with backend integration.`)
    setIsSubmitting(false)
    onClose()
  }

  const switchMode = () => {
    setMode((prev) => (prev === 'signin' ? 'signup' : 'signin'))
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={mode === 'signin' ? 'Sign In' : 'Create Account'}>
      <form onSubmit={handleSubmit} className="auth-form" noValidate>
        {mode === 'signup' && (
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange('name')}
              onBlur={() => handleBlur('name')}
              placeholder="Enter your full name"
              className={displayError('name') ? 'input-error' : ''}
              aria-invalid={!!displayError('name')}
              aria-describedby={displayError('name') ? 'name-error' : undefined}
            />
            {displayError('name') && (
              <span className="field-error" id="name-error" role="alert">
                {displayError('name')}
              </span>
            )}
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange('email')}
            onBlur={() => handleBlur('email')}
            placeholder="Enter your email"
            className={displayError('email') ? 'input-error' : ''}
            aria-invalid={!!displayError('email')}
            aria-describedby={displayError('email') ? 'email-error' : undefined}
          />
          {displayError('email') && (
            <span className="field-error" id="email-error" role="alert">
              {displayError('email')}
            </span>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={handleChange('password')}
            onBlur={() => handleBlur('password')}
            placeholder="Enter your password"
            className={displayError('password') ? 'input-error' : ''}
            aria-invalid={!!displayError('password')}
            aria-describedby={displayError('password') ? 'password-error' : undefined}
          />
          {displayError('password') && (
            <span className="field-error" id="password-error" role="alert">
              {displayError('password')}
            </span>
          )}
        </div>
        <button type="submit" className="btn btn-primary auth-submit" disabled={isSubmitting}>
          {isSubmitting ? 'Processing...' : mode === 'signin' ? 'Sign In' : 'Create Account'}
        </button>
        <p className="auth-switch">
          {mode === 'signin' ? "Don't have an account? " : "Already have an account? "}
          <button type="button" onClick={switchMode} className="auth-switch-btn">
            {mode === 'signin' ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </form>
    </Modal>
  )
}
