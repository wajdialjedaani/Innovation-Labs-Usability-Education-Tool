import YoutubeEmbed from "@/components/textbook/YoutubeEmbed";
import styles from "@/styles/Textbook.module.scss";

export const heuristic9Meta = {
  heuristic: 9,
  title: "Help Users Recognize, Diagnose, and Recover from Errors",
  headerImg: {
    backgroundImage: `url('/lessons/headerimages/9.jpg')`,
    backgroundPosition: `-150px -75px`,
    backgroundSize: "50%",
  },
};

export function Heuristic9Text() {
  return (
    <div className={styles.headerWrappa}> 
      <YoutubeEmbed 
        url="https://www.youtube.com/embed/cCun-ReLTFI?si=0M0LLPsPU27vSibq"
      />
      <p>
        In interface design, the ability to handle errors is a useful aspect. This heuristic focuses on the
        importance of guiding users through recognizing, diagnosing, and recovering from errors when they
        occur.
      </p>
      <h2>Recognizing</h2>
      <p>
        The first step in error management is ensuring that users can easily recognize when an
        error has occurred. Clear and concise error messages should be displayed, avoiding technical terms
        and using <strong>plain language</strong> to communicate the issue. Visual cues such as color coding or icons can
        also aid in drawing attention to the problem area.
      </p>
      <h2>Diagnosis</h2>
      <p>
        Once an error is recognized, users should be able to easily and promptly resolve the issue.
        Users need enough information to understand the problem. Error messages should provide meaningful
        details about what went wrong, helping users to diagnose the issue without looking to other resources.
        Also, offering suggestions or links about further assistance can help users with additional issues.
      </p>
      <h2>Recovery</h2>
      <p>
        Guiding users through the recovery process is crucial to maintaining a positive user experience.
        Design interfaces that guide users toward potential solutions or other actions to solve the error. Offering
        a straightforward path to undo or correct mistakes allows users to regain control and continue their
        interactions with the system.
      </p>
      <p>
        An example that shows all the steps would be when YouTube cannot load. It first recognizes the problem 
        by stating it had an error. Then it diagnoses the error and gives the user context as to what error occured. 
        Finally it guides the user to refresh the screen, which is the final recovery step.
      </p>
      <img src="/lessons/lesson9-graphics/error.png" alt="YouTube Error" />
      <p>
        Error recovery should be intuitive and well-integrated into the interface. The goal is to minimize
        frustration and enable users to continue interacting with the system. Whenever errors do happen, prioritize
        user-centered solutions that empower users to feel confident and in control throughout the recovery process.
      </p>
    </div>
  );
}
