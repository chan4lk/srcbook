import { Outlet, Link } from 'react-router-dom';
import { HomeIcon, LockClosedIcon } from '@radix-ui/react-icons';

export default function Layout() {
  return (
    <div className="flex">
      <nav className="shrink-0 min-h-screen w-14 py-3 bg-foreground text-background">
        <ul className="flex flex-col items-center space-y-2">
          <li className="flex">
            <Link
              to="/"
              title="Home"
              className="p-2 rounded-full hover:bg-background hover:text-foreground transition-colors"
            >
              <HomeIcon className="w-6 h-6" />
            </Link>
          </li>
          <li className="flex">
            <Link
              to="/secrets"
              title="Secrets"
              className="p-2 rounded-full hover:bg-background hover:text-foreground transition-colors"
            >
              <LockClosedIcon className="w-6 h-6" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex-1">
        <div className="max-w-4xl mx-auto my-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}