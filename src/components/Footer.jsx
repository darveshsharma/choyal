export default function Footer() {
  return (
    <footer className="bg-[#0f2a44] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-2">Choyal Industries</h3>
          <p className="text-sm">
            ISO 9001:2015 Certified Manufacturer
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <p className="text-sm">Faridabad, Haryana</p>
          <p className="text-sm">+91 98110 18987</p>
          <p className="text-sm">pk_choyal@yahoo.in</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Industries Served</h3>
          <p className="text-sm">Automotive</p>
          <p className="text-sm">Railways</p>
          <p className="text-sm">Farm Equipment</p>
        </div>
      </div>

      <p className="text-center text-xs mt-8">
        © {new Date().getFullYear()} Choyal Industries. All rights reserved.
      </p>
    </footer>
  )
}
