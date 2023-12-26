import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { YoutubeApiProvider } from './context/YoutubeApiContext';
import { DarkModeProvider } from './context/DarkModeContext';

const queryClient = new QueryClient();

function App() {
  return (
    <DarkModeProvider>
      <Header />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </DarkModeProvider>
  );
}

export default App;
