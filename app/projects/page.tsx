import Icon from "../components/Icon";
import { FaHome } from "react-icons/fa";
import ProjectBox from "../components/ProjectBox";
import { getProjectContent, getProjectMetadata } from "../lib/ReadProjects";

export default function Home() {
  const slugs = getProjectMetadata();
  const projects = slugs.map((slug) => getProjectContent(slug));
  return (
    <div>
      <div className="p-4">
        <Icon
          internal={true}
          href={"/"}
          target={"_self"}
          iconName={<FaHome size="2em" />}
          text={"Home"}
        />
      </div>
      {/* <div className="grid grid-rows-2 grid-cols-2 place-items-center">
        {projects.map((project: any) => (
          <ProjectBox key={project.title} project={project} />
        ))}
      </div> */}
    </div>
  );
}
