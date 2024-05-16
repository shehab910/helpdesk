import { Icons } from '@/components/icons';
import Link from 'next/link';

function NotFound() {
  return (
    <div className="max-w-4xl m-auto flex gap-4 flex-col items-center lg:flex-row justify-between">
      <Icons.sad
        className="w-3/12 text-primary/80 dark:text-foreground/80"
        size={300}
      />
      <div className="w-9/12 flex items-center justify-center lg:justify-end">
        <div className="w-max flex flex-col gap-4">
          <h1 className="font-bold text-3xl text-primary/80 dark:text-foreground/80">
            {"We can't find the page you looking for."}
          </h1>
          <p>Please double check the URL and try again.</p>
          <p>
            Go back to the{' '}
            <Link href="/">
              <span className="text-primary/80 underline underline-offset-2 font-semibold">
                Homepage
              </span>
            </Link>
          </p>
          <small className="text-muted-foreground">
            Error: 404 - page not found
          </small>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
