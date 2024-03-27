import Icon from "@/app/components/profile/Icon";
import ProjectBox from "@/app/components/project/ProjectBox";
import { FaHome } from "react-icons/fa";
import { getProjectContent, getProjectMetadata } from "../lib/ReadProjects";
import * as styles from "./styles";

export default function Home() {
  const slugs = getProjectMetadata();
  const projectData = slugs.map((slug) => getProjectContent(slug));

  const projects: React.JSX.Element[] = projectData.map((project: any) => (
    <ProjectBox key={project.title} project={project} carousel={false} />
  ));

  return (
    <>
      <div className={styles.iconMargin}>
        <Icon
          internal={true}
          href={"/"}
          target={"_self"}
          iconName={<FaHome size="2em" />}
          text={"Home"}
        />
      </div>
      <div className={styles.grid}>{projects}</div>
    </>
  );
}
