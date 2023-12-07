import ProjectCarousel from "./components/Carousel";
import LanguageRating from "./components/LanguageRating";
import ProfileBox from "./components/ProfileBox";
import { getProjectMetadata, getProjectContent } from "./lib/ReadProjects";

export default function Home() {
  const slugs = getProjectMetadata();
  const projects = slugs.map((slug) => getProjectContent(slug));
  return (
    <div className="grid grid-cols-1 place-items-center overflow-auto min-h-screen min-w-screen md:grid-cols-2">
      <div className="md:row-span-2 md:w-1/2">
        <ProfileBox />
        <LanguageRating language="Python" rating={3} />
        <LanguageRating language="Java" rating={2} />
        <LanguageRating language="C++" rating={2} />
        <LanguageRating language="Typescript" rating={1} />
      </div>
      <div className="md:w-1/2">
        <ProjectCarousel projects={projects} />
      </div>
    </div>
  );
}
