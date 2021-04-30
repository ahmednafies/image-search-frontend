import React from "react";
import "./App.css";
import { VideoPreview } from "./VideoPreview";
import Button from "./Button";

import { ErrorBoundary } from "react-error-boundary";

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

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        // reset the state of your app so the error doesn't happen again
      }}
    >
      <div className="flex flex-col h-full">
        <h1 className="text-center text-3xl font-extrabold tracking-wider my-5">
          Fynd it
        </h1>
        <VideoPreview className="self-center border-solid border-4" />
      </div>
    </ErrorBoundary>
  );
}

export default App;
