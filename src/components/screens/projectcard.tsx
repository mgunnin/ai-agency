
interface Project {
  name: string;
  link: string;
  imgUrl: string;
  date: string;
  description: (string | JSX.Element)[];
  domains: string[];
}

interface ProjectCardProps {
  project: Project;
  tag_colors: Record<string, string>;
}

function ProjectCard({ project, tag_colors }: ProjectCardProps): JSX.Element {
  return (
    <div className="flex w-full flex-col px-4">
      <div className="w-full flex flex-col lg:flex-row gap-2 py-3 px-3 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5">
        <a
          className="w-full cursor-pointer"
          target="_blank"
          href={project.link}
          rel="noreferrer"
        >
          <img src={project.imgUrl} className="rounded" alt={project.name} />
        </a>
        <div className="w-full">
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
                className="list-disc mt-2 text-gray-100 md:text-base"
              >
                {desc}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-start justify-start text-xs py-4">
            {project.domains.map((domain, index) => (
              <span
                key={index}
                className={`px-1.5 py-0.5 w-max border border-${tag_colors[domain]} text-${tag_colors[domain]} m-1 rounded-full`}
              >
                {domain}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard