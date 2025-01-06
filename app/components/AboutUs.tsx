import Image from 'next/image'

export default function AboutUs() {
  return (
    <section className="bg-primary py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-heading font-bold text-center text-secondary mb-12">
          Our Mission
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <p className="text-secondary text-lg leading-relaxed">
              At [App Name], our mission is to revolutionize the way people interact with technology. 
              We believe in creating intuitive, powerful, and accessible solutions that empower users 
              to achieve more in their personal and professional lives. Our team is dedicated to 
              continuous innovation, ensuring that our app stays at the forefront of technological 
              advancements while maintaining a user-centric approach.
            </p>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <Image
              src="/placeholder.svg"
              alt="Our Team"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

