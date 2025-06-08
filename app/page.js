"use client";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Achivements from "./components/Achivements"; // Make sure the filename matches this import
import Footer from "./components/Footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Load theme preference on initial mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Save theme preference and update class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header />
      <About />
      <Project />
      <Achivements />
      <Contact />
      <Footer />
    </>
  );
}
