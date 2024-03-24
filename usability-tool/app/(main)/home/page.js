"use client";
import styles from "@/styles/home.scss";
import Link from "next/link";

import { getAuthContext } from "../components/AuthContextProvider";

export default function Home() {
  const { user } = getAuthContext();
  return (
    <main>
      <h1 className="homeTitle mt-3 text-center">
        Learn and Practice Nielsen's 10 Usability Heuristics
      </h1>

      <div className=" mt-3 p-4 d-lg-flex flex-row justify-content-center gap-4">
        <div className="card col-lg-2 mb-3">
          <div className="card-header">
            Learn - Textbook <i class="bi bi-book"></i>
          </div>
          <div className="card-body">
            <p className="card-text">
              Progress through the curriculum to explore each of Jakob Nielsen's
              10 Usability Heuristics in depth.
            </p>
          </div>
        </div>
        <div className="card col-lg-2 mb-3">
          <div className="card-header">
            Study - Quizzes <i class="bi bi-question-circle"></i>
          </div>
          <div className="card-body">
            <p className="card-text">
              Solidify your grasp of each heuristic by engaging in quizzes
              designed to reinforce your understanding across the curriculum.
            </p>
          </div>
        </div>
        <div className="card col-lg-2 mb-3">
          <div className="card-header">
            Practice - UI Builder <i class="bi bi-tools"></i>
          </div>
          <div className="card-body">
            <p className="card-text">
              After completing each quiz, reinforce your understanding of the
              curriculum by constructing a functional user interface using an
              interactive UI Builder game.
            </p>
          </div>
        </div>
        <div className="card col-lg-2 mb-3">
          <div className="card-header">
            Statistics - Graphs <i class="bi bi-bar-chart"></i>
          </div>
          <div className="card-body">
            <p className="card-text">
              Track your progress and see improvements visually as you progress
              through the curriculum by visiting the statistics page.
            </p>
          </div>
        </div>
      </div>
      <div className="homeButtonsContainer text-center d-flex d-md-block  justify-content-center align-items-center flex-column">
        {!user ? (
          <>
            <Link className="homeButton col-8" href="/signin">
              Sign In
            </Link>
            <Link className="homeButton col-8" href="/register">
              Register
            </Link>
          </>
        ) : (
          <Link className="homeButton col-8" href="/main">
            Continue
          </Link>
        )}
      </div>
    </main>
  );
}
