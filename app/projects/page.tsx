import Icon from "../components/Icon";
import { FaHome } from "react-icons/fa";
import ProjectBox from "../components/ProjectBox";
import { getProjectContent, getProjectMetadata } from "../lib/ReadProjects";

export default function Home() {
  const slugs = getProjectMetadata();
  const projects = slugs.map((slug) => getProjectContent(slug));
  return (
    <div>
      <div className="ml-4 mt-4">
        <Icon
          internal={true}
          href={"/"}
          target={"_self"}
          iconName={<FaHome size="2em" />}
          text={"Home"}
        />
      </div>
      {
        <div className="grid grid-cols-1 place-items-center min-h-screen overflow-auto md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project: any) => (
            <ProjectBox key={project.title} project={project} />
          ))}
        </div>
      }
    </div>
  );
}
