export function validateName(value) {
  if (!value.trim()) return 'Full name is required'
  if (value.trim().length < 2) return 'Name must be at least 2 characters'
  if (!/^[a-zA-Z\s\-'.]+$/.test(value.trim())) return 'Name can only contain letters, spaces, hyphens, and apostrophes'
  return null
}

export function validateEmail(value) {
  if (!value.trim()) return 'Email is required'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(value.trim())) return 'Please enter a valid email address'
  return null
}

export function validatePassword(value) {
  if (!value) return 'Password is required'
  if (value.length < 6) return 'Password must be at least 6 characters'
  if (value.length > 128) return 'Password must be less than 128 characters'
  return null
}

export function validateMessage(value) {
  if (!value.trim()) return 'Message is required'
  if (value.trim().length < 10) return 'Message must be at least 10 characters'
  if (value.trim().length > 1000) return 'Message must be less than 1000 characters'
  return null
}

export function validatePhone(value) {
  if (!value.trim()) return 'Phone number is required'
  const cleaned = value.replace(/[\s-]/g, '')
  if (!/^\+?[0-9]{10,15}$/.test(cleaned)) return 'Please enter a valid phone number'
  return null
}

export function validateAuthForm(formData, mode) {
  const errors = {}

  if (mode === 'signup') {
    const nameError = validateName(formData.name)
    if (nameError) errors.name = nameError
  }

  const emailError = validateEmail(formData.email)
  if (emailError) errors.email = emailError

  const passwordError = validatePassword(formData.password)
  if (passwordError) errors.password = passwordError

  return errors
}

export function validateContactForm(formData) {
  const errors = {}

  const nameError = validateName(formData.name)
  if (nameError) errors.name = nameError

  const emailError = validateEmail(formData.email)
  if (emailError) errors.email = emailError

  const phoneError = validatePhone(formData.phone)
  if (phoneError) errors.phone = phoneError

  const messageError = validateMessage(formData.message)
  if (messageError) errors.message = messageError

  return errors
}
