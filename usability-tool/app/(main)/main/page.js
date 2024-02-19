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
    <main className="main-main">
      <div className="heuristic-btn-container">
        {heuristicNames.map((name, i) => (
          <Link className="heuristic-btn" href={i == 0 ? "/lessons/1" : `/lessons/${i + 1}`} key={i}>
            <h3 className="heuristic-btn-title">Heuristic {i + 1}</h3>
            <h5 className="heuristic-btn-name">{name}</h5>
          </Link>
        ))}
      </div>
    </main>
  );
}
