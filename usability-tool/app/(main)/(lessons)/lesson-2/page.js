import "@/styles/mainpage.scss";
import "@/styles/lesson.scss";

export default function Lesson2() {
  return (
    <div>
      <div className={"main-text-container"}>
        <h1>Heuristic 2: Match between system and the real world</h1>
        <p>
          Software systems are typically modeled on some real-world analogue since that is what most people (including
          software developers) are most familiar with. Designing the user-facing side of the system to appear and
          function in a way that the user is familiar with makes it easier for them to interact with because they already
          know how to.
        </p>
        <p>
          It is crucial for the system to meet the user on the user’s terms.  Go to them, don’t make them come to you.
          Just because the system’s designers can easily understand it does not mean that the average user will be able
          to. Accessibility is key to usability – no potential user is going to choose a website that requires
          specialized knowledge to use over a website that does not. This is particularly salient when it comes to
          language. If a user sees a bunch of technical jargon that they don’t understand, they will have a much more
          difficult time using the system than if the system used accessible language.
        </p>
        <p>
          Every software system will have some real-world analogue that users are probably already familiar with, so that
          familiarity should be accounted for when designing the system. If the system looks and feels like the familiar
          analogue, the user will have a much easier time using it. They can simply transfer their existing knowledge and
          apply it. If the system functions in a different way than the analogue, the user may attempt to apply their
          knowledge anyway and cause problems. There’s no need to reinvent the wheel, especially if it would make the
          users learn new tricks.
        </p>
        <p>
          Software systems are often modeled after a physical object that came first. An example of this is the keyboard
          on a phone. With the small size of the keyboard, and the fact that users type using just one or two fingers
          instead of all ten, it would be possible to design a keyboard more optimized for smartphone use. However, this
          would require users to learn a new design that is at odds with their existing knowledge. The benefits of using
          the existing design far outweigh the benefits of creating a new one.
        </p>
        <p>
          Systems can be similar to objects, but they can also be similar to activities. Users should interact with these
          systems the same way they would perform the activities in real life. It may be more efficient to do them
          differently in the digital world, but the user has already formed an expectation based on the real world that
          should be followed.
        </p>
        <p>
          For the design to accurately reflect the users’ real-world experiences, the designer must know their audience
          and understand their experience. A system that is tailored to the needs of IT professionals, for example, can
          and should use more technical language than a system that is intended for widespread use. To make a system
          mirror a familiar analogue, the designer must know what their audience will be familiar with. This not only
          makes the system more usable, but also shows the user that the designers care about and prioritize the user
          experience.
        </p>
      </div>
      <div className={"heuristic-btn-container"}>
        <a className="previous-heuristic heuristic-btn" href="/lesson-1" target="_self">
          <h3>Heuristic 1</h3>
        </a>
        <a className="next-heuristic heuristic-btn" href="/lesson-3" target="_self">
          <h3>Heuristic 3</h3>
        </a>
      </div>
    </div>
  )
}