import { useState } from 'react'
import Modal from './Modal'

export default function AuthModal({ isOpen, onClose, initialMode = 'signin' }) {
  const [mode, setMode] = useState(initialMode)
  const [formData, setFormData] = useState({ email: '', password: '', name: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`${mode === 'signin' ? 'Sign In' : 'Sign Up'} functionality will be implemented with backend integration.`)
    onClose()
  }

  const switchMode = () => {
    setMode(mode === 'signin' ? 'signup' : 'signin')
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={mode === 'signin' ? 'Sign In' : 'Create Account'}>
      <form onSubmit={handleSubmit} className="auth-form">
        {mode === 'signup' && (
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            placeholder="Enter your password"
            required
            minLength={6}
          />
        </div>
        <button type="submit" className="btn btn-primary auth-submit">
          {mode === 'signin' ? 'Sign In' : 'Create Account'}
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
