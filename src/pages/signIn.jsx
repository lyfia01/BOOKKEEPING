import { useState } from 'react'

import { useNavigate, Link } from 'react-router-dom'

export default function SignIn() {
  const navigate = useNavigate()

  const [form, setForm] = useState({ email: '', password: '' })

  const [error, setError] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!form.email || !form.password) {
      setError('Please fill in all fields.')
      return  // Stop here — don't navigate if validation fails
    }
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col font-sans">
      <nav className="flex items-center justify-between px-8 py-5 max-w-6xl mx-auto w-full">

        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-orange-400 flex items-center justify-center text-white text-sm font-bold shadow-md">
            S
          </div>
          <span className="text-stone-800 font-bold text-lg">Strategist</span>
        </Link>

        {/* Right side: nudges users without accounts to sign up instead */}
        <span className="text-sm text-stone-400">
          No account?{' '}
          {/* Link to /signup — styled in orange to stand out */}
          <Link to="/signup" className="text-orange-500 font-medium hover:text-orange-600 transition-colors">
            Sign up
          </Link>
        </span>
      </nav>

      {/* ── Main Content Area ───────────────────────────────────
          flex-1 makes this section expand to fill the remaining
          vertical space between the nav and the bottom of the screen.
          flex items-center justify-center centers the card both
          horizontally and vertically.                               */}
      <main className="flex-1 flex items-center justify-center px-6 py-16">

        {/* Form card — max-w-sm caps it at ~384px wide so it doesn't
            stretch too wide on large screens. w-full lets it shrink
            on small screens.                                         */}
        <div className="w-full max-w-sm">

          {/* Page heading and sub-heading */}
          <h1 className="text-3xl font-extrabold text-stone-900 mb-2 tracking-tight">Welcome back</h1>
          <p className="text-stone-400 text-sm mb-8">Sign in to your Strategist account.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Email</label>
              <input
                type="email"         
                name="email"         
                value={form.email}   
                onChange={handleChange} 
                placeholder="you@example.com"
                className="bg-white border border-stone-200 rounded-2xl px-4 py-3 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-sm transition"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="bg-white border border-stone-200 rounded-2xl px-4 py-3 text-sm text-stone-800 placeholder-stone-300 focus:outline-none focus:ring-2 focus:ring-orange-300 shadow-sm transition"
              />
            </div>

            {error && (
              <p className="text-xs text-rose-500 font-medium">{error}</p>
            )}

            <button
              type="submit"
              className="mt-2 bg-stone-900 text-white font-semibold py-3.5 rounded-2xl hover:bg-stone-700 transition-all shadow-lg shadow-stone-900/20 text-sm"
            >
              Sign in →
            </button>
          </form>
          <p className="text-center text-xs text-stone-300 mt-8">
            Forgot your password?{' '}
            <span className="text-stone-400 cursor-pointer hover:text-stone-600 transition-colors">Reset it</span>
          </p>
        </div>
      </main>
    </div>
  )
}
