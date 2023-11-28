import Link from "next/link";
import React from "react";
interface CLinkProps {
  href: string;
  children?: React.ReactNode;
  text?: string;
}

export const CLink = (props: CLinkProps) => {
  const { children, href, text } = props;
  return (
    <>
      <Link href={href} target="_blank" rel="noopener">
        {children || text}
      </Link>
    </>
  );
};
