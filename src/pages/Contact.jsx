import emailjs from "emailjs-com"
import { useRef } from "react"

export default function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    ).then(
      () => alert("Message sent successfully!"),
      () => alert("Failed to send message")
    )

    e.target.reset()
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input name="name" placeholder="Your Name" required className="w-full p-2 border" />
        <input name="email" placeholder="Your Email" required className="w-full p-2 border" />
        <textarea name="message" placeholder="Your Message" required className="w-full p-2 border"></textarea>
        <button className="bg-blue-900 text-white px-6 py-2 rounded">
          Send Message
        </button>
      </form>

      <a href="https://wa.me/919811018987" className="block mt-6 text-green-600">
        Enquire on WhatsApp
      </a>
    </div>
  )
}
