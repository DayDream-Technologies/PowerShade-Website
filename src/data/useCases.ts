export interface UseCase {
  id: string
  title: string
  description: string
  benefits: string[]
  additionalInfo: string
  image: string
}

export const useCases: UseCase[] = [
  {
    id: 'beach',
    title: 'Beach Days',
    description: 'The classic PowerShade experience. Spend all day at the beach without worrying about your devices running out of battery.',
    benefits: [
      'Charge multiple phones simultaneously',
      'Keep your Bluetooth speaker playing all day',
      'Power a small fan for extra comfort',
      'Keep e-readers and tablets charged for beach reading',
    ],
    additionalInfo: 'The PowerShade\'s sturdy sand anchor keeps it stable even in Michigan\'s lake breezes, while the adjustable tilt mechanism lets you maximize both shade and solar exposure throughout the day.',
    image: '/images/beach-family-demo.png',
  },
  {
    id: 'lakeside',
    title: 'Lakeside Picnics',
    description: 'Turn your lakeside gatherings into tech-friendly experiences without sacrificing nature\'s beauty.',
    benefits: [
      'Stream music throughout your picnic',
      'Charge devices for the whole family',
      'Power LED lights as evening approaches',
      'Take and share photos all day without battery anxiety',
    ],
    additionalInfo: 'The PowerShade\'s lightweight design makes it easy to transport from your car to your perfect picnic spot. The integrated battery storage means you can continue charging even as the sun begins to set on your perfect Michigan evening.',
    image: '/images/Family Beach Portrait.png',
  },
  {
    id: 'events',
    title: 'Outdoor Events',
    description: 'Whether it\'s a music festival, farmers market, or outdoor fair, PowerShade keeps you connected.',
    benefits: [
      'Stay charged during all-day events',
      'Provide a charging station for friends',
      'Keep your device ready for essential photos and videos',
      'Maintain access to maps, schedules, and event information',
    ],
    additionalInfo: 'The PowerShade\'s distinctive design makes it easy to spot in a crowd—perfect for establishing a meeting point with friends. The secure storage pocket in the pole keeps valuables safe while you enjoy the event.',
    image: '/images/Relaxing demo.png',
  },
  {
    id: 'camping',
    title: 'Camping & Outdoor Recreation',
    description: 'Extend your off-grid adventures without sacrificing essential device power.',
    benefits: [
      'Charge GPS devices and outdoor equipment',
      'Maintain communication capabilities in remote areas',
      'Power cameras for landscape photography',
      'Charge headlamps and other safety equipment',
    ],
    additionalInfo: 'While camping in Michigan\'s beautiful state and national parks, the PowerShade\'s built-in battery reserve stores energy during the day that you can use to power essentials at night. The adjustable height accommodates various terrains and seating arrangements.',
    image: '/images/Camping scene.png',
  },
  {
    id: 'backyard',
    title: 'Backyard Living',
    description: 'Transform your Michigan backyard into a sustainable outdoor office or leisure space.',
    benefits: [
      'Power laptops for outdoor work sessions',
      'Charge devices during backyard gatherings',
      'Maintain power for outdoor movie nights',
      'Reduce your home energy consumption',
    ],
    additionalInfo: 'The PowerShade\'s durable construction withstands Michigan\'s varied climate, from hot summer days to sudden summer storms. The easy setup and takedown process means you can quickly adapt to changing weather conditions.',
    image: '/images/Backyard scene.png',
  },
]
