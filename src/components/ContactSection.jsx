import { Mail } from "lucide-react"


export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4  relative bg-secondary/30">
        <div className="container mx-auto  max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center ">Get In <span className="text-primary"> Touch</span></h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
           Have a project in mind? Feel free to contact me. I’d love to collaborate and bring your ideas to life!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6 justify-center">
                     <div className="flex items-center space-x-4">
                        <div className="p3 rounded-full bg-primary/10">
                             <Mail className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4>EMail</h4>
                            {/* <a href=""></a> */}
                        </div>
                     </div>
              </div>
             </div>
        </div>
        </div>
    </section>
  )
}
