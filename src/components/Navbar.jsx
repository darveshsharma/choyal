import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <header className="bg-[#0f2a44] text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-lg md:text-xl font-bold tracking-wide">
          CHOYAL INDUSTRIES
        </h1>

        <nav className="hidden md:flex space-x-8 text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/quality">Quality</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
