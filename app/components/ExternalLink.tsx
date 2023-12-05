interface Props {
  href: string;
  target: string;
  iconName: React.ReactNode;
}

export default function ExternalLink({ href, target, iconName }: Props) {
  return (
    <a href={href} target={target}>
      {iconName}
    </a>
  );
}
