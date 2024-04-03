import YoutubeEmbed from "@/components/textbook/YoutubeEmbed";
import styles from "@/styles/Textbook.module.scss";

export const heuristic8Meta = {
  heuristic: 8,
  title: "Aesthetic and Minimalist Design",
  headerImg: {
    backgroundImage: `url('/lessons/headerimages/8.webp')`,
    backgroundPosition: `-150px -75px`,
    backgroundSize: "50%",
  },
};

export function Heuristic8Text() {
  return (
    <div>
      <YoutubeEmbed 
        url="https://www.youtube.com/embed/ZgbRmeWDgd0?si=jAUz6x-B3tp8LsIB"
      />
      <p>
        Since these indicators will be visible at almost all times, it is important that they follow an aesthetic
        and minimalist design. This means that the visual design of the UI is focused on the information most
        relevant to the user. Unnecessary indicators will only serve to clutter the screen and draw attention
        away from what the user is looking for.
      </p>
      <p>
        Aesthetics can help boost <strong>user engagement</strong> with the system not by grabbing the user’s attention, which
        in turn causes them to stay longer. Visually appealing interfaces can improve the user experience
        drastically, which in turn encourages the user to continue using the system as they will be drawn
        towards the system’s design. A good example of the use of aesthetics can be found on YouTube, the 
        circular design of the buttons creates a round and modern aesthetic.
      </p>
      <img src="/lessons/lesson8-graphics/aestheticbuttons.png" alt="Circular buttons on YouTube" />
      <p>
        A minimalist design can help users with <strong>accessibility needs</strong>. Providing users with a minimalist user
        interface and system design can decrease the amount of visual clutter, helping those with visual disabilities
        understand the system quicker and easier. This can also help those with sensory problems who tend to get
        overstimulated easily, reducing the sensory overload and help not overstimulate those with the sensory issues.
      </p>
      <p>
        Minimalism can also reduce the <strong>cognitive load</strong> that users face within the system. Having to make too many
        choices too often can lead the user to feel fatigued, reducing the options the user has to make reduces the
        fatigue gained from making too many decisions. A decreased cognitive load can allow the user to make more
        important decisions less fatigued than if the system had an increased cognitive load.
      </p>
      <p>
        While minimalism is commonplace and the standard today many websites of the past did not follow a minimalist design. 
        For example the old Msn homepage has no clear minimalist aesthetic and rather throws text, colors, and images all 
        on the screen. Causing an increase to the cognitive load and making it harder for those with visual impairments 
        to view the page.
      </p>
      <img src="/lessons/lesson8-graphics/msnoldpage.jpg" alt="A cluttered webpage" />
      <p>
        Sticking to an aesthetic can also create <strong>brand recognition</strong> for the system. Leading users to become familiar
        with not only the system but also on the brand or group that created it. If a positive perception is
        formed users are going to be more willing to use systems associated with the brand in the future.
      </p>
      <p>
        Creating an <strong>adaptable</strong> and <strong>scalable</strong> system is also possible with minimalism. Since simplicity is
        prioritized in minimalistic systems, and simplistic designs are easy to scale and adapt, making a
        system minimalistic can improve how easy it is to adapt to other devices.
      </p>
      <p>
        Finally users will experience an <strong>easy learning curve</strong>, meaning they will spend less time learning
        how to use the system. This will decrease frustration that can be had when a user is not able to
        perform an action they want to do, but do not know how. A simplistic design focuses on making everything
        easy for a brand new user to understand, while still keeping all the core and side functionalities that
        are necessary.
      </p>
    </div>
  );
}
