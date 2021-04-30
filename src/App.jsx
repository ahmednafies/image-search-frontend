import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import { VideoPreview } from "./VideoPreview";
import Button from "./Button";

import { ErrorBoundary } from "react-error-boundary";
import { useSuggestions } from "./queries";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="bg-red-400 p-3">
      <p>Something went wrong:</p>
      <pre>
        """
        {error.name}: {error.message}
        """
      </pre>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
}

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <QueryClientProvider client={queryClient}>
        <AppContent />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

const AppContent = () => {
  const { data } = useSuggestions();

  console.log(data);
  return (
    <div className="flex flex-col h-full">
      <h1 className="text-center text-3xl font-extrabold tracking-wider my-5">
        Fynd it
      </h1>
      <VideoPreview className="self-center border-solid border-4" />
    </div>
  );
};

export default App;
