import React, { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { IoCheckmarkCircleSharp } from 'react-icons/io5'
import Step from './Step'

const Timeline = () => {
  const ref = useRef(null)
  const isView = useInView(ref, { once: true, amount: 0.6 })

  const data = [
    {
      year: '2025',
      content: [
        {
          title: "Reached $20K MRR with my MERN-based product.",
          description: "Achieved $20K in monthly recurring revenue by building and scaling a MERN stack application."
        },
        {
          title: "Launched a MERN stack SaaS MVP.",
          description: "Built and launched a production-ready SaaS MVP using MongoDB, Express, React, and Node.js."
        },
        {
          title: "Delivered 20+ MERN stack MVPs.",
          description: "Helped startups validate ideas by delivering scalable MERN stack MVPs efficiently."
        },
        {
          title: "Scaled a MERN application to 10K+ users.",
          description: "Optimized APIs, database queries, and frontend performance to support over 10,000 active users."
        }
      ]
    },
    {
      year: '2024',
      content: [
        {
          title: "Built enterprise-grade MERN automation systems.",
          description: "Developed MERN-based workflow automation solutions that reduced manual operations by 60%."
        },
        {
          title: "Started my journey as a MERN stack developer.",
          description: "Began building full-stack web applications using the MERN stack and modern best practices."
        }
      ]
    }
  ]

  return (
    <div ref={ref} className="mx-8 px-4 py-6 shadow-section-inset">
      <motion.p  initial={{opacity:0,filter:'blur(10px)',y:10}} whileInView={{opacity:1,filter:'blur(0px)',y:0}} transition={{duration:0.3,ease:'easeInOut',delay:0.2}}  
        className="text-secondary text-sm  py-4">
          Here's a timeline acheivements. 
        </motion.p>
      {data.map((individual, id) => (
        <div key={id} className="flex flex-col gap-3">
          
          <motion.h2
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={isView ? { opacity: 1, filter: 'blur(0px)' } : {}}
            transition={{ duration: 0.3, delay: id * 0.1 }}
            className="font-bold text-black shadow-own rounded-md w-fit px-2 py-1"
          >
            {individual.year}
          </motion.h2>

          <div className="flex flex-col gap-4">
            {individual.content.map((item, idx) => (
              <div key={idx} className="pl-4 mb-4">
                
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={isView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: idx * 0.2 }}
                  >
                    <Step />
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: -10 }}
                    animate={isView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.3, delay: idx * 0.2 }}
                    className="text-neutral-600"
                  >
                    {item.title}
                  </motion.h3>
                </div>

                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={isView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: idx * 0.3 }}
                  className="text-neutral-400 pt-1 text-sm pl-7"
                >
                  {item.description}
                </motion.p>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
