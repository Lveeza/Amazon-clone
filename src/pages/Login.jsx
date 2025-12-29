import { useState } from 'react'
import amazonLogo from '../assets/amazon.png'
import { auth } from '../firebase'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const navigate = useNavigate()

  const login = async () => {
    setLoading(true)
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log(email)
      navigate('/home')
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  const register = async () => {
    setLoading(true)
    setError('')
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      alert('Account Created Successfully')
    } catch (err) {
      setError(err.message)
    }
    setLoading(false)
  }

  return (
    <div className="flex min-h-screen flex-col items-center bg-white font-nunito">
      {/* Logo */}
      <img src={amazonLogo} alt="Amazon" className="mb-4 mt-6 w-28" />

      {/* Card */}
      <div className="w-[350px] sm:w-[400px] rounded-md border border-gray-300 p-6">
        <h1 className="mb-4 text-2xl font-semibold">
          Sign in or create account
        </h1>

        {/* Email */}
        <label className="text-sm font-semibold">
          Enter mobile number or email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded border border-gray-400 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        {/* Password */}
        <label className="mt-3 block text-sm font-semibold">
          Enter password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded border border-gray-400 px-2 py-1 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        {/* Error */}
        {error && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}

        {/* Continue Button (LOGIN) */}
        <button
          onClick={login}
          disabled={loading}
          className="mt-4 w-full rounded bg-yellow-400 font-semibold py-2 text-sm hover:bg-yellow-500 disabled:opacity-50"
        >
          {loading ? 'Please wait...' : 'Continue'}
        </button>

        {/* Conditions */}
        <p className="mt-4 text-xs">
          By continuing, you agree to Amazon's{' '}
          <span className="cursor-pointer text-blue-600 hover:underline">
            Conditions of Use
          </span>{' '}
          and{' '}
          <span className="cursor-pointer text-blue-600 hover:underline">
            Privacy Notice
          </span>.
        </p>

        {/* Help */}
        <p className="mt-4 cursor-pointer text-sm text-blue-600 hover:underline">
          Need help?
        </p>

        <hr className="my-4" />

        {/* Signup */}
        <button
          onClick={register}
          disabled={loading}
          className="w-full rounded font-semibold border py-2 text-sm hover:bg-gray-50 disabled:opacity-50"
        >
          Create your Amazon account
        </button>
      </div>

      {/* Footer */}
      <footer className="mt-10 text-center text-xs text-gray-600">
        <div className="mb-2 flex justify-center gap-4">
          <span className="cursor-pointer text-blue-600 hover:underline">
            Conditions of Use
          </span>
          <span className="cursor-pointer text-blue-600 hover:underline">
            Privacy Notice
          </span>
          <span className="cursor-pointer text-blue-600 hover:underline">
            Help
          </span>
        </div>
        <p className='font-semibold'>© 1996–2025, Amazon.com, Inc. or its affiliates</p>
      </footer>
    </div>
  )
}
