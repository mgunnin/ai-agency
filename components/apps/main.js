import { Component } from "react"
import ReactGA from "react-ga"

export class AboutUs extends Component {
  constructor() {
    super()
    this.screens = {}
    this.state = {
      screen: () => {},
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    }
  }

  componentDidMount() {
    this.screens = {
      about: <AboutVerticalLabs />,
      history: <History />,
      projects: <Projects />,
      skills: <Skills />,
      resume: <Resume />,
    }

    let lastVisitedScreen = localStorage.getItem("about-section")
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about"
    }

    // Debugging log
    console.log("Last visited screen:", lastVisitedScreen)

    // Focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen))
  }

  changeScreen = (screenId) => {
    const screen =
      typeof screenId === "string"
        ? screenId
        : screenId && screenId.target
        ? screenId.target.id
        : "about"

    // Debugging log
    console.log("Changing to screen:", screen)

    // Store this state
    localStorage.setItem("about-section", screen)

    // Google analytics
    ReactGA.pageview(`/${screen}`)

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    })
  }

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar })
  }

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          //onFocus={this.changeScreen}
          onClick={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="about us"
            src="./icons/folder.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Us</span>
        </div>
        <div
          id="faq"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "faq"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img className=" w-3 md:w-4" alt="tools" src="./icons/folder.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">FAQ</span>
        </div>
        <div
          id="history"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "history"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="history"
            src="./themes/Yaru/status/work-history.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="projects"
            src="./icons/folder.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img className=" w-3 md:w-4" alt="skills" src="./icons/folder.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5 cursor-pointer"
          }
        >
          <img className=" w-3 md:w-4" alt="resume" src="./icons/folder.svg" />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
      </>
    )
  }

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    )
  }
}

export default AboutUs

export const displayAboutVerticalLabs = () => {
  return <AboutUs />
}

function AboutVerticalLabs() {
  return (
    <>
      <div className="w-20 md:w-32 mt-4 bg-white rounded-full">
        <img
          className="w-full rounded-full"
          src="./images/logos/vertical_labs.png"
          alt="Vertical Labs Logo"
        />
      </div>
      <div className="mt-4 text-lg md:text-2xl text-center px-1">
        <div>
          Welcome to <span className="font-bold">Vertical AI</span>
        </div>
        <div className="font-normal ml-1">
          Your partner in{" "}
          <span className="text-pink-600 font-bold">AI-driven innovation</span>
        </div>
      </div>
      <div className="mt-4 relative md:my-4 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className="mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className="list-pc my-2 md:text-base">
          Specializing in cutting-edge AI solutions for businesses of all sizes
        </li>
        <li className="list-pc my-2 md:text-base">
          Expertise in machine learning, natural language processing, and
          computer vision
        </li>
        <li className="list-pc my-2 md:text-base">
          Custom AI development tailored to your specific needs and challenges
        </li>
        <li className="list-pc my-2 md:text-base">
          AI consulting to help you leverage the power of artificial
          intelligence
        </li>
        <li className="list-pc my-2 md:text-base">
          Committed to ethical AI practices and responsible innovation
        </li>
      </ul>
    </>
  )
}

