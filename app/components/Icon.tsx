import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";

interface Props {
  internal: boolean;
  href: string;
  target: string;
  iconName: React.ReactNode;
  text: string;
}

export default function Icon({
  internal,
  href,
  target,
  iconName,
  text,
}: Props) {
  return (
    <div className="group">
      {internal ? (
        <InternalLink href={href} target={target} iconName={iconName} />
      ) : (
        <ExternalLink href={href} target={target} iconName={iconName} />
      )}
      <p className="text-sm font-bold opacity-0 group-hover:opacity-100">
        {text}
      </p>
    </div>
  );
}
