import React from "react";

interface Project {
  name: React.ReactNode;
  date: string;
  link: string;
  description: React.ReactNode[];
}

const History: React.FC = () => {
  const project_list: Project[] = [
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
        <p key="p1">
          Led the development of a cutting-edge predictive maintenance system
          for a Fortune 500 manufacturing client, leveraging advanced machine
          learning algorithms and IoT sensor data to reduce unplanned downtime
          by 35% and save an estimated $10 million annually.
        </p>,
        <p key="p2">
          Designed and implemented a natural language processing pipeline for a
          multinational e-commerce platform, enabling multilingual customer
          support automation that improved response times by 60% and increased
          customer satisfaction scores by 25%.
        </p>,
        <p key="p3">
          Spearheaded the creation of a computer vision-based quality control
          system for a pharmaceutical company, resulting in a 99.9% defect
          detection rate and a 40% reduction in manual inspection costs.
        </p>,
        <p key="p4">
          Collaborated with cross-functional teams to develop an AI-driven
          personalized recommendation engine for a streaming service, increasing
          user engagement by 45% and subscription retention rates by 20%.
        </p>,
        <p key="p5">
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
        <p key="p1">
          Developed and deployed a real-time fraud detection system for a
          fintech startup, utilizing ensemble learning techniques and achieving
          a 92% fraud detection rate with a false positive rate under 0.1%.
        </p>,
        <p key="p2">
          Created an AI-powered resume screening and candidate ranking system
          for a human resources software company, reducing time-to-hire by 40%
          and improving the quality of candidate shortlists.
        </p>,
        <p key="p3">
          Implemented a deep learning-based image recognition system for a
          retail client, enabling automated inventory management and reducing
          stockouts by 30%.
        </p>,
        <p key="p4">
          Collaborated with data scientists and software engineers to build and
          maintain scalable machine learning infrastructure using cloud
          technologies (AWS, GCP) and containerization (Docker, Kubernetes).
        </p>,
        <p key="p5">
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
        <p key="p1">
          Developed predictive models for customer churn and lifetime value,
          enabling targeted retention strategies that reduced churn by 15% for a
          major telecommunications client.
        </p>,
        <p key="p2">
          Designed and implemented an A/B testing framework for a SaaS platform,
          allowing for rapid experimentation and data-driven decision making,
          resulting in a 22% increase in user conversion rates.
        </p>,
        <p key="p3">
          Created interactive data visualizations and dashboards using Tableau
          and D3.js, improving stakeholder understanding of complex datasets and
          facilitating more informed business decisions.
        </p>,
        <p key="p4">
          Conducted in-depth statistical analyses and hypothesis testing to
          validate business assumptions and uncover actionable insights,
          directly contributing to a 10% increase in revenue for key accounts.
        </p>,
        <p key="p5">
          Collaborated with the engineering team to improve data pipeline
          efficiency, reducing data processing time by 40% and enabling near
          real-time analytics for critical business metrics.
        </p>,
      ],
    },
  ];

  return (
    <>
      <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        History
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
                <div className="text-base font-semibold md:text-lg mr-2">
                  {project.name}
                </div>
              </div>
              <div className="text-gray-300 font-light text-sm">
                {project.date}
              </div>
            </div>
            <ul className="tracking-normal leading-tight text-sm font-light ml-6 mt-2">
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
  );
};

export default History;