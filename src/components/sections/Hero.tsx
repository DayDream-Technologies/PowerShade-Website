import { useSpring, animated } from '@react-spring/web'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'
import { img } from '@/lib/utils'

export function Hero() {
  const floatSpring = useSpring({
    from: { transform: 'translateY(0px)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-10px)' })
        await next({ transform: 'translateY(0px)' })
      }
    },
    config: { duration: 3000 },
  })

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-ocean-800">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src={img('/images/Logos/Animates_Powershade_Logo.mp4')} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ocean-900/80 via-ocean-800/60 to-ocean-700/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <FadeIn delay={0}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Power Your{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sunset-300 to-sunset-500">
                  Beach Day
                </span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-lg md:text-xl text-ocean-100 mb-8 max-w-xl mx-auto lg:mx-0">
                Stay connected with our innovative solar-powered beach umbrellas. 
                Charge your devices while you enjoy the sun and surf—never worry about battery life again.
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button href="/shop" variant="primary" size="lg">
                  Shop Now
                </Button>
                <Button href="/about" variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Hero Image */}
          <FadeIn delay={300} direction="right">
            <div className="relative">
              <animated.div style={floatSpring} className="relative">
                <img
                  src={img('/images/pro-product-photo.png')}
                  alt="PowerShade Pro Model"
                  width={600}
                  height={600}
                  className="w-full max-w-lg mx-auto drop-shadow-2xl"
                />
              </animated.div>
              <p className="text-center text-ocean-200 text-sm mt-4 italic">
                *Images are AI-generated for demonstration purposes
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
