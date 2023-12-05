import Link from "next/link";

interface Props {
  href: string;
  target: string;
  iconName: React.ReactNode;
}

export default function InternalLink({ href, target, iconName }: Props) {
  return (
    <Link href={href} target={target}>
      {iconName}
    </Link>
  );
}
