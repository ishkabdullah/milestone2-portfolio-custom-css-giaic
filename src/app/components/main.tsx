import Image from "next/image";
import AbdullahMain from "../data/Main pic.png";
export default function Main() {
    return (
        <div className="main">
            <div className="maindetail">
                <h1 className="mainHeading">Salam! I am</h1>
                <h1 className=" mainMainHeading"><span> Abdullah Sheikh</span> </h1>
                <h2 className="mainHeadings">And I&apos;m a <span> Frontend Developer</span> </h2>
                <p className="mainpara">Crafting the future with code and creativity &ndash; let's connect and innovate together..</p>
                <a href="https://www.linkedin.com/in/ishkabdullah22/"><button className="leftButton">Hire me</button></a>
                <a href="https://github.com/ishkabdullah"><button className="rightButton">See Projects</button></a>
            </div>
            <div className="mypic">
                <Image className="picture"
                    src={AbdullahMain}
                    alt={"Abdullah"}
                    width={400}
                    height={400}
                />
            </div>
        </div>
    )
}