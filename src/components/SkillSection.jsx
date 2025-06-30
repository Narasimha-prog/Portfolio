const skills=[
    // frontend
    {name:"HTML/CSS",level:60,category: "frontend"},
     {name:"JavaScript",level:65,category: "frontend"},
      {name:"ReactJS",level:75,category: "frontend"},
       {name:"TailwindCss",level:65,category: "frontend"},
         {name:"TailwindCss",level:50,category: "frontend"},
        //  backend
          {name:"Java",level:80,category: "backend"},
          {name:"SpringBoot",level:80,category: "backend"},
          {name:"MySql",level:65,category: "backend"},
          {name:"Postgresql",level:50,category: "backend"},
          {name:"MongoDb",level:50,category: "backend"},
        //   tools
        {name:"intellij",level:75,category: "tools"},
        {name:"Eclipse",level:90,category: "tools"},
        {name:"VSCode",level:65,category: "tools"},
        {name:"PostMan",level:95,category: "tools"},
        {name:"Git/GitHub",level:70,category: "tools"},
        {name:"Docker",level:55,category: "tools"},
]

export const SkillSection = () => {
  return (
    <section id="skills" className="py-25 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl"> 
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My
                <span className="text-primary"> Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {skills.map((skill,key)=>(
                <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div>
                            <h3>{skill.name}</h3>
                        </div>
                </div>
               ))}
            </div>
        </div>
    </section>
  )
}
