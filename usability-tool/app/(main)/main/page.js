import "@/styles/mainpage.scss";
import Link from "next/link";

export default function mainPage() {
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

  return (
    <main>
      <div class="text-center mx-auto mt-5 col-md-6">
        <div class="accordion accordion-flush shadow-none" id="mainAccordion">
          {heuristicNames.map((name, i) => (
            <div class="accordion-item" key={i}>
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
                data-bs-parent="#mainAccordion"
              >
                <div class="accordion-body p-0">
                  <ul class="list-group list-group-flush text-start ">
                    <Link
                      class="list-group-item list-group-item-action"
                      href={`/lessons/${i + 1}`}
                    >
                      <i class="bi bi-book p-1"></i>
                      Textbook
                    </Link>
                    <Link
                      class="list-group-item list-group-item-action disabled"
                      aria-disabled="true"
                      href={`/quiz/${i + 1}`}
                    >
                      <i class="bi bi-question-circle p-1"></i>Quiz
                    </Link>
                    <Link
                      class="list-group-item list-group-item-action disabled"
                      aria-disabled="true"
                      href={`/ui-builder/activity/1`}
                    >
                      <i class="bi bi-tools p-1"></i>
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
