import emailjs from "@emailjs/browser"
import { useRef } from "react"

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )

    alert("Thank you! Your message has been sent.")
    e.target.reset()
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Contact Choyal Industries
          </h2>
          <p className="text-gray-600 mb-6">
            Get in touch with us for quotations, partnerships, or technical
            discussions. Our team will respond promptly.
          </p>

          <div className="space-y-3 text-sm">
            <p><strong>📍 Address:</strong> Faridabad, Haryana</p>
            <p><strong>📞 Phone:</strong> +91 98110 18987</p>
            <p><strong>📧 Email:</strong> pk_choyal@yahoo.in</p>
          </div>

          <a
            href="https://wa.me/919811018987"
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded"
          >
            WhatsApp Enquiry
          </a>
        </div>

        {/* RIGHT */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-8 shadow rounded space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full border p-3 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border p-3 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            className="w-full border p-3 rounded"
          ></textarea>

          <button className="w-full bg-[#0f2a44] text-white py-3 rounded font-semibold">
            Send Message
          </button>
        </form>

      </div>
    </section>
  )
}
