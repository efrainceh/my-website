import ProjectCarousel from "./components/Carousel";
import ProfileBox from "./components/ProfileBox";
import { getProjectMetadata, getProjectContent } from "./lib/ReadProjects";

export default function Home() {
  const slugs = getProjectMetadata();
  const projects = slugs.map((slug) => getProjectContent(slug));
  return (
    <div className="grid grid-cols-1 place-items-center overflow-auto min-h-screen min-w-screen md:grid-cols-2">
      <div>
        <ProfileBox />
      </div>
      <div>
        <ProjectCarousel projects={projects} />
      </div>
    </div>
  );
}
