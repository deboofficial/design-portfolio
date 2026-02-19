"use client";

import { useState, useCallback } from "react";
import { Preloader } from "./preloader";
import { PageTransition } from "./page-transition";
import { WorkGrid } from "./work-grid";
import XIcon from "@/icons/prime_twitter.svg";
import GitHubIcon from "@/icons/mdi_github.svg";
import type { Project } from "@/lib/projects";

export function HomeContent({ projects }: { projects: Project[] }) {
  const [loading, setLoading] = useState(true);

  const handleComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Preloader onComplete={handleComplete} />}
      <PageTransition>
        <WorkGrid projects={projects} />
        <div className="fixed bottom-[40px] left-0 right-0 flex items-center justify-center gap-[10px] px-6">
          <a
            href="https://x.com/deboofficial_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#ebebeb] dark:bg-[#1f1f1f] backdrop-blur-md text-[#737373] transition-colors duration-200 hover:bg-[#e0e0e0] dark:hover:bg-[#2a2a2a] hover:text-[#363636] dark:hover:text-[#ffffff]"
          >
            <XIcon className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/deboofficial"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex items-center justify-center w-14 h-14 rounded-full bg-[#ebebeb] dark:bg-[#1f1f1f] backdrop-blur-md text-[#737373] transition-colors duration-200 hover:bg-[#e0e0e0] dark:hover:bg-[#2a2a2a] hover:text-[#363636] dark:hover:text-[#ffffff]"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href="mailto:ali.adebolaa@gmail.com?subject=Design%20Opportunity&body=Hi%20Ade%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20was%20impressed%20with%20your%20work.%0A%0AI'd%20love%20to%20connect%20and%20discuss%20an%20opportunity%20that%20I%20think%20could%20be%20a%20great%20fit.%0A%0AHere's%20a%20bit%20of%20context%3A%0A%5BAdd%20details%20here%5D%0A%0ALet%20me%20know%20if%20you're%20available%20for%20a%20quick%20chat.%0A%0ABest%2C%0A%5BYour%20Name%5D"
            className="flex items-center justify-center h-14 px-8 rounded-full bg-[#ebebeb] dark:bg-[#1f1f1f] backdrop-blur-md text-[15px] text-muted transition-colors duration-200 hover:bg-[#e0e0e0] dark:hover:bg-[#2a2a2a] hover:text-[#363636] dark:hover:text-[#ffffff]"
          >
            email
          </a>
        </div>
      </PageTransition>
    </>
  );
}
