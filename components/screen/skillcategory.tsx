import React from "react";

interface Skill {
  src: string;
  alt: string;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="w-full md:w-10/12 flex flex-col justify-center items-start font-bold text-center">
      <h2 className="text-xl mb-4">{title}</h2>
      <div className="px-2 w-1/2">
        <div className="flex flex-wrap justify-center items-start w-full mt-2">
          {skills.map((skill, index) => (
            <img key={index} className="m-1" src={skill.src} alt={skill.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCategory;