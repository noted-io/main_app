'use client'

import { useState, useEffect } from 'react'

const TypingEffect = ({ words }) => {
  const [currentWord, setCurrentWord] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const typeEffect = () => {
      const current = words[currentWord]
      const shouldDelete = isDeleting ? 1 : -1
      setCurrentText(current.substring(0, currentText.length - shouldDelete))

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false)
        setCurrentWord((prev) => (prev + 1) % words.length)
      }

      const speedUp = isDeleting ? 100 : 200
      setTimeout(typeEffect, speedUp)
    }

    typeEffect()

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [currentWord, currentText, isDeleting, words])

  return (
    <span className="text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      {currentText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
    </span>
  )
}

const MovingConveyor = ({ items }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        {items.map((item, index) => (
          <button key={index} className="mx-2 my-1">
            {item}
          </button>
        ))}
      </div>
      <div className="inline-block animate-marquee">
        {items.map((item, index) => (
          <button key={index} className="mx-2 my-1">
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Component() {
  const universities = [
    "Harvard", "MIT", "Stanford", "Yale", "Princeton", "Columbia", "Berkeley", "Oxford", "Cambridge", "ETH Zurich"
  ]
  const apClasses = [
    "AP Biology", "AP Calculus", "AP Chemistry", "AP Physics", "AP Literature", "AP History", "AP Economics", "AP Computer Science"
  ]
  const ibClasses = [
    "IB Biology", "IB Mathematics", "IB Chemistry", "IB Physics", "IB Literature", "IB History", "IB Economics", "IB Computer Science"
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white shadow-sm">
        <a className="flex items-center justify-center" href="#">
          <span className="ml-2 text-xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">NoteShare</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:text-blue-500 transition-colors" href="#">
            Home
          </a>
          <a className="text-sm font-medium hover:text-blue-500 transition-colors" href="#">
            Explore
          </a>
          <a className="text-sm font-medium hover:text-blue-500 transition-colors" href="#">
            Contribute
          </a>
          <a className="text-sm font-medium hover:text-blue-500 transition-colors" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:text-blue-500 transition-colors" href="#">
            Log In
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Making learning accessible and open
                </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  Notes for students -- by students
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input className="flex-1 bg-gray-100 text-gray-900" placeholder="Search by school, class, or semester" type="text" />
                  <button type="submit" className="bg-blue-500 text-white hover:bg-blue-600">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Benefits and Positive Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg">
                <div className="flex flex-col items-center p-6">
                  <h3 className="text-xl font-bold mb-2">Community-Driven</h3>
                  <p className="text-center text-gray-600">Collaborate with peers and share knowledge across a global student network.</p>
                </div>
              </div>
              <div className="bg-white shadow-lg">
                <div className="flex flex-col items-center p-6">
                  <h3 className="text-xl font-bold mb-2">No More Paywalls</h3>
                  <p className="text-center text-gray-600">Access quality educational resources without financial barriers.</p>
                </div>
              </div>
              <div className="bg-white shadow-lg">
                <div className="flex flex-col items-center p-6">
                  <h3 className="text-xl font-bold mb-2">Specialized Notes</h3>
                  <p className="text-center text-gray-600">Find tailored notes for your specific courses and learning needs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white overflow-hidden">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">
              Explore by Institution and Course
            </h2>
            <div className="space-y-8">
              <MovingConveyor items={universities} />
              <MovingConveyor items={apClasses} />
              <MovingConveyor items={ibClasses} />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2 text-blue-500">Upload</h3>
                <p className="text-gray-600">Share your notes and help fellow students.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2 text-purple-500">Search</h3>
                <p className="text-gray-600">Find the notes you need for your classes.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2 text-pink-500">Rate</h3>
                <p className="text-gray-600">Help others by rating and reviewing notes.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gradient bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">Join Our Community</h2>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Start sharing and accessing quality notes today. Join thousands of students helping each other succeed.
                </p>
              </div>
              <div className="space-x-4">
                <button className="bg-blue-500 text-white hover:bg-blue-600">Sign Up</button>
                <button className="text-blue-500 border-blue-500 hover:bg-blue-50">Explore Notes</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© 2024 NoteShare. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-700" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-gray-700" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}
