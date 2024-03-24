import YoutubeEmbed from "@/components/textbook/YoutubeEmbed";
import styles from "@/styles/Textbook.module.scss";

export const heuristic4Meta = {
  heuristic: 4,
  title: "Consistency and Standards",
  headerImg: {
    backgroundImage: `url('/lessons/headerimages/4.jpg')`,
    backgroundPosition: `-150px -30px`,
    backgroundSize: "50%",
  },
};

export function Heuristic4Text() {
  return (
    <div>
      <YoutubeEmbed url="https://www.youtube.com/embed/Ibndy9KLOSQ?si=qEKRWRsrbbz3XpGp" />

      <p>
        Consistency and compliance with established standards are important
        principles in interface design as a whole. The goal is to create a{" "}
        <strong>predictable</strong> and <strong>intuitive</strong> experience
        for users. This applies to everything within a system, including design
        elements, interactions, and behavior in general.
      </p>
      <p>
        <strong>Consistent Design Elements:</strong> Ensure consistency in
        visual design elements throughout the interface. For example, color
        schemes, button styles, icons, font, and layout should remain relatively
        the same along the website or application. This creates a sense of
        familiarity for the user, enabling them to navigate all features of the
        application with ease.
      </p>
      <p>
        <strong>Standardized Interactions:</strong> User interface designers
        should adopt the concept of standardized interaction patterns and
        behavior to improve user predictability. Users should have familiar
        actions and reactions when interacting with the interface and elements
        within it. There should be similar behavior among all elements when
        clicking, dragging, scrolling, and any other type of input. This will
        hopefully eliminate another cause of user confusion or frustration,
        contributing to a seamless user experience.
      </p>
      <p>
        <strong>Consistency Across Devices and Platforms:</strong> Ensure
        consistency in user experience across different devices and platforms.
        Interfaces should be designed so that they seamlessly adapt to different
        screen sizes, resolutions, and input methods. This should all be done
        without hindering the usability of the website. These familiar
        experiences are what improve general usability and encourage further
        user engagement across all platforms.
      </p>
      <p>
        A bad example of consistency accross devices and platforms would be
        Discord mobile and the Discord web app. While to access the direct
        messages on the web app you click the logo in the top left, on mobile it
        is another page at the bottom of the screen. Here is an example of the
        difference between web and mobile.
      </p>
      <p className={styles.centerImage}>
        <img
          src="/lessons/lesson4-graphics/discweb.png"
          alt="Discord Logo Button on web"
        />
      </p>
      <p>
        Above is the web app where the servers are below the direct messages.
      </p>
      <p className={styles.centerImage}>
        <img
          src="/lessons/lesson4-graphics/discmobile.png"
          alt="Discord tabs on mobile"
        />
      </p>
      <p>
        Above is the mobile app which has tabs for servers and messages. Meaning
        that consistency across devices is not preserved.
      </p>
      <p>
        <strong>Compliance with Accessibility Standards:</strong> Comply with
        accessibility standards to ensure everyone has consistent access to
        information and functionality for users with disabilities. The interface
        should be designed to accommodate a variety of needs, such as screen
        readers, keyboard navigation, and alternative input methods. These
        features help to promote inclusivity for all users.
      </p>
      <p>
        By prioritizing consistency and adhering to standards in interface
        design, designers can create a user experience that leads to user{" "}
        <strong>satisfaction</strong> and <strong>engagement</strong>. This
        heuristic serves as a guiding principle for creating interfaces that are
        user-friendly and intuitive.
      </p>
    </div>
  );
}
