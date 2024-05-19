import html from "../assets/langues/HTML.png";
import reactLangue from "../assets/langues/react.png";
import css from "../assets/langues/css.png";
import github from "../assets/langues/github.png";
import tailwind from "../assets/langues/tailwind.png";
import js from "../assets/langues/js.png";
import bootstrap from "../assets/langues/bootstrap.png";
import c from "../assets/langues/c.png";
import py from "../assets/langues/py.png";
import php from "../assets/langues/php.png";
import java from "../assets/langues/java.png";
import Node from "../assets/langues/Node.png"
import ecomerce from "../assets/ecomerce.jpg"
import emotions from "../assets/emotions.png"
import weather from "../assets/weather.webp"
import library from "../assets/library.png"
// Array of work objects
export const works = [
  {
    title: "e-commerce backend",
    imgUrl:ecomerce,
    tech: ["Node Js", "Mysql", "express js"],
    duration: "400",
  },
  {
    title: "Weather App",
    imgUrl:weather,
    tech: ["React js", "html", "css"],
    duration: "400",
  },
  {
    title: "Library Management system",
    imgUrl:library,
    tech: ["React js", "Node js", "Mern Stack"],
    duration: "400",
  },

  {
    title: "Emotions detection in a text",
    imgUrl:emotions,
    tech: ["NLP", "tf-idf"],
    duration: "400",
  },
 
  
];

// Array of experience objects
export const experiences = [
  {
    date: "July 2023 - August 2023",
    company: "SOFIT CONSULTANCY TNG SERVICES",
    position: "Backend Developer Intern",
    description:
      "During my internship, I undertook various projects focused on Node.js backend development for diverse websites. My responsibilities included designing and implementing backend functionalities using Node.js, with MongoDB employed as the primary database solution. I gained extensive experience in crafting robust backend systems, ensuring efficient data management and seamless integration with frontend components. This internship provided invaluable hands-on experience in real-world Node.js application development within a professional environment.",
  },
  {
    date: "09/08/2021  08/11/2021",
    company: "NATIONAL FREELANCING TRAINING PROGRAM Punjab",
    position: " Web developer Internship",
    description:
      "I have expertise in creating visually captivating and user-friendly websites for restaurants. Additionally, I possess skills in managing automated tests to ensure optimal functionality and performance.",
  },
];


// Array of langue objects
export const langues = [
  {
    id: 1,
    src: html,
    title: "HTML",
    style: "shadow-orange-500",
  },
  {
    id: 2,
    src: css,
    title: "CSS",
    style: "shadow-blue-500",
  },
  {
    id: 3,
    src: js,
    title: "JavaScript",
    style: "shadow-yellow-500",
  },
  {
    id: 4,
    src: reactLangue,
    title: "React",
    style: "shadow-sky-500",
  },
  {
    id: 5,
    src: github,
    title: "GitHub",
    style: "shadow-gray-400",
  },
  {
    id: 6,
    src: tailwind,
    title: "Tailwind",
    style: "shadow-teal-600",
  },
  {
    id: 7,
    src: Node,
    title: "Node js",
    style: "shadow-rose-500",
  },
  {
    id: 8,
    src: bootstrap,
    title: "Bootstrap",
    style: "shadow-violet-500",
  },
  {
    id: 9,
    src: py,
    title: "Python",
    style: "shadow-yellow-400",
  },

  {
    id: 10,
    src: php,
    title: "Php",
    style: "shadow-violet-400",
  },
  {
    id: 11,
    src: c,
    title: "C",
    style: "shadow-blue-400",
  },
  {
    id: 12,
    src: java,
    title: "Java",
    style: "shadow-orange-500",
  },
];
