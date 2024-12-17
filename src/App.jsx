// import Element from "./components/fetch/Element"
// import Element from "./components/axios/Element"
import { Suspense } from "react";
import Element from "./components/swr/Element";

function App() {
  return (
    <>
      <Suspense fallback={<h1>loading...</h1>}>
        <Element />
      </Suspense>
    </>
  );
}

export default App;
