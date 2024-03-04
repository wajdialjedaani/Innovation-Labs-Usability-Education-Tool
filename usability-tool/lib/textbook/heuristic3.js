import YoutubeEmbed from "@/components/textbook/YoutubeEmbed"
import styles from "@/styles/Textbook.module.scss"

export const heuristic3Meta = {
  heuristic: 1,
  title: "User Control and Freedom",
  headerImg: {
    backgroundImage: `url('/lessons/headerimages/3.jpg')`,
    backgroundPosition: `750% 75%`
  }
}

export function Heuristic3Text() {
  return (
    <div>
      <YoutubeEmbed url="https://www.youtube.com/embed/MXuk-fdbr0A?si=PVGyfxKhdfLfyg51" />
      
      <p>“User control and freedom” emphasizes providing users with options and customization within the system.
        This principle focuses on enabling users to navigate the interface freely, offering features such as undo
        or back buttons, and ensuring the ability to exit unwanted features. By giving users control over their
        interactions, they can correct mistakes and backtrack with minimal frustration.
      </p>

      <p className={styles.sideBySide}>
        <img src="/lessons/lesson3-graphics/shortcut.png" alt="User changable shortcuts" />
        <div>Many systems will include a way for a user to change the keyboard shortcuts to suit their needs. For
        example the Windows 10 gamebar shortcut setting lets the user change the shortcut for multiple settings.</div>
      </p>
      <p>This heuristic focuses on the concept of empowering users to make decisions and navigate the system
        according to their own preferences. Offering this <strong>intuitive navigation</strong> allows users to move through the
        interface with confidence, giving off a sense of control and mastery.
      </p>
      <p>The addition of undo or back buttons is essential in allowing users to reverse actions or navigate to
        previous states easily. These features serve as <strong>safety nets</strong>, providing users with the freedom to explore
        features without the fear of consequences. Whether it’s revisiting a previous step in a process or
        undoing an unintended action, these controls offer users reassurance and confidence in their actions.
      </p>
      <p>Just as important is the ability to easily exit out of unwanted states or actions. Users should be able to
        exit or cancel tasks, dialogs, or processes without encountering obstacles or confusion. Clear and well
        placed exit options ensure that users can easily disengage from interactions they no longer wish to perform.
      </p>
      <p className={styles.sideBySide}><img src="/lessons/lesson3-graphics/exit.png" alt="A trash button allowing a user to cancel"/>
      <div>For example in Discord whenever attaching a file, the user can easily exit out of that state by clicking
        the trash can before submitting. This gives the user time to confirm as well as cancel out of that state.
      </div>
      </p>
      <p>By prioritizing user control and freedom in interface design, designers empower users to navigate and
        interact with confidence and ease. Through intuitive navigation, reliable undo functions, and
        accessible exit options, users can navigate the system easily, correcting errors and exploring without
        frustration or hesitation.
      </p>
    </div>
  )
}