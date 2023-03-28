import Image from "next/image"
import styles from "../styles/Home.module.css"
import selfie from "../public/images/Filipiniana.jpg"
import { Katibeh, Open_Sans } from '@next/font/google'
import { FaMailBulk } from "react-icons/fa"
import { MdLocationOn } from "react-icons/md"
import { FaPhone } from "react-icons/fa"
import { MdMail } from "react-icons/md"
import { FaCog } from "react-icons/fa"
import { FaCode } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { FaGraduationCap } from "react-icons/fa"
import { FaSuitcase } from "react-icons/fa"

export const alone = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['italic']
});

export const text = Katibeh({
  subsets: ['latin'],
  weight: ['400']
});

export default function Home() {
  return (
    <div className={`min-h-screen min-w-full flex flex-row ${text.className}`}>
      <div className="w-[22.5%] bg-[#CED7E6] z-10 shadow-3xl"></div>
      {/* LEFT */}
        <div className="w-[20%] bg-[#333740]">
          <div className="flex flex-col gap-[3.5rem]">
            <Image src={selfie} alt="selfie" w={300} height={300} className="mr-auto ml-auto mt-[2rem] p-4 rounded-full z-10"/>
            <div className="px-2 bg-[#F9CB1B] rounded-r-full w-[80%] flex">
              <div className="flex flex-row items-center gap-[3.25rem]">
                <FaMailBulk size={40} className="text-[#333740] mr-auto"/>
                <p className="text-[#333740] font-bold text-[2.5rem] align-middle mt-auto mb-auto uppercase">
                  Contact
                </p>
              </div>
            </div>
            <div className="flex flex-row text-white text-[2rem] px-5 gap-2 mr-auto items-center">
              <MdLocationOn size={40}/>
              <div>Manila</div>
            </div>
            <div className="flex flex-row text-white text-[2rem] px-5 gap-2 mr-auto items-center">
              <FaPhone size={40}/>
              <div>+639563852755</div>
            </div>
            <div className="flex flex-row text-white text-[2rem] px-5 gap-2 mr-auto items-center">
              <MdMail size={40}/>
              <div>vjtvince@gmail.com</div>
            </div>

            <div className="px-2 bg-[#F9CB1B] rounded-r-full w-[80%] flex mt-[1rem]">
              <div className="flex flex-row items-center gap-[4.25rem]">
                <FaCog size={40} className="text-[#333740] mr-auto"/>
                <div className="flex items-center text-[#333740] font-bold text-[2.5rem] align-middle mt-auto mb-auto uppercase">
                  Skills
                </div>
              </div>
            </div>
            <div className="flex flex-col text-white text-[2rem] px-[3rem] gap-2 mr-auto items-center">
              <ul className="list-disc ml-[2rem]">
                <li>User Interface Design</li>
                <li>User Experience Design</li>
                <li>Front-end Development</li>
                <li>Quality Assurance</li>
              </ul>
            </div>

            <div className="px-2 bg-[#F9CB1B] rounded-r-full w-[80%] flex mt-[1rem]">
              <div className="flex flex-row items-center gap-[2.5rem]">
                <FaCode size={40} className="text-[#333740] mr-auto"/>
                <div className="text-[#333740] font-bold text-[2.5rem] align-middle mt-auto mb-auto uppercase">
                  Languages
                </div>
              </div>
            </div>
            <div className="flex flex-col text-white text-[2rem] px-[2rem] gap-2 mr-auto items-center mb-[.5rem]">
              <div className="flex flex-row gap-10">
                <ul className="list-disc ml-[2rem]">
                  <li>Html5</li>
                  <li>CSS</li>
                  <li>Python</li>
                  <li>Javascript</li>
                </ul>
                <ul className="list-disc ml-[2rem]">
                  <li>C++</li>
                  <li>MySQL</li>
                  <li>ReactJS</li>
                  <li>WordPress</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      {/* RIGHT */}

      <div className={`w-[35%] ${styles.customShadow}`}>
        <div className="flex flex-col">
            <div className="relative right-[13rem] flex flex-col mt-[3.8rem] p-2 pb-[2rem] w-[874px] bg-[#F9CB1B]">
              <span className="text-[5.5rem] text-[#333740] ml-[15rem] mr-auto uppercase">Vince Jian T. Tria</span>
              <span className={`font-bold text-[3rem] text-white ml-[15rem] mr-auto ${alone.className}`}>Web Developer</span>
            </div>
            <div className="flex flex-col">
              <div className="p-[.5rem] px-[1rem] bg-[#333740]">
                <div className="flex flex-row mr-auto items-center text-white gap-[1rem]">
                  <FaUser size={50}/>
                  <span className="uppercase text-[2.5rem]">About Me</span>
                </div>
              </div>
              <div className="p-[1rem]">
                <p className="text-justify text-[1.5rem]">Hi. I am Vince and I plan to provide my employer with efficient, effective, and satisfactory work. I have minimal in field but I am more than willing to learn to help my employer and myself as well. I mostly excel in designing, specifically UI/UX and front-end development. Other fields of work are more than welcome to further expand my skills and experiences.</p>
              </div>
              <div className="p-[.5rem] px-[1rem] bg-[#333740]">
                <div className="flex flex-row mr-auto items-center text-white gap-[1rem]">
                  <FaGraduationCap size={50}/>
                  <span className="uppercase text-[2.5rem]">Education</span>
                </div>
              </div>
              <div className="flex flex-col text-[#333740] p-[1rem] border-[#333740] ml-[3rem] my-[.5rem] border-l-[.5rem] mr-auto">
                <p className="text-justify text-[2rem]">BS in INFORMATION TECHNOLOGY</p>
                <p className="text-justify text-[1.5rem]">2019-present</p>
                <ul className="text-justify text-[1.5rem] list-disc ml-[3rem]">
                  <li>Dean's Lister A.Y. 2019-2020 2nd Semester</li>
                  <li>Dean's Lister A.Y. 2019-2020 1st Semester</li>
                  <li>Dean's Lister A.Y. 2019-2020 2nd Semester</li>
                  <li>Dean's Lister A.Y. 2019-2020 1st Semester</li>
                  <li>Dean's Lister A.Y. 2019-2020 2nd Semester</li>
                </ul>
                <p className="text-justify text-[1.5rem]">Current GWA: 1.546</p>
                <p className="text-justify text-[1.75rem]">UNIVERSITY OF SANTO TOMAS</p>
              </div>
              <div className="p-[.5rem] px-[1rem] bg-[#333740]">
                <div className="flex flex-row mr-auto items-center text-white gap-[1rem]">
                  <FaSuitcase size={50}/>
                  <span className="uppercase text-[2.5rem]">Experience/Affiliations</span>
                </div>
              </div>
              <div className="flex flex-col text-[#333740] px-[1rem] border-[#333740] ml-[3rem] my-[.5rem] border-l-[.5rem] mr-auto">
                <p className="text-justify text-[1.75rem]">RemindMed: Medication reminder and tracker using optical character recognition and text-to-speech Version 2.0</p>
                <p className="text-justify text-[1.5rem] font-bold">Front-end Developer</p>
                <ul className="text-justify text-[1.5rem] list-disc ml-[3rem]">
                  <li>RemindMed v2.0 is a capstone project made as a student in University of Santos</li>
                </ul>
                <p className="text-justify text-[2rem]">Enrollment System for Laly's Farmville</p>
                <p className="text-justify text-[1.5rem] font-bold">Quality Assurance Officer</p>
                <ul className="text-justify text-[1.5rem] list-disc ml-[3rem]">
                  <li>A project done at the University of Santo Tomas as a student</li>
                </ul>
                <p className="text-justify text-[2rem]">Thomasian Gaming Society</p>
                <p className="text-justify text-[1.5rem] font-bold">Human Resources Officer</p>
                <ul className="text-justify text-[1.5rem] list-disc ml-[3rem]">
                  <li>An organization at the University of Santo Thomas</li>
                </ul>
              </div>
            </div>
        </div>
      </div>

      <div className={`w-[22.5%] bg-[#CED7E6] z-10`}></div>
    </div>
  )
}