function History() {
  const project_list = [
    {
      name: (
        <p>
          AI Solutions Architect,{" "}
          <a className="border-b-2" href="#" target="_blank" rel="noreferrer">
            Global Tech Innovations
          </a>
        </p>
      ),
      date: "Jan 2023 - Present, Remote",
      link: "#",
      description: [
        <p>
          Led the development of a cutting-edge predictive maintenance system
          for a Fortune 500 manufacturing client, leveraging advanced machine
          learning algorithms and IoT sensor data to reduce unplanned downtime
          by 35% and save an estimated $10 million annually.
        </p>,
        <p>
          Designed and implemented a natural language processing pipeline for a
          multinational e-commerce platform, enabling multilingual customer
          support automation that improved response times by 60% and increased
          customer satisfaction scores by 25%.
        </p>,
        <p>
          Spearheaded the creation of a computer vision-based quality control
          system for a pharmaceutical company, resulting in a 99.9% defect
          detection rate and a 40% reduction in manual inspection costs.
        </p>,
        <p>
          Collaborated with cross-functional teams to develop an AI-driven
          personalized recommendation engine for a streaming service, increasing
          user engagement by 45% and subscription retention rates by 20%.
        </p>,
        <p>
          Implemented robust MLOps practices, including automated model
          training, versioning, and deployment pipelines, reducing
          time-to-production for AI models by 50% and ensuring consistent
          performance across multiple client projects.
        </p>,
      ],
    },
    {
      name: (
        <p>
          Machine Learning Engineer,{" "}
          <a
            className="border-b-2"
            href="https://aiinnovate.co"
            target="_blank"
            rel="noreferrer"
          >
            AI Innovate
          </a>
        </p>
      ),
      date: "Jun 2020 - Dec 2022, Remote",
      link: "#",
      description: [
        <p>
          Developed and deployed a real-time fraud detection system for a
          fintech startup, utilizing ensemble learning techniques and achieving
          a 92% fraud detection rate with a false positive rate under 0.1%.
        </p>,
        <p>
          Created an AI-powered resume screening and candidate ranking system
          for a human resources software company, reducing time-to-hire by 40%
          and improving the quality of candidate shortlists.
        </p>,
        <p>
          Implemented a deep learning-based image recognition system for a
          retail client, enabling automated inventory management and reducing
          stockouts by 30%.
        </p>,
        <p>
          Collaborated with data scientists and software engineers to build and
          maintain scalable machine learning infrastructure using cloud
          technologies (AWS, GCP) and containerization (Docker, Kubernetes).
        </p>,
        <p>
          Conducted regular knowledge-sharing sessions and mentored junior team
          members, contributing to a 25% increase in team productivity and
          fostering a culture of continuous learning and innovation.
        </p>,
      ],
    },
    {
      name: (
        <p>
          Data Scientist,{" "}
          <a
            className="border-b-2"
            href="https://techdatainsights.com/"
            target="_blank"
            rel="noreferrer"
          >
            Tech Data Insights
          </a>
        </p>
      ),
      date: "Sep 2018 - May 2020, San Francisco",
      link: "#",
      description: [
        <p>
          Developed predictive models for customer churn and lifetime value,
          enabling targeted retention strategies that reduced churn by 15% for a
          major telecommunications client.
        </p>,
        <p>
          Designed and implemented an A/B testing framework for a SaaS platform,
          allowing for rapid experimentation and data-driven decision making,
          resulting in a 22% increase in user conversion rates.
        </p>,
        <p>
          Created interactive data visualizations and dashboards using Tableau
          and D3.js, improving stakeholder understanding of complex datasets and
          facilitating more informed business decisions.
        </p>,
        <p>
          Conducted in-depth statistical analyses and hypothesis testing to
          validate business assumptions and uncover actionable insights,
          directly contributing to a 10% increase in revenue for key accounts.
        </p>,
        <p>
          Collaborated with the engineering team to improve data pipeline
          efficiency, reducing data processing time by 40% and enabling near
          real-time analytics for critical business metrics.
        </p>,
      ],
    },
  ]

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Work Experience
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => (
        <div className="flex w-full flex-col px-4" key={index}>
          <div className="w-full py-4 px-4 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5">
            <div className="flex flex-wrap justify-between items-center">
              <div className="flex justify-center items-center">
                <div className=" text-base font-semibold md:text-lg mr-2">
                  {project.name}
                </div>
              </div>
              <div className="text-gray-300 font-light text-sm">
                {project.date}
              </div>
            </div>
            <ul className=" tracking-normal leading-tight text-sm font-light ml-6 mt-2">
              {project.description.map((desc, index) => (
                <li
                  key={index}
                  className="list-disc mt-1 text-gray-100 md:text-base"
                >
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  )
}

function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Our Expertise
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          Our team consists of seasoned entrepreneurs and AI experts.
        </li>
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            Our core competencies are in{" "}
            <strong className="text-ubt-gedit-orange">
              AI Development, Machine Learning, and Data Science
            </strong>{" "}
            across various industries
          </div>
        </li>
        <li className=" list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are our key areas of expertise:</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          AI & Technical Skills
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Business & Industry Expertise
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Machine%20Learning-01D277?style=flat&logo=sklearn&logoColor=ffffff"
              alt="vertical ai machine learning"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Deep%20Learning-FF6F00?style=flat&logo=tensorflow&logoColor=ffffff"
              alt="vertical ai deep learning"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Natural%20Language%20Processing-4285F4?style=flat&logo=googlecloud&logoColor=ffffff"
              alt="vertical ai nlp"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Computer%20Vision-5C3EE8?style=flat&logo=opencv&logoColor=ffffff"
              alt="vertical ai computer vision"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Python-3776AB?style=flat&logo=python&logoColor=ffffff"
              alt="vertical ai python"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-R-276DC3?style=flat&logo=r&logoColor=ffffff"
              alt="vertical ai r"
            />
            <img
              src="https://img.shields.io/badge/-TensorFlow-FF6F00?style=flat&logo=tensorflow&logoColor=ffffff"
              alt="vertical ai tensorflow"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=ffffff"
              alt="vertical ai pytorch"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Scikit%20Learn-F7931E?style=flat&logo=scikit-learn&logoColor=ffffff"
              alt="vertical ai scikit learn"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Big%20Data-E03E2D?style=flat&logo=apache&logoColor=ffffff"
              alt="vertical ai big data"
              className="m-1"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Business%20Strategy-0A66C2?style=flat&logo=linkedin&logoColor=ffffff"
              alt="vertical ai business strategy"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Product%20Management-000000?style=flat&logo=producthunt&logoColor=ffffff"
              alt="vertical ai product management"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Digital%20Marketing-4285F4?style=flat&logo=google-ads&logoColor=ffffff"
              alt="vertical ai digital marketing"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-SEO-47A248?style=flat&logo=google&logoColor=ffffff"
              alt="vertical ai seo"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Content%20Strategy-7719AA?style=flat&logo=microsoft-onenote&logoColor=ffffff"
              alt="vertical ai content strategy"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-UI%2FUX%20Design-FF61F6?style=flat&logo=figma&logoColor=ffffff"
              alt="vertical ai ui/ux design"
            />
            <img
              className=" m-1"
              src="https://img.shields.io/badge/-Data%20Analytics-4285F4?style=flat&logo=google-analytics&logoColor=ffffff"
              alt="vertical ai data analytics"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Agile%20Methodologies-0052CC?style=flat&logo=jira&logoColor=ffffff"
              alt="vertical ai agile"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Blockchain-121D33?style=flat&logo=blockchain-dot-com&logoColor=ffffff"
              alt="vertical ai blockchain"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-IoT-003A70?style=flat&logo=amazon-aws&logoColor=ffffff"
              alt="vertical ai iot"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Cloud%20Computing-4285F4?style=flat&logo=google-cloud&logoColor=ffffff"
              alt="vertical ai cloud computing"
            />
            <img
              src="https://img.shields.io/badge/-FinTech-00B4E6?style=flat&logo=revolut&logoColor=ffffff"
              alt="vertical ai fintech"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-Healthcare-19A974?style=flat&logo=webmd&logoColor=ffffff"
              alt="vertical ai healthcare"
              className="m-1"
            />
            <img
              src="https://img.shields.io/badge/-E--commerce-FF9900?style=flat&logo=shopify&logoColor=ffffff"
              alt="vertical ai e-commerce"
              className="m-1"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/-Cybersecurity-FFB71B?style=flat&logo=avast&logoColor=ffffff"
              alt="vertical ai cybersecurity"
            />
          </div>
        </div>
      </div>
    </>
  )
}

function Projects() {
  const project_list = [
    {
      name: "AI-Powered Customer Service Chatbot",
      date: "Jan 2024 - Mar 2024",
      link: "https://www.verticalai.com/projects/ai-chatbot",
      imgUrl: "./images/projects/ai-chatbot.webp",
      description: [
        <p>Developed an advanced NLP-based chatbot</p>,
        <p>Integrated with client's existing CRM system</p>,
        <p>Reduced customer service response time by 60%</p>,
        <p>Implemented multi-language support</p>,
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
        <p>Developed IoT-based sensor data collection system</p>,
        <p>Created machine learning models for failure prediction</p>,
        <p>Implemented real-time monitoring dashboard</p>,
        <p>Reduced unplanned downtime by 35%</p>,
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
        <p>Developed adaptive learning algorithms</p>,
        <p>Created personalized content recommendation system</p>,
        <p>Implemented progress tracking and analytics dashboard</p>,
        <p>Increased student engagement by 40%</p>,
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
        <p>Developed object detection and tracking system</p>,
        <p>Created heat map generation for store layout optimization</p>,
        <p>Implemented customer behavior analysis</p>,
        <p>Increased store conversion rate by 25%</p>,
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
        <p>Developed anomaly detection algorithms</p>,
        <p>Created real-time transaction monitoring system</p>,
        <p>Implemented machine learning model for fraud prediction</p>,
        <p>Reduced fraudulent transactions by 80%</p>,
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
    firebase: "red-300",
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
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>

      {project_list.map((project, index) => (
        <div className="flex w-full flex-col px-4" key={index}>
          <div className="w-full flex flex-col lg:flex-row gap-2 py-3 px-3 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 ">
            <a
              className="w-full cursor-pointer"
              target="_blank"
              href={project.link}
              rel="noreferrer"
            >
              <img
                src={project.imgUrl}
                className="rounded"
                alt={project.name}
              />
            </a>
            <div className="w-full">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-center items-center">
                  <div className=" text-base font-semibold md:text-lg mr-2">
                    {project.name}
                  </div>
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.date}
                </div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-6 mt-2">
                {project.description.map((desc, index) => (
                  <li
                    key={index}
                    className="list-disc mt-2 text-gray-100 md:text-base"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-4">
                {project.domains
                  ? project.domains.map((domain, index) => (
                      <span
                        key={index}
                        className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}
                      >
                        {domain}
                      </span>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src="./files/matt_gunnin_resume.pdf"
      title="matt gunnin resume"
      frameBorder="0"
    ></iframe>
  )
}
