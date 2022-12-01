import React from "react";
import MetaTags from "../components/common/MetaTags";

function Home() {
  return (
    <>
      <MetaTags page="home" />

      <div className=" flex items-center justify-center h-screen">
        <h1 className="card bg-primary text-16px px-5">Hello World!</h1>
      </div>
    </>
  );
}

export default Home;
