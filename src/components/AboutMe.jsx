import { Briefcase, Code, User } from 'lucide-react'
import React from 'react'

export const AboutSection = () => {
  return (
   <section id='about' className='py-24 px-4 relative'>
    <div className='container mx-auto max-w-5xl'>
     <h2 className='text-4xl font-bold mb-12 text-center '>
        About <span className='text-primary'>Me</span>
     </h2>
     <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
       <div className='space-y-6'>
         <h3 className='text-2xl font-semibold'>Passionate Java Web Developer </h3>
         <p className='text-muted-foreground '>I have completed intensive training in Full Stack Java Development at Naresh IT, where I gained hands-on experience with core Java, Spring Boot, REST APIs, and frontend technologies.
Additionally, I completed a practical Java Internship with INTERNSHIP STUDIO </p>
          <p className='text-muted-foreground'>working on real-world projects.
These experiences strengthened my problem-solving skills and depend my understanding of full-stack development.
I am confident in building scalable, efficient applications using modern Java technologies.</p>
       <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
          <a href="#contact" className='cosmic-button'>
            Get in Touch
          </a>
           <a href="/LAKSHMI_NARASIMHA_REDDY.pdf" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300'>
            Download CV
          </a>
       </div>
       </div>
       <div className='grid grid-cols-1 gap-6'> 
        <div className='gradient-border p-6 card-hover'>
             <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                   <Code className='h-6 w-6 text-primary'/>
                </div>
                 <div className='text-left'>
                      <h4 className='text-lg font-semibold'>Web Development</h4>
                      <p className='text-muted-foreground'>Building Java microservices efficiently.</p>
                 </div>
             </div>
        </div>
         <div className='gradient-border p-6 card-hover'>
           <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                   <User className='h-6 w-6 text-primary'/>
                </div>
                  <div className='text-left'>
                      <h4 className='text-lg font-semibold'>UI Design</h4>
                      <p className='text-muted-foreground'>Designing user-friendly, intuitive UIs.</p>
                 </div>
             </div>
         </div>
          <div className='gradient-border p-6 card-hover'>
             <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10 '>
                   <Briefcase className='h-6 w-6 text-primary'/>
                </div>
                  <div className='text-left'>
                      <h4 className='text-lg font-semibold'>Project Management</h4>
                      <p className='text-muted-foreground'>Ensuring seamless project execution.</p>
                 </div>
             </div>
          </div>
         
       </div>
     </div>
     
    </div>
   </section>
  )
}
