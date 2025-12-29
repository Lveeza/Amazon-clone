import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCc80IlBUBH2rErji4is9x-hmv6EGxJlAk',
  authDomain: 'clone-bae2a.firebaseapp.com',
  projectId: 'clone-bae2a',
  storageBucket: 'clone-bae2a.firebasestorage.app',
  messagingSenderId: '806205738492',
  appId: '1:806205738492:web:fe3e4903ca9ace31f3f679',
  measurementId: 'G-LCMGSRFLRD',
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const analytics = getAnalytics(app)
