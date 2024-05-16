import type { LinkProps } from 'next/link';
import Link from 'next/link';

interface OptLinkProps extends LinkProps {
  isLink: boolean;
  children: React.ReactNode;
}

function OptLink(props: OptLinkProps) {
  if (!props.isLink) {
    return <>{props.children}</>;
  }
  return (
    <Link className="flex-wrap" {...{ ...props, isLink: undefined }}>
      {props.children}
    </Link>
  );
}

export default OptLink;
