import ReactDOM from 'react-dom/client';
import App from '../src/App';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import react from 'react';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <react.StrictMode>
    <QueryClientProvider client={queryClient} >
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
   </QueryClientProvider>
  </react.StrictMode>
);