import { Link } from "react-router-dom"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-[#0f2a44] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-lg font-bold tracking-wide">
          CHOYAL INDUSTRIES
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/quality">Quality</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f2a44] px-4 pb-4 space-y-3">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/products">Products</Link>
          <Link onClick={() => setOpen(false)} to="/quality">Quality</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>
        </div>
      )}
    </header>
  )
}
