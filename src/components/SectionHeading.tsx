import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: ReactNode;
  description?: string;
  standalone?: boolean;
}
export default function SectionHeading({
  title,
  description,
  standalone = false,
}: SectionHeadingProps) {
  const Heading = standalone ? "h1" : "h2";
  return (
    <div className="section-heading">
      <Heading>{title}</Heading>
      {description && <p>{description}</p>}
    </div>
  );
}
