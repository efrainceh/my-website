import ProjectCarousel from "./components/Carousel";
import ProfileBox from "./components/ProfileBox";
import { getProjectMetadata, getProjectContent } from "./lib/ReadProjects";

export default function Home() {
  const slugs = getProjectMetadata();
  const projects = slugs.map((slug) => getProjectContent(slug));
  return (
    <div className="grid grid-cols-2 place-items-center min-h-screen">
      <div className="w-1/2">
        <ProfileBox />
      </div>
      <div className="w-1/2">
        <ProjectCarousel projects={projects} />
      </div>
    </div>
  );
}
