import React from "react";
import Views from "views";
import { Route, Routes, useLocation } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "components/shared/error-boundary";

function App() {
  let location = useLocation();

  /* 
  ! Router'ı buraya çekeceksen error boundary'i bi alta alman gerekir.
  ! useLocation Router'ın içinde olmalı.
  ! Routelarını ona göre düzenle.
  */
  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback} key={location.pathname}>
        <Routes>
          <Route path="*" element={<Views />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
}

export default App;
