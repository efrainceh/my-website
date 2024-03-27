import InternalLink from "@/app/components/links/InternalLink";
import ExternalLink from "@/app/components/links/ExternalLink";
import * as styles from "./styles";

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
  const link = internal ? (
    <InternalLink href={href} target={target} iconName={iconName} />
  ) : (
    <ExternalLink href={href} target={target} iconName={iconName} />
  );
  return (
    <div className={styles.icon}>
      {link}
      <h1 className={styles.iconText}>{text}</h1>
    </div>
  );
}
