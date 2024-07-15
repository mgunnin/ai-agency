import React from "react"
import ProjectCard from "./projectcard"

function Projects() {
  const project_list = [
    {
      name: "AI-Powered Customer Service Chatbot",
      date: "Jan 2024 - Mar 2024",
      link: "https://www.verticalai.com/projects/ai-chatbot",
      imgUrl: "./images/projects/ai-chatbot.webp",
      description: [
        <p key={1}>Developed an advanced NLP-based chatbot</p>,
        <p key={2}>Integrated with client&apos;s existing CRM system</p>,
        <p key={3}>Reduced customer service response time by 60%</p>,
        <p key={4}>Implemented multi-language support</p>,
      ],
      domains: [
        "Natural Language Processing",
        "Machine Learning",
        "Python",
        "TensorFlow",
        "React.js",
        "Node.js",
        "API Integration",
      ],
    },
    {
      name: "Predictive Maintenance System for Manufacturing",
      date: "Sep 2023 - Dec 2023",
      link: "https://www.verticalai.com/projects/predictive-maintenance",
      imgUrl: "./images/projects/predictive-maintenance.webp",
      description: [
        <p key={1}>Developed IoT-based sensor data collection system</p>,
        <p key={2}>Created machine learning models for failure prediction</p>,
        <p key={3}>Implemented real-time monitoring dashboard</p>,
        <p key={4}>Reduced unplanned downtime by 35%</p>,
      ],
      domains: [
        "IoT",
        "Machine Learning",
        "Time Series Analysis",
        "Python",
        "TensorFlow",
        "React.js",
        "Node.js",
        "MongoDB",
      ],
    },
    {
      name: "AI-Driven Personalized Learning Platform",
      date: "May 2023 - Aug 2023",
      link: "https://www.verticalai.com/projects/personalized-learning",
      imgUrl: "./images/projects/personalized-learning.webp",
      description: [
        <p key={1}>Developed adaptive learning algorithms</p>,
        <p key={2}>Created personalized content recommendation system</p>,
        <p key={3}>Implemented progress tracking and analytics dashboard</p>,
        <p key={4}>Increased student engagement by 40%</p>,
      ],
      domains: [
        "Machine Learning",
        "Natural Language Processing",
        "Python",
        "Django",
        "React.js",
        "PostgreSQL",
        "AWS",
      ],
    },
    {
      name: "Computer Vision for Retail Analytics",
      date: "Feb 2023 - Apr 2023",
      link: "https://www.verticalai.com/projects/retail-analytics",
      imgUrl: "./images/projects/retail-analytics.webp",
      description: [
        <p key={1}>Developed object detection and tracking system</p>,
        <p key={2}>
          Created heat map generation for store layout optimization
        </p>,
        <p key={3}>Implemented customer behavior analysis</p>,
        <p key={4}>Increased store conversion rate by 25%</p>,
      ],
      domains: [
        "Computer Vision",
        "Deep Learning",
        "Python",
        "OpenCV",
        "TensorFlow",
        "React.js",
        "Node.js",
        "MongoDB",
      ],
    },
    {
      name: "AI-Powered Fraud Detection System",
      date: "Nov 2022 - Jan 2023",
      link: "https://www.verticalai.com/projects/fraud-detection",
      imgUrl: "./images/projects/fraud-detection.webp",
      description: [
        <p key={1}>Developed anomaly detection algorithms</p>,
        <p key={2}>Created real-time transaction monitoring system</p>,
        <p key={3}>Implemented machine learning model for fraud prediction</p>,
        <p key={4}>Reduced fraudulent transactions by 80%</p>,
      ],
      domains: [
        "Machine Learning",
        "Anomaly Detection",
        "Python",
        "Scikit-learn",
        "Apache Kafka",
        "React.js",
        "Node.js",
        "PostgreSQL",
      ],
    },
  ]

  const tag_colors = {
    "react.js": "blue-300",
    typescript: "yellow-300",
    javascript: "yellow-300",
    firebase: "red-600",
    firestore: "red-500",
    "firebase auth": "red-400",
    "chrome-extension": "yellow-400",
    flutter: "blue-400",
    dart: "blue-500",
    "react-native": "purple-500",
    html5: "pink-600",
    sass: "pink-400",
    scss: "pink-300",
    tensorflow: "yellow-600",
    django: "green-600",
    unity3D: "green-400",
    hardhat: "green-300",
    python: "green-200",
    "codeforces-api": "gray-300",
    tailwindcss: "blue-300",
    "next.js": "purple-600",
    "web3.js": "purple-300",
    metaverse: "blue-400",
    "play to earn": "blue-500",
    webgl: "blue-600",
    "binance smart chain": "yellow-300",
  }

  return (
    <>
      <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      {project_list.map((project, index) => (
        <ProjectCard key={index} project={project} tag_colors={tag_colors} />
      ))}
    </>
  )
}

export default Projects
