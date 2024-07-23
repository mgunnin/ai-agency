import SkillCategory from "./skillcategory";

interface Skill {
  src: string;
  alt: string;
}

function Skills(): JSX.Element {
  const technicalSkills: Skill[] = [
    {
      src: "https://img.shields.io/badge/-Machine%20Learning-01D277?style=flat&logo=sklearn&logoColor=ffffff",
      alt: "machine learning",
    },
    {
      src: "https://img.shields.io/badge/-Deep%20Learning-FF6F00?style=flat&logo=tensorflow&logoColor=ffffff",
      alt: "deep learning",
    },
    {
      src: "https://img.shields.io/badge/-Natural%20Language%20Processing-4285F4?style=flat&logo=googlecloud&logoColor=ffffff",
      alt: "nlp",
    },
    {
      src: "https://img.shields.io/badge/-Computer%20Vision-5C3EE8?style=flat&logo=opencv&logoColor=ffffff",
      alt: "computer vision",
    },
  ]

  const businessSkills: Skill[] = [
    {
      src: "https://img.shields.io/badge/-Business%20Strategy-0A66C2?style=flat&logo=linkedin&logoColor=ffffff",
      alt: "business strategy",
    },
    {
      src: "https://img.shields.io/badge/-Product%20Management-000000?style=flat&logo=producthunt&logoColor=ffffff",
      alt: "product management",
    },
    {
      src: "https://img.shields.io/badge/-Digital%20Marketing-4285F4?style=flat&logo=google-ads&logoColor=ffffff",
      alt: "digital marketing",
    },
    {
      src: "https://img.shields.io/badge/-SEO-47A248?style=flat&logo=google&logoColor=ffffff",
      alt: "seo",
    },
  ]

  return (
    <>
      <div className="font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Our Expertise
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className="tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className="list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          Our team consists of seasoned entrepreneurs and AI experts.
        </li>
        <li className="list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            Our core competencies are in{" "}
            <strong className="text-ubt-gedit-orange">
              AI Development, Machine Learning, and Data Science
            </strong>{" "}
            across various industries
          </div>
        </li>
        <li className="list-finger text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Our key areas of expertise:</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className="text-sm text-center md:text-base w-1/2 font-bold">
          <SkillCategory title="AI & Technical Skills" skills={technicalSkills} />
        </div>
        <SkillCategory title="Business & Industry Expertise" skills={businessSkills} />
      </div>
    </>
  )
}

export default Skills