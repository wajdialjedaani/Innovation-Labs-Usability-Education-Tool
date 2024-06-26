import YoutubeEmbed from "@/components/textbook/YoutubeEmbed";
import styles from "@/styles/Textbook.module.scss";

export const heuristic7Meta = {
  heuristic: 7,
  title: "Flexibility and Efficiency of Use",
  headerImg: {
    backgroundImage: `url('/lessons/headerimages/7.jpg')`,
    backgroundPosition: `-150px -75px`,
    backgroundSize: "50%",
  },
};

export function Heuristic7Text() {
  return (
    <div>
      <YoutubeEmbed 
        url="https://www.youtube.com/embed/LoTdRTBB8BQ?si=FE4I3jBWn_iebKSC"
      />
      <p>
        Flexibility and Efficiency of Use represents providing users with an increased workflow, allowing the user 
        to easily choose which workflow gives them the fastest and most efficient way of completing a task. An 
        example would be adding keyboard shortcuts, letting the user have in efficient method of performing the 
        task which saves time from interacting with the interface.
      </p>
      <p>
        Giving user's the access to <strong>customization</strong> allows the user to create their own workflow which is tailored 
        for them. Customization options can be colors, menus, page layout, or creating shortcuts. This increases the 
        efficiency of the workflow for the user as the more customization that is allowed the more a user can make the 
        interface fit their own personal preferences, increasing overall satisfaction. This can also help in accessibility 
        by allowing some users to change the colors to those which they can easily differentiate, or people who cannot use 
        a mouse can create keyboard shortcuts which bypasses the need for a mouse entirely. For example a common customization 
        option, which websites such as GitHub use, is allowing users to use a dark theme to decrease eye strain.
      </p>
      <img src="/lessons/lesson7-graphics/githubmode.png" alt="Two options, one being dark mode the other light mode" />
      <p>
        <strong>Contextual help and tips</strong> can help guide a user thorugh complex or unfamiliar tasks, giving them the proper 
        information that they need when they need it. By giving help and tips contextually which is relevant to their 
        current task, you increase the user's efficiency when navigating an area for the first time. The user can be trained 
        on the most efficient use of the interface, giving them a more effective way of interacting with the system. Reducing 
        the user's need to keep referring to the documentation or support articles to help navigate and efficiently use 
        the system. An example of a program that provides contextual help would be Visual Studio where if a letter is typed 
        the program will suggest code to be autofilled for you.
      </p>
      <img src="/lessons/lesson7-graphics/context.png" alt="Suggestions for code are given to a typed letter" />
      <p>
        <strong>Minimizing the steps</strong> taken to perform an action will greatly increase the speed at which a task can be performed. 
        By optimizing the sequence of steps and reducing extranious complexity, the user's experience can be streamlined and 
        be far simpler and easier to learn. Efficient workflows increase overall user productivity and satisfaction, leading 
        to a more positive user experience when interacting with the system.
      </p>
    </div>
  );
}
