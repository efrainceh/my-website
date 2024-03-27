import ProfileBox from "@/app/components/profile/ProfileBox";
import ProjectCarousel from "@/app/components/project/ProjectCarousel";
import Ratings from "@/app/components/language/Ratings";
import { getProjectMetadata, getProjectContent } from "./lib/ReadProjects";
import * as styles from "./styles";

export default function Home() {
  const slugs = getProjectMetadata();
  const projects = slugs.map((slug) => getProjectContent(slug));
  return (
    <div className={styles.flexGrid}>
      <div className={styles.profile}>
        <ProfileBox />
        <Ratings />
      </div>
      <div>
        <ProjectCarousel projects={projects} />
      </div>
    </div>
  );
}
