import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Start from "./content/start.mdx";
import About from "./content/about.mdx";
import Projects from "./content/project.mdx";
import Blogs from "./content/blog.mdx";
import Conclusion from "./content/conclusion.mdx"

export function Container({ children }: { children: React.ReactNode }) {
  return <MDXProvider>{children}</MDXProvider>;
}

function App() {

  const [isLargeScreen, setIsLargeScreen] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

 
    setIsLargeScreen(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        minHeight: "100vh",
        padding: "1rem",
        paddingTop: "2rem",
        boxSizing: "border-box",
      }}
    >

      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "1rem",
          textAlign: "center", // Keep Start section centered
        }}
      >
        <Start />
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "1rem",
          paddingLeft: isLargeScreen ? "1.3rem" : "1rem", // Conditional padding
          textAlign: "left",
        }}
      >
        <About />
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "1rem",
          textAlign: "left",
        }}
      >
        <Projects />
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "1rem",
          textAlign: "left",
        }}
      >
        <Blogs />
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
          padding: "1rem",
          textAlign: "left",
        }}
      >
        <Conclusion />
      </div>

    </div>
  );
}

export default App;