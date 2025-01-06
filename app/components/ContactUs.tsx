export default function ContactUs() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center text-primary mb-12">
          Get in Touch
        </h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-md border border-primary focus:border-secondary focus:outline-none transition-colors duration-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-md border border-primary focus:border-secondary focus:outline-none transition-colors duration-300"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-2 rounded-md border border-primary focus:border-secondary focus:outline-none transition-colors duration-300"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 rounded-md border border-primary focus:border-secondary focus:outline-none transition-colors duration-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

