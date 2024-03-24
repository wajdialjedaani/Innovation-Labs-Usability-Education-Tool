"use client";
import "@/styles/mainpage.scss";
import Link from "next/link";

import { getAuthContext } from "../components/AuthContextProvider";

export default function mainPage() {
  const {
    metaDataSuite: { metaData, updateMetaData },
  } = getAuthContext();

  const completedHeuristics = metaData.completedHeuristics;
  if (!completedHeuristics) return;

  const heuristicNames = [
    "Visibility of system status",
    "Match between system and the real world",
    "User control and freedom",
    "Consistency and standards",
    "Error prevention",
    "Recognition rather than recall",
    "Flexibility and efficiency of use",
    "Aesthetic and minimalist design",
    "Help users recognize, diagnose, and recover from errors",
    "Help and documentation",
  ];

  function textbookClicked(heur) {
    const newMetaData = { ...metaData };
    newMetaData.completedHeuristics[heur] = Math.max(
      newMetaData.completedHeuristics[heur],
      1
    );
    updateMetaData(newMetaData);
  }

  return (
    <main>
      <div className="text-center mx-auto mt-5 col-md-6">
        <div
          className="accordion accordion-flush shadow-none"
          id="mainAccordion"
        >
          {heuristicNames.map((name, i) => (
            <div className="accordion-item" key={i}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${i}`}
                  aria-expanded="false"
                  aria-controls={`collapse${i}`}
                >
                  Heuristic {i + 1}
                </button>
              </h2>
              <div
                id={`collapse${i}`}
                className="accordion-collapse collapse"
                data-bs-parent="#mainAccordion"
              >
                <div className="accordion-body p-0">
                  <ul className="list-group list-group-flush text-start ">
                    <Link
                      className="list-group-item list-group-item-action"
                      href={`/lessons/${i + 1}`}
                      onClick={() => {
                        if (completedHeuristics[i] < 1) textbookClicked(i);
                      }}
                    >
                      <i className="bi bi-book p-1"></i>
                      Textbook
                    </Link>
                    <Link
                      className={`list-group-item list-group-item-action ${
                        completedHeuristics[i] < 1 ? "disabled" : "none"
                      }`}
                      aria-disabled="true"
                      href={`/quiz/${i + 1}`}
                    >
                      <i className="bi bi-question-circle p-1"></i>Quiz
                    </Link>
                    <Link
                      className={`list-group-item list-group-item-action ${
                        completedHeuristics[i] < 2 ? "disabled" : "none"
                      }`}
                      aria-disabled="true"
                      href={`/ui-builder/activity/1`}
                    >
                      <i className="bi bi-tools p-1"></i>
                      UI Builder
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
