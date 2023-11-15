import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';

import { Home } from '@/pages/home';
import { Layout } from '@/pages/layout.tsx';
import { Torrents } from '@/pages/torrents.tsx';

import { ThemeProvider } from '@/shared/components/theme-provider.tsx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="torrents" element={<Torrents />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Route>
        </Routes>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
