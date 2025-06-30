import { ArrowRight, ExternalLink, Github } from "lucide-react"

const projects=[
    {id: 1,
      title: "E-Mart ECommerce Frontend Application",  
      description:"A Beautiful ECommerce Frontend Application Build Using React And TailwindCss",
      image:"/projects/project1.jpg",
      tags: ["React","TailwindCs","VsCode"],
      demoUrl:"https://narasimha-prog.github.io/E-Mart/",
      gitHubUrl:"https://github.com/Narasimha-prog/E-Mart"
    },
      {id: 2,
      title: "Fitness Ai Java Microservices Application",  
      description:"A Java Microservices Using Gemini Ai support ,Spring Reactive Gateway",
      image:"/projects/project2.jpg",
      tags: ["React","MaterialUI","Java","SpringBoot","KeyCloak"],
       demoUrl:"https://github.com/Narasimha-prog/java-springboot-microservise-withAI",
      gitHubUrl:"https://github.com/Narasimha-prog/java-springboot-microservise-withAI"
    }
]
export const ProjectsSection = () => {
  return (
   <section id="projects" className="py-24 px-4 relative">
    <div className="container mx-auto max-w-5xl">
       <h2 className="text-3xl md:text-4 font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span></h2>
       <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        I have developed a variety of projects highlighting my expertise in Java, UI design, and project management.
Each project demonstrates my commitment to creating effective, user-friendly software solutions.
       </p>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
               {projects.map(  (project,key)=>(
                <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="h-full w-full  transition-transform object-cover duration-500 group-hover:scale-110"/>
                    </div>
                    <div className="p-6">
                            <div className="flex flex-wrap  gap-2 mb-4"> 
                                {project.tags.map((tag,key)=>(
                                    <span key={key} className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"> 
                                        {tag}
                                    </span>
                                ))}
                            </div>
             
                    <h3 className="text-xl font-semibold mb-1">
                        {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm  mb-4">
                           {project.description}
                    </p>
                    <div className="flex justify-between  items-center mb-4">
                          <div className="flex space-x-3">
                               <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"><ExternalLink size={20}/></a>
                                <a href={project.gitHubUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"><Github size={20}/></a>
                          </div>
                    </div>
                           </div>
                 </div>
               )
                
               )}
       </div>
         <div className="text-center mt-12">
                   <a href="https://github.com/Narasimha-prog" className="cosmic-button w-fit flex items-center mx-auto gap-2">Check Out My GitHub <ArrowRight size={16}/></a>
         </div>
    </div>
   </section>
  )
}
