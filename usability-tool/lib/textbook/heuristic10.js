import YoutubeEmbed from "@/components/textbook/YoutubeEmbed";
import styles from "@/styles/Textbook.module.scss";

export const heuristic10Meta = {
  heuristic: 10,
  title: "Help and Documentation",
  headerImg: {
    backgroundImage: `url('/lessons/headerimages/10.webp')`,
    backgroundPosition: `-150px 0px`,
    backgroundSize: "50%",
  },
};

export function Heuristic10Text() {
  return (
    <div className={styles.headerWrappa}> 
      <YoutubeEmbed 
        url="https://www.youtube.com/embed/iIQVRzatb50?si=KHX2PSMs03RaYgZo"
      />
      <p>
        In interface design, providing effective help and documentation is essential for assisting users in
        understanding, navigating, and utilizing the system efficiently. This heuristic emphasizes the
        importance of offering comprehensive support resources to address user queries and challenges.
      </p>
      <h2>Accessible Help Resources</h2>
      <p>
        Ensure that help resources are readily accessible within the interface. Implement
        features like tooltips, help menus, or a help center that users can easily access or navigate to. The goal
        is to provide assistance when needed, helping to provide an uninterrupted workflow. Documentation should be
        easy to search for and related to the user’s task.
      </p>
      <img src="/lessons/lesson10-graphics/help.png" alt="A Help Button" />
      <h2>Clear Documentation</h2>
      <p>
        Develop clear and concise documentation that explains the system’s functionalities.
        Documentation should be organized logically and use plain language that can be understood easily.
      </p>
      <h2>User Feedback</h2>
      <p>
        Provide opportunities for users to offer feedback on these help resources. Enable users to
        rate the usefulness of your documentation, report any unclear instructions, or suggest any other topics for
        coverage.
      </p>
      <img src="/lessons/lesson10-graphics/feedback.png" alt="A Feedback Page" />
      <p>
        By prioritizing the development of help and documentation, designers can create a user-focused experience 
        that allows individuals to effectively navigate the system and resolve issues without the assistance of live 
        support agents. This heuristic is most important in boosting user confidence, self-sufficiency, and overall 
        improves user experience.
      </p>
    </div>
  );
}
