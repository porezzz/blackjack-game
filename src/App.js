import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen";
import Error from "./components/Error";
import Loading from "./components/Loading";
const LazyLoad = React.lazy(() => import("./components/Game"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomeScreen />} />
        <Route
          path="game"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyLoad />
            </React.Suspense>
          }
        />
        {/* <Route path="loading" element={<Loading />}/> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
