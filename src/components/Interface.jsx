import {motion} from "framer-motion"

const Section = (props)=>{
    const {children} = props;
    return (
        <motion.section className={`h-screen w-screen p-8 max-w-screen-2xl mx-auto
        flex flex-col items-start justify-center`}
        initial={{
            opacity:0,
            y:50,
        }}
        whileInView={{
            opacity:1,
            y:0,
            transition:{
                duration:1,
                delay:0.6
            }
        }}
        >
            {children}
       </motion.section>
    )
}

export const Interface = ()=>{
    return (
        <div className="flex flex-col items-center w-screen">
        <AboutSection />
        <SkillsSection />
        <Section>
            Projects
        </Section>
        <ContactSection />
        </div>
    )
}

const AboutSection = ()=>{
    return (
        <Section>
            <h1 className="text-6xl font-extrabold leading-snug">
                Hi I'm
                <br />
                <span className="bg-white px-1 italic"> Keshav Tomar</span>
            </h1>
            <motion.p className="text-lg text-gray-600 mt-4"
            initial={{
                opacity:0,
                y:25
            }}
            whileInView={{
                opacity:1,
                y:0,
            }} 
            transition={{
                duration:1,
                delay:1.5
            }}          
            >
                I am a software developer from India
                <br />
                Learn how to make stunning apps with me.
            </motion.p>
            <motion.button className="bg-indigo-600 text-white py-4 px-8 rounded-lg font-bold text-lg mt-16"
             initial={{
                opacity:0,
                y:25
            }}
            whileInView={{
                opacity:1,
                y:0,
            }} 
            transition={{
                duration:1,
                delay:2
            }}> 
                Contact me
            </motion.button>
        </Section>
    )
}



const skills = [
    {
        title : "Three js/ React three Fiber",
        level : 80,
    },
    {
        title : "React",
        level : 90,
    },
    {
        title : "NEXT Js",
        level : 80,
    },
    {
        title : "Node Js",
        level : 80,
    },
    {
        title : "Typescript",
        level : 70,
    },
    {
        title : "Azure",
        level : 60,
    },
    {
        title : "Tailwind css",
        level : 75,
    }
];

const languages = [
    {
        title : "English",
        level : 90
    },
    {
        title : "Hindi",
        level : 100
    }
];


const SkillsSection = ()=>{
    return (
        <Section>
            <motion.div whileInView={"visible"}>
                <h2 className="text-5xl font-bold"> Skills</h2>
                <div className="mt-8 space-y-4">
                    {skills.map((skill,index)=>{
                        return (
                        <div className="w-64" key={index}>
                            <motion.h3 className="text-xl font-bold text-gray-800"
                            initial={{
                                opacity:0
                            }}
                            variants={{
                                visible:{
                                    opacity:1,
                                    transition:{
                                        duration:1,
                                        delay:1 + index * 0.2
                                    }
                                }
                            }}
                           
                            >
                                {skill.title}</motion.h3>
                            <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                <motion.div className="h-full bg-indigo-500 rounded-full" style={{width:`${skill.level}%`}}
                                initial={{
                                    scaleX:0,
                                    originX:0
                                }}
                                variants={{
                                    visible:{
                                        scaleX:1,
                                        transition:{
                                            duration:1,
                                            delay: 1 + index * 0.2
                                        }

                                    }
                                }}></motion.div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </motion.div>
            <div>
                <h2 className="text-5xl font-bold mt-10"> Languages</h2>
                <div className="mt-8 space-y-4">
                    {languages.map((lng,index)=>{
                         return (
                            <div className="w-64" key={index}>
                                <motion.h3 className="text-xl font-bold text-gray-800"
                                initial={{
                                    opacity:0
                                }}
                                variants={{
                                    visible:{
                                        opacity:1,
                                        transition:{
                                            duration:1,
                                            delay:2 + index * 0.2
                                        }
                                    }
                                }}
                               
                                >
                                    {lng.title}</motion.h3>
                                <div className="h-2 w-full bg-gray-200 rounded-full mt-2">
                                    <motion.div className="h-full bg-indigo-500 rounded-full" style={{width:`${lng.level}%`}}
                                    initial={{
                                        scaleX:0,
                                        originX:0
                                    }}
                                    variants={{
                                        visible:{
                                            scaleX:1,
                                            transition:{
                                                duration:1,
                                                delay: 2 + index * 0.2
                                            }
    
                                        }
                                    }}></motion.div>
                                </div>
                            </div>
                            )
                    })}
                </div>
            </div>
        </Section>
    )
}


const ContactSection = ()=>{
     return(
        <Section>
            <h2 className="text-5xl font-bold"> Contact me</h2>
            <div className="mt-8 p-8 rounded-md bg-white w-96 max-w-full">
                <form>
                    <label htmlFor="name" className="font-medium text-gray-900 block mb-1">
                        Name
                    </label>
                    <input type="text" name="name" id="name" className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
                    <label htmlFor="email" className="font-medium text-gray-900 block mb-1 mt-8" >
                        Email
                    </label>
                    <input 
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300"/>
                    <label htmlFor="message" className="font-medium text-gray-900 block mb-1 mt-8">
                        Messgae
                    </label>
                    <textarea name="meaasge" id="message" className="h-32 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300" />
                    <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg mt-16">
                        Submit

                    </button>
                </form>
            </div>
        </Section>
     )
}