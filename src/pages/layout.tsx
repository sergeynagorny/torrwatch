import { FilmIcon, FolderDownIcon, HomeIcon, SettingsIcon } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils.ts';

const links = [
  {
    path: '/',
    Icon: HomeIcon,
  },
  {
    path: '/torrents',
    Icon: FolderDownIcon,
  },
  {
    path: '/watchlist',
    Icon: FilmIcon,
  },
  {
    path: '/settings',
    Icon: SettingsIcon,
  },
];

const LayoutNavigation = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 flex border-t bg-background px-3 py-2">
      {links.map(({ path, Icon }) => (
        <Button key={path} className="flex-grow hover:bg-transparent" variant="ghost" size="lg" asChild>
          <NavLink to={path}>
            {({ isActive }) => <Icon className={cn('h-5 w-5 text-muted', isActive && 'text-foreground')} />}
          </NavLink>
        </Button>
      ))}
    </div>
  );
};

export const Layout = () => {
  return (
    <div className="grow pb-[60px]">
      <Outlet />
      <LayoutNavigation />
    </div>
  );
};
