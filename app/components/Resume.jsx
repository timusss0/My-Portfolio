import { PiGameController, PiGraduationCapFill ,PiShootingStarThin} from "react-icons/pi";
import { FaLaptop } from "react-icons/fa6";
const educationData = [
    {
        year:"2023-2026",
        title:"Informatics",
        institution:"Universitas Pembangunan Jaya",
        description:"Studying Informatics with a strong focus on web development and software engineering. Actively involved in academic projects, student organization work, and hands-on application development using PHP, Laravel, MySQL."
    },
    {
        year:"2023",
        title:"Junior Web Developer",
        institution:"Vocational School Graduate Academy - Digital Talent Scholarship",
        description:"Completed the Junior Web Developer program under the Digital Talent Scholarship. The training covered HTML, CSS, and PHP for building responsive and functional websites. At the end of the program, I took the official competency exam to earn the Junior Web Developer certification from BNSP."
    },
    {
        year:"2020-2023",
        title:"Software Engineer",
        institution:"Vocational high school for software engineering ",
        description:"Learned the foundations of programming, databases, and system design. Worked on several practical projects, including a hotel booking website for the final competency exam. Gained experience with Java, PHP, MySQL, HTML, CSS, and Bootstrap."
    },

]

const workData = [
  {
    year: "Agu 2025 - Okt 2025",
    title: "Full-stack Developer Intern",
    institution: "Chameleon",
    description:
      "Worked on continuing an existing WordPress project using plugins, ACF, and custom code snippets to ensure client requirements were met. Also conducted research and development to integrate a frontend using Next.js with a WordPress-powered backend."
  },
  {
    year: "Mar 2025 - Jul 2025",
    title: "Cooperation, public relations, international",
    institution: "Universitas Pembangunan Jaya",
    description:
      "Handled public relations and international cooperation activities. Coordinated with partners, assisted in meetings with the Vice Rector, and supported collaborations with foreign universities. Contributed to online and offline event management and created international-themed Instagram content. Strengthened communication and collaboration skills in building strategic relations."
  },
  {
    year: "Mar 2024 - Jun 2024",
    title: "Web Developer",
    institution: "PT Cipta Sukses Globalindo (CSG)",
    description:
      "Developed web applications using Laravel 10, covering both frontend and backend. Built a comprehensive Sales Management Dashboard for real-time sales monitoring, helping improve operational efficiency and decision-making. Implemented CRUD features and worked with MySQL for database management."
  }
];

export const Resume = () => {
     return (
        <section className="h-screen mt-24 pb-8 max-w-7xl  mx-auto flex flex-col justify-center" id="resume">
            <div className="text-center ">
                <p className="text-2xl text-content font-semibold inline-flex items-center gap-1 border-outer px-3 rounded-2xl mb-4"><PiShootingStarThin className="text-4xl font-bold" />Resume</p>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8">Education and practical experience</h2>
            </div>
            {/* time line */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 space-y-12 relative mb-18 z-10">
                {/* education */}
                <div className="ml-[100px]">
                    <h3 className="text-lg md:text-2xl font-bold text-content mb-5">My Education</h3>
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60"></div>
                            <div> 
                                {educationData.map((item,index) => (
                                <div className="relative flex items-start space-x-6 pb-8" key={index}>
                                    <div className="relative flex-shrink-0">
                                        <div className="w-8 h-8 custom-gradient rounded-full flex items-center justify-center"> 
                                            <PiGraduationCapFill className="w-4 h-4 text-white "/> 
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0 ">
                                        <div className="flex items-center space-x-2 mb-2 ">
                                            <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-2xl">{item.year}</span>
                                        </div>
                                        <h4 className="text-lg font-semibold text-content ">{item.title}</h4>
                                        <p className="text-gray-600 mb-2 ">{item.institution}</p>
                                        <p className="text-gray-700 text-sm">{item.description}</p>
                                    </div>
                                </div>
                        ))} 
                        </div>
                    </div>
                </div>

                {/* education */}
                <div className="ml-[120px]">
                    <h3 className="text-lg md:text-2xl font-bold text-content mb-5">My Intern Experience</h3>
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60"></div>
                            <div> 
                                {workData.map((item,index) => (
                                <div className="relative flex items-start space-x-6 pb-8" key={index}>
                                    <div className="relative flex-shrink-0">
                                        <div className="w-8 h-8 custom-gradient rounded-full flex items-center justify-center"> 
                                            <FaLaptop className="w-4 h-4 text-white "/> 
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0 ">
                                        <div className="flex items-center space-x-2 mb-2 ">
                                            <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-2xl">{item.year}</span>
                                        </div>
                                        <h4 className="text-lg font-semibold text-content ">{item.title}</h4>
                                        <p className="text-gray-600 mb-2 ">{item.institution}</p>
                                        <p className="text-gray-700 text-sm">{item.description}</p>
                                    </div>
                                </div>
                        ))} 
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}