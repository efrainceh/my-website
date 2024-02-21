import ProjectCarousel from "./components/ProjectCarousel";
import LanguageRating from "./components/LanguageRating";
import ProfileBox from "./components/ProfileBox";
import { getProjectMetadata, getProjectContent } from "./lib/ReadProjects";

export default function Home() {
  const slugs = getProjectMetadata();
  const projects = slugs.map((slug) => getProjectContent(slug));
  return (
    <div className="grid grid-cols-1 place-items-center overflow-auto min-h-screen md:grid-cols-2">
      <div>
        <ProfileBox />
        <LanguageRating language="Python" rating={3} />
        <LanguageRating language="Java" rating={2} />
        <LanguageRating language="C++" rating={2} />
        <LanguageRating language="Typescript" rating={2} />
      </div>
      <div className="ml-7">
        <ProjectCarousel projects={projects} />
      </div>
    </div>
  );
}
