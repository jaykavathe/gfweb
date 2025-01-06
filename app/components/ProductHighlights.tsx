import { SparklesIcon } from '@heroicons/react/24/outline'

const features = [
  {
    title: 'Scenario 1',
    description: 'Perfect for breaking the ice and starting conversations naturally. Get personalized openers that match your style.',
    icon: SparklesIcon,
  },
  {
    title: 'Scenario 2',
    description: 'Keep the conversation flowing with engaging responses. Turn small talk into meaningful connections.',
    icon: SparklesIcon,
  },
  {
    title: 'Scenario 3',
    description: 'Navigate complex social situations with confidence. Get smart suggestions for any dating scenario.',
    icon: SparklesIcon,
  },
]

export default function ProductHighlights() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 
          className="text-4xl font-heading font-extrabold text-center mb-12"
          style={{ color: '#76356D' }}
        >
          For every Scenario
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <feature.icon 
                className="w-12 h-12 mx-auto mb-4" 
                style={{ color: '#76356D' }}
              />
              <h3 
                className="text-xl font-heading font-bold text-center mb-2"
                style={{ color: '#76356D' }}
              >
                {feature.title}
              </h3>
              <p className="text-center text-[#76356D] font-bold">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

