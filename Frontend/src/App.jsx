import React from "react";
import gsap from "gsap";
import { Navbar, Welcome, Dock, Home } from "@components";
import {
  Resume,
  Safari,
  Terminal,
  Finder,
  Text,
  Image,
  Contact,
} from "@windows";
import { Draggable } from "gsap/Draggable";
gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home/>
    </main>
  );
};

export default App;
