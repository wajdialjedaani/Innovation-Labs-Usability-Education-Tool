import Blerb from "./Blerb";
import Footer from "./Footer";
import NavBar from "./NavBar";
import TopBox from "./TopBox";

export default function Ad() {
  return (
    <div>
      <TopBox />
      <Blerb
        tagline="Unlock Usability Mastery"
        subtagline="From novice to expert we've got you covered. Use our college professor approved custom crafted curriculum to easily learn the basics of the 10 Nielsen Usability Heuristics."
        image="/textbook.png"
        light={false}
      />
      <Blerb
        tagline="Quiz Time!"
        subtagline="Test your usability ninja skills with our fun and interactive quizzes!"
        image="/quiz.png"
        light={true}
      />
      <Blerb
        tagline="Craft Amazing Interfaces"
        subtagline="Learn how to create usable interfaces with no coding experience required."
        image="/uibuilder.png"
        light={false}
      />
      <Blerb
        tagline="Track Your Progress"
        subtagline="Dive deep into your usability wizardry with our interactive stats page. Understand where you're at in your usability mastery, and see where you need to improve."
        image="/statistics.png"
        light={true}
      />
      <Blerb
        tagline="Rise to the Top"
        subtagline="Compete with fellow usability gurus! Do you have what it takes to be the best?"
        image="/leaderboard.png"
        light={false}
      />
      <Footer />
    </div>
  );
}