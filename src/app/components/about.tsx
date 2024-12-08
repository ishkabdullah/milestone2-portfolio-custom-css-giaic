import Image from "next/image";
import Abdullah2 from "../data/About pic.png"
export default function About(){
    return(
        <div id="about" className="about">
            <div className="aboutmypic">
            <Image
            src={Abdullah2}
            alt="maheen2"
            width={400}
            height={400}
            />
            </div>
            <div className="aboutdetail">
                <h1 className="aboutMainHeading">About <span>Me</span></h1>
                <p className="aboutpara"> I am a dedicated learner from Karachi, Pakistan.<br /> Currently enrolled in: <br /> &ndash; SMIT Batch 15 Modern Web and App Development program. <br /> &ndash; And  also pursuing a Cloud Computing and Generative AI course at Governor House Sindh. With a strong focus on TypeScript and Python.<br /> I am passionate about expanding my skills and contributing to innovative projects in technology. My goal is to leverage my education and hands&ndash;on experience to make a meaningful impact in the tech industry.</p>
            </div>
        </div>
    )
}