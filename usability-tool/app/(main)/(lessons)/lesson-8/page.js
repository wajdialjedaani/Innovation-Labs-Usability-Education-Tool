import "@/styles/mainpage.scss";
import "@/styles/lesson.scss";

export default function Lesson8() {
  return (
    <div>
      <div className={"main-text-container"}>
        <h1>Heuristic 8: Aesthetic and minimalist design</h1>
        <p>
          Since these indicators will be visible at almost all times, it is important that they follow an aesthetic and
          minimalist design. This means that the visual design of the UI is focused on the information most relevant to
          the user. Unnecessary indicators will only serve to clutter the screen and draw attention away from what the
          user is looking for.
        </p>
        <p>
          Aesthetics can help boost <b>user engagement</b> with the system not by grabbing the user’s attention, which in turn
          causes them to stay longer. Visually appealing interfaces can improve the user experience drastically, which
          in turn encourages the user to continue using the system as they will be drawn towards the system’s design.
        </p>
        <p>
          A minimalist design can help users with <b>accessibility needs</b>. Providing users with a minimalist user interface
          and system design can decrease the amount of visual clutter, helping those with visual disabilities
          understand the system quicker and easier. This can also help those with sensory problems who tend to get
          overstimulated easily, reducing the sensory overload and help not overstimulate those with the sensory issues.
        </p>
        <p>
          Minimalism can also reduce the <b>cognitive load</b> that users face within the system. Having to make too many
          choices too often can lead the user to feel fatigued, reducing the options the user has to make reduces the
          fatigue gained from making too many decisions. A decreased cognitive load can allow the user to make more
          important decisions less fatigued than if the system had an increased cognitive load.
        </p>
        <p>
          Sticking to an aesthetic can also create <b>brand recognition</b> for the system. Leading users to become familiar
          with not only the system but also on the brand or group that created it. If a positive perception is formed
          users are going to be more willing to use systems associated with the brand in the future.
        </p>
        <p>
          Creating an <b>adaptable</b> and <b>scalable</b> system is also possible with minimalism. Since simplicity is prioritized
          in minimalistic systems, and simplistic designs are easy to scale and adapt, making a system minimalistic can
          improve how easy it is to adapt to other devices.
        </p>
        <p>
          Finally users will experience an <b>easy learning curve</b>, meaning they will spend less time learning how to use
          the system. This will decrease frustration that can be had when a user is not able to perform an action they
          want to do, but do not know how. A simplistic design focuses on making everything easy for a brand new user
          to understand, while still keeping all the core and side functionalities that are necessary.
        </p>
      </div>
      <div className={"heuristic-btn-container"}>
        <a className="previous-heuristic heuristic-btn" href="/lesson-7" target="_self">
          <h3>Heuristic 7</h3>
        </a>
        <a className="next-heuristic heuristic-btn" href="/lesson-9" target="_self">
          <h3>Heuristic 9</h3>
        </a>
      </div>
    </div>
  )
}