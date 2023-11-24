import React from "react";
import useDocumentTitle from "../hooks/documentTitle";
import { Link } from "react-router-dom";
import '../css/about_style.css';
import pythonIcon from "../images/icons/python.png";
import sqlIcon from "../images/icons/sql-server.png";
import rIcon from "../images/icons/letter-r.png";
import powerbiIcon from "../images/icons/powerbi.png";

function About() {
    useDocumentTitle('Kenneth Imade - About Me')
    return (
        <>
            <h1 className="title">
                About Me
            </h1>

            <p className="text">
                My name is Kenneth Imade, a data scientist and engineer. I constantly seek opportunities where
                I can leverage data to improve the decision making process. 
            </p>

            <p className="text">
                Currently I am volunteering as a <b>Data Analyst</b> with 
                <Link className="link" to="https://thecomicsculturalimpactcollective.org/" target="_blank"><b>The Comics Cultural Impact Collective</b></Link>
                where I am helping to harness data in raising awarness of the cultural impact of comics in the UK.
            </p>

            <p class="text">
                You can reach me on 
                <Link to="https://www.linkedin.com/in/kenneth-imade/" className="link"> LinkedIn</Link>, or through an
                <Link to="mailto:kenimade91@gmail.com" className="link"> email</Link>.
            </p>

            <hr></hr>

            <section>
            
                <h2 class="sub-title">Brief Career History</h2>

                <p class="text">
                    My foray into data science began with my undergraduate internship. 
                    I worked as a <b>Process Engineer</b> with <b>Chevron</b> in the Early Concepts Development department.
                    Where one of our roles was optimizing the processes used in various projects around the company.
                    One of these projects was developing a PowerBI dashboard to monitor the performance of oil producing wells.
                </p>

                <p class="text">
                    This experience led me down the rabbit hole of data science. Upon returning to school for my final year, Covid-19 happened.
                    Leveraging the spare time I had I went into learning programming with Python. After acquiring the necessary skills I took
                    courses on Udemy and also WorldQuant University on data science. Armed with this knowledge upon graduating I was able to land a
                    job as an Analyst with <Link target="_blank" to="https://verraki.africa/" className="link"><b>Verraki Africa</b></Link>.
                </p>

                <p class="text">
                    My time at Verraki was filled working on various projects which included market research, supporting businesses such as First Bank, 
                    and serving as a Quality Assurance Analyst on a web development project. One of my notable accomplishments
                    was developing a Python script for a market research project to identify the list of web hosting providers in Nigeria, this resulted
                    in the company saving $2000 on what would have been used to hire an external consultant to carry out this research.
                </p>

                <p class="text">
                    In this time period, I was able to volunteer with <Link to="https://omdena.com/" className="link" target="_blank"><b>Omdena</b></Link> as a <b>Machine Learning Engineer</b>.
                    This allowed me to hone my skills in data science and engineering. One memorable highlight was
                    teaching my fellow volunteers the ins and outs of using BeautifulSoup for data extraction.
                </p>

                <p class="text">
                    Although I liked my job at Verraki, I realized that if I wanted to be better equipped in the field of
                    data science and engineering I needed to go for further studies. This need prompted me to apply to various Masters
                    programs in the field of data science. I decided to go with the <b>Business Analytics and Decision Sciences</b> 
                    program at the <b>University of Leeds</b> which I have recently completed.
                </p>

                <p class="text">
                    Now based in London, I am seeking opportunities in data analysis, business analysis, data science, 
                    or data engineering, where I can apply my analytical prowess and passion for data-driven innovation.
                    Feel free to connect with me for opportunities where my skills in data analysis and business 
                    analytics can be of great value.
                </p>

                <div class="contact-btn-container">
                    <Link className="contact-btn link" to="/contact">Contact Me</Link>
                </div>
            </section>

            <hr/>
            
            <section>
                <h2 class="sub-title">Skills</h2>
                <div class="skill-list">
                    <span class="text skill">Python <img className="icon" src={pythonIcon} alt="python"/></span>
                    <span class="text skill">SQL <img className="icon" src={sqlIcon} alt="sql"/></span>
                    <span class="text skill">R <img className="icon" src={rIcon} alt="R"/></span>
                    <span class="text skill">PowerBI <img className="icon" src={powerbiIcon} alt="power-bi"/></span>
                </div>
            </section>
        </>
    )
}

export default About