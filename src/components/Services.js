import React, { useRef, useEffect, useState } from "react";
import ibonia from "../images/ibonia.png";
import lcom from "../images/lcom.jpeg";
import nextrocket from "../images/next-rocket.png";
import futurmap from "../images/futurmap.png";
import {useInView} from "react-intersection-observer";

const experiences = [
    {
        id: 1,
        img: ibonia,
        title: "Professional Discovery Course",
        company: "Ibonia, Madagascar",
        date: "July 2022",
        details: ["Observation", "Understanding the Agile Method"],
    },
    {
        id: 2,
        img: lcom,
        title: "Internship",
        company: "LCom Corporation, Madagascar",
        date: "October to November 2022",
        details: ["Showcase Site", "Introduction to OOP in PHP"],
    },
    {
        id: 3,
        img: lcom,
        title: "Internship",
        company: "LCom Corporation, Madagascar",
        date: "September to November 2023",
        details: ["UX / UI Design", "Getting to Know ReactJs"],
    },
    {
        id: 4,
        img: nextrocket,
        title: "Freelance JavaScript Developer",
        company: "NextRocket, Dubai",
        date: "January 2024",
        details: ["Automation via Web Scraping"],
    },
    {
        id: 5,
        img: futurmap,
        title: "Python Developer",
        company: "Futurmap, Madagascar",
        date: "Since March 2024",
        details: ["Developing and maintaining scripts and extensions with PyRevit", "Automating tasks in Autodesk Revit"],
    },
];

const Services = () => {
    const itemRefs = useRef([]); // Un tableau pour stocker les références de chaque élément
    const [inView, setInView] = useState({}); // Un état pour stocker la visibilité de chaque item
        const [ref, inViewMain] = useInView({triggerOnce: true, threshold: 0.2 });

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView((prev) => ({
                            ...prev,
                            [entry.target.dataset.id]: true, // Associe la visibilité à l'ID de l'élément
                        }));
                    }
                });
            },
            { threshold: 0.2 }
        );

        itemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            itemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section ref={ref} className="service-section section-padding" id="services">
            <div className="container">
                <div className="row">
                    <div className="section-title text-align">
                        <h5 className={`sub-title animate__animated ${inViewMain ? "animate__fadeInLeft" +
                            " animate__slow" : ""}`}>Experiences</h5>
                        <h3  className={`main-title animate__animated ${inViewMain ? "animate__fadeInRight" +
                            " animate__slow" : ""}`}>Acquired</h3>
                        <ul className={`line animate__animated ${inViewMain ? "animate__zoomInRight animate__slow" : ""}`}>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    {experiences.map((experience, index) => (
                        <div
                            ref={(el) => (itemRefs.current[index] = el)}
                            key={experience.id}
                            data-id={experience.id}
                            className={`service-item animate__animated ${
                                inView[experience.id] ? "animate__fadeInUp animate__slow" : ""
                            }`}
                        >
                            <div className="service-item-inner">
                                <div className="icon animate__animated animate__pulse animate__slow animate__infinite ">
                                    <img src={experience.img} alt={experience.title} />
                                </div>
                                <h3>{experience.title}</h3>
                                <h4>{experience.company} - {experience.date}</h4>
                                {experience.details.map((detail, i) => (
                                    <p key={i}>{detail}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
