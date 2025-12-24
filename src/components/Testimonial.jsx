import React from 'react'
import Avatar_1 from '../assets/images/avatar-1.png'
import Avatar_2 from '../assets/images/avatar-2.png'
import Avatar_3 from '../assets/images/avatar-3.png'
import Avatar_4 from '../assets/images/avatar-4.png'
import Avatar_5 from '../assets/images/avatar-5.png'
import Marquee from 'react-fast-marquee'
import SectionHeading from './SectionHeading'


const Testimonial = () => {
    const data = [
  {
    quote: 'Deepak is so great with work, our production was shut down within the first day itself. Highly recommended',
    name: 'Shehzad Khan',
    avatar: Avatar_1
  },
  {
    quote: 'Working with Deepak was a game changer. He understood our requirements instantly and delivered the MVP faster than expected.',
    name: 'Ahsan Ali',
    avatar: Avatar_2
  },
  {
    quote: 'Deepak brings clarity to complex problems. His workflow automation skills helped us scale without increasing team size.',
    name: 'Sarah Malik',
    avatar: Avatar_3
  },
  {
    quote: 'From idea to execution, everything was smooth. The quality of work and attention to detail really stood out.',
    name: 'Usman Raza',
    avatar: Avatar_4
  },
  {
    quote: 'Outstanding developer with a strong product mindset. Deepak doesn’t just write code—he builds solutions that work.',
    name: 'Daniel Thompson',
    avatar: Avatar_5
  }
]
  return (
    <div className='px-4 py-8 mx-8 shadow-section-inset' >
        <SectionHeading children={'People love my work' } delay={0.8}>

        </SectionHeading>
        <div className="flex  mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <Marquee speed={50} pauseOnHover className='py-4'>
            {data.map((item,idx)=>(
                <TestimonialCard key={`testimonial-${idx}`} {...item}/>
            ))}
            </Marquee>
        </div>
    </div>
  )
}
const TestimonialCard =({
    quote,
    name,
    avatar
})=>{
    return(
        <div className='flex flex-col gap-4 shadow-own  justify-between p-4 rounded-lg h-50  max-w-70 mx-10 hover:shadow-lg transition duration-300'>
            <p className='text-sm text-neutral-700'>{quote}</p>
            <div className="flex items-center gap-4">
                <img src={avatar} alt={name} className='size-4 rounded-full object-center'/>
                <p className='text-sm text-neutral-500'>{name}</p>
            </div>
        </div>
    )
}
export default Testimonial
