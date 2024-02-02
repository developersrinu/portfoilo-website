import React, { useState } from 'react'
import './App.css'
import './mediaqueries.css'


import profilePic from './assets/8057863-removebg-preview.png';
import aboutPic from './assets/node2.png';
import blog from './assets/blog.jpg'
import shoe from './assets/Screenshot 2024-01-28 030959.png'
import financeTracker from './assets/fincenTracker.png'
import youtube from './assets/ytube.png'
import post from './assets/post.png'
import people from './assets/people-analyzing-growth-charts_23-2148866843.avif'
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaYoutube, FaHamburger, FaHammer } from 'react-icons/fa';


import { FaHtml5, FaBootstrap, FaReact, FaNode, FaGit } from "react-icons/fa6";
import { SiCss3, SiMui, SiExpress, SiMysql } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { BiLogoOpera } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";



const App = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>

      {/* =========================header============================== */}
      <nav id="desktop-nav">
        <div class="logo">Web Developer</div>
        <div>
          <ul class="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div class="logo">Web Developer</div>
        <div class="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <GiHamburgerMenu />
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>

      {/* ==========================about me ======================= */}


      <section id="profile">
        <div class="section__text">
          <p class="section__text__p1">Hello, I'm</p>
          <h1 class="title">SRINU ORSU</h1>
          <p class="section__text__p2">Web Developer</p>
          <div class="btn-container">
            <button
              className="btn btn-color-2"
              style={{ backgroundColor: '#4BA7F0' }}
              onClick={() => window.open('https://drive.google.com/uc?export=download&id=1FPjWSpM2fWYawIbEU-EUwnOlLPU1rWyk')}
            >
              Download CV
            </button>



            <button
              className="btn btn-color-2"
              type="button"
              onClick={() => window.open('https://www.linkedin.com/in/srinu-orsu-0b877422a/')}>
              Contact Info
            </button>

          </div>
          <div id="socials-container">
            <a href='https://www.linkedin.com/in/srinu-orsu-0b877422a/' className='icon'><FaLinkedin className='icon' style={{ color: "#1e53ae", fontSize: "2em" }} /></a>
            <a href='https://github.com/developersrinu' className='icon'><FaGithub style={{ color: "#1e53ae", fontSize: "2em" }} /></a>
            <a href='mailto:orsusrinu606@gmail.com' className='icon'>
              <FaEnvelope style={{ color: "#1e53ae", fontSize: "2em" }} />
            </a>
            <a href='https://www.youtube.com/channel/UCzHzmvgbEcOM3komMTYUc2g' className='icon'><FaYoutube style={{ color: "#1e53ae", fontSize: "2em" }} /></a>
          </div>

        </div>

        <motion.div className="section__pic-container" id='pic-container33'

          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
        >
          <img src={profilePic} alt="John Doe profile picture" />
        </motion.div>
      </section>

      {/* ==========================about me ======================= */}
      <section id="about">
        <p class="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
        <div class="section-container">

          <motion.div class="section__pic-container"
            whileHover={{ rotateY: 0 }}
            animate={{ rotateY: 360 }}
            transition={{ duration: 1 }}
          >
            <img
              src={aboutPic}
              alt="Profile picture"
              class="about-pic"
            />
          </motion.div>

          <div class="about-details-container">
            <div class="about-containers">
              <div class="details-container">
                <h3>Experience</h3>
                <p>worked as web developer intern <br />at Suvidha Foundation </p>
              </div>
              <div class="details-container">
                <h3>Education</h3>
                <p>B.Sc Bachelors Degree<br />At osmania university </p>
              </div>
            </div>
            <div class="text-container">
              <p style={{ whiteSpace: "normal" }}>
                As a versatile web developer, I am proficient in JavaScript, React, Node.js, HTML, CSS, and Bootstrap.
                I have a proven track record of delivering top-notch web applications with a strong focus on intuitive user experiences and optimization techniques.
                My collaborative approach extends to working with designers and back-end developers, and I am adept at writing clean and efficient code.
                I have hands-on experience in troubleshooting front-end issues, actively participating in code reviews, and contributing to continuous improvement processes.
                Currently, I am exploring Next.js with Tailwind CSS to enhance project capabilities. Additionally, I am skilled in creating RESTful APIs.
              </p>

            </div>
          </div>
        </div>

      </section>

      {/* ==========================Exprerience ======================= */}
      <section id="experience">
        <p class="section__text__p1">Explore My</p>
        <h1 class="title">Experience</h1>
        <div class="experience-details-container">
          <div class="about-containers">
            <div class="details-container">
              <h2 class="experience-sub-title">Frontend Development</h2>
              <div class="article-container">
                <article>
                  {/* <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  /> */}
                  <FaHtml5 className='icon1' />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  {/* <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  /> */}
                  <SiCss3 className='icon1' />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  {/* <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  /> */}
                  <FaBootstrap className='icon1' />
                  <div>
                    <h3>Bootstrap</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  {/* <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  /> */}
                  <TbBrandJavascript className='icon1' />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  {/* <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  /> */}
                  <SiMui className='icon1' />
                  <div>
                    <h3>Metrial UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  {/* <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  /> */}
                  <FaReact className='icon1' />
                  <div>
                    <h3>React</h3>
                    <p>Experienced</p>
                  </div>
                </article>
              </div>
            </div>
            <div class="details-container">
              <h2 class="experience-sub-title">Backend Development</h2>
              <div class="article-container">
                <article>
                  {/* <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  /> */}
                  <DiMongodb className='icon1' />
                  <div>
                    <h3>MongoDB</h3>
                    <p>experienced</p>
                  </div>
                </article>
                <article>
                  {/* <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  /> */}
                  <FaNode className='icon1' />
                  <div>
                    <h3>Node JS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  {/* <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  /> */}
                  <SiExpress className='icon1' />
                  <div>
                    <h3>Express JS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  {/* <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  /> */}
                  <FaGithub className='icon1' />
                  <div>
                    <h3>Github</h3>
                    <p>Experienced</p>
                  </div>
                </article>

                <article>
                  {/* <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  /> */}
                  <SiMysql className='icon1' />
                  <div>
                    <h3>Sql</h3>
                    <p>Baiscs</p>
                  </div>
                </article>




                <article>
                  {/* <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    class="icon"
                  /> */}
                  <BiLogoOpera className='icon1' />
                  <div>
                    <h3>Oops</h3>
                    <p>Experienced</p>
                  </div>
                </article>


              </div>
            </div>
          </div>
        </div>

      </section>


      {/* projects============================================== */}
      <section id="projects">
        <p class="section__text__p1">Browse My Recent</p>
        <h1 class="title">Projects</h1>
        <div class="experience-details-container">
          <div class="about-containers">

            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src={financeTracker}
                  alt="Project 1"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Personal Finance Tracker</h2>
              <div class="btn-container">
                <button class="btn btn-color-2 project-btn">
                  <a href='https://github.com/developersrinu/finaceappfinalversion' target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </button>

                <button class="btn btn-color-2 project-btn">
                  <a href='https://finaceappfinalversion.vercel.app/' target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </button>
              </div>

            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src={blog}
                  alt="Project 2"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">mern stack blogging app</h2>
              <div class="btn-container">
                <button class="btn btn-color-2 project-btn">
                  <a href='https://github.com/developersrinu/frontend-blogify' target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </button>
                <button class="btn btn-color-2 project-btn">
                  <a href='https://frontend3-olive.vercel.app' target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </button>
              </div>

            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src={post}
                  alt="Project 2"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">post office aplication</h2>
              <div class="btn-container">
                <button class="btn btn-color-2 project-btn">
                  <a href='https://github.com/developersrinu/last-post' target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </button>
                <button class="btn btn-color-2 project-btn">
                  <a href='https://frontend3-olive.vercel.app' target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src={shoe}
                  alt="Project 1"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Nike App with tailwind css</h2>
              <div class="btn-container">
                <button class="btn btn-color-2 project-btn">
                  <a href='https://github.com/developersrinu/nike-app' target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </button>

                <button class="btn btn-color-2 project-btn">
                  <a href='https://radiant-boba-ed1709.netlify.app/' target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </button>
              </div>

            </div>

            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src={people}
                  alt="Project 2"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">GitRepo Explorer frontend application</h2>
              <div class="btn-container">
                <button class="btn btn-color-2 project-btn">
                  <a href='https://github.com/developersrinu/intern-assessment' target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </button>
                <button class="btn btn-color-2 project-btn">
                  <a href='https://tiny-starburst-1f35da.netlify.app/' target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </button>
              </div>

            </div>

            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src={youtube}
                  alt="Project 2"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">my youtube channel</h2>
              <div class="btn-container">
                <button class="btn btn-color-2 project-btn">
                  <a href='https://github.com/developersrinu' target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </button>
                <button class="btn btn-color-2 project-btn">
                  <a href='https://www.youtube.com/channel/UCzHzmvgbEcOM3komMTYUc2g' target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                </button>
              </div>
            </div>






          </div>
        </div>

      </section>



      <section id="contact">
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
          <div class="contact-info-container">
            <FaEnvelope />
            <p><a href="mailto:orsusrinu606@gmail.com">orsusrinu606@gmail.com</a></p>
          </div>
          <div class="contact-info-container" style={{ margin: '0 2px' }}>
            <FaLinkedin />
            <p><a href='https://www.linkedin.com/in/srinu-orsu-0b877422a/'>LinkedIn</a></p>
          </div>
        </div>
      </section>
      <footer>
        <nav>
          <div class="nav-links-container">
            <ul class="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2024 srinu orsu. All Rights Reserved.</p>
      </footer>
    </div >
  )
}

export default App