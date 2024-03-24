import YoutubeEmbed from "@/components/textbook/YoutubeEmbed";
import styles from "@/styles/Textbook.module.scss";

export const heuristic2Meta = {
  heuristic: 2,
  title: "Matching Between the System and the Real World",
  headerImg: {
    backgroundImage: `url('/lessons/headerimages/2.jpg')`,
    backgroundPosition: `150% 35%`,
  },
};

export function Heuristic2Text() {
  return (
    <div>
      <YoutubeEmbed url="https://www.youtube.com/embed/0TAt9Pln51g?si=OzRuypw0-TTCf9Bp" />

      <p>
        “Matching between the system and the real world” entails creating
        interfaces that speak the user’s language and follow real-world
        conventions. In order to best streamline user interaction, the system
        should align with what the users’ pre-existing knowledge about what the
        system ought to look like. This includes using words or phrases common
        to the users and displaying information in a natural and logical order.
      </p>
      <p>
        One important part of matching between the system and the real world is
        taking advantage of <strong>user familiarity</strong>. Using language
        that users have seen before and are familiar with will allow them to
        instantly decipher its meaning. Using <strong>symbols</strong> that
        users are familiar with in the real world can also convey the purpose
        that symbol serves without having to directly tell the user.
      </p>
      <p className={styles.sideBySide}>
        <img
          src="/lessons/lesson2-graphics/icons.png"
          alt="Icons that relate to real world objects"
        />
        These symbols can be found on most sites and are a very clear
        representation of what they lead to. For example having a gear or a
        wrench for settings, or having a piece of paper icon for documents.
      </p>
      <p>
        Connecting the system and the real world can also create{" "}
        <strong>intuitive navigation</strong>. Organizing information similarly
        to how users would organize the same information in the real world can
        create an intuitive navigational flow. Mirroring the order that people
        naturally complete tasks can also create an intuitive flow from one task
        to another that feels natural to the user.
      </p>
      <p>
        The system must also have <strong>consistent terminology</strong> used
        throughout. Differing terms that are swapped interchangeably can confuse
        the user and lead the user to be confused. Consistency in language
        contributes to a smooth user experience and avoids any excess confusion
        that could arise from using differing terms. Using terms that are the{" "}
        <strong>industry-standard</strong> can enhance user understanding by
        utilizing what a user is previously familiar with.
      </p>
      <p>
        Providing users with appropriate <strong>feedback</strong> that matches
        their expectations for what should happen is important in a system. For
        example if a user presses a button, the user is expecting some sort of
        visual color change with the button, however if the button does not
        provide a visual color change, the user might be confused and will
        likely perform unwanted additional presses.
      </p>
      <p className={styles.centerImage}>
        <img
          src="/lessons/lesson2-graphics/hover.gif"
          alt="Button that changes color when clicked"
        />
      </p>
      <p>
        <strong>User testing</strong> and <strong>user feedback</strong> are
        crucial when it comes to understanding the users’ expectations. Without
        properly testing the system with users who are unrelated to the
        development, the expectations that the users’ have with the system will
        be obscured. Properly testing with users and understanding their
        feedback can help match the real world expectations and the system.
      </p>
    </div>
  );
}
