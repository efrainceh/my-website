import LanguageRating from "@/app/components/language/LanguageRating";

export default function Ratings() {
  const languages = ["Python", "Java", "C++", "Typescript"];
  const grades = [3, 2, 2, 2];

  const ratings: React.JSX.Element[] = [];
  for (var ix = 0; ix < languages.length; ix++) {
    ratings.push(
      <LanguageRating key={ix} language={languages[ix]} rating={grades[ix]} />
    );
  }
  return <>{ratings}</>;
}
