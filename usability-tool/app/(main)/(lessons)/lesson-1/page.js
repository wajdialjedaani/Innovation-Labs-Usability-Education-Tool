import "@/styles/lesson.scss";

export default function Lesson1() {
  return (
    <div className={"main-text-container"}>
      <h1>Heuristic 1: Visibility of system status</h1>
      <p>
        “Visibility of system status” refers to information presented to the user describing the system’s current
        state. The user communicates with the system by interacting with it, so the system must communicate back in
        order to help the user decide their next move. If not, the user would be flying blind, guessing at what the
        system is doing.
      </p>
      <p>
        “Visibility of system status” refers to information presented to the user that describes the system’s current
        state. The user communicates with the system by interacting with it, so the system must communicate
        back in order to help the user decide their next move. If not, the user would be flying blind, guessing at the
        current state of the system.
      </p>
      <p>
        The most important element of the system status that needs to be communicated to the user is <b>appropriate
        feedback</b> regarding their actions. For example, if a user clicks on an icon, something should visually
        indicate that the action was performed. If not, the user will likely keep clicking the icon, leading to
        potentially unwanted behavior. Even if the result of an action is still being computed, or can not be
        communicated to the user, the action itself must be acknowledged as soon as possible. <b>Immediate feedback</b>
        can prevent the user from wondering if their action had any effect. For example, if a system needs more time to
        process an action, a loading bar or other indication should be displayed so the user gets confirmation that the
        action is working as intended.
      </p>
      <p>
        Another important aspect of information sharing is trust. Sharing the system status will build trust with the
        user, while hiding the system status will break that trust. If the system changes state in a way that affects
        the user without informing them, the user will be left confused and less likely to use the system in the
        future. The user should be the one who is in control of the system, and this would take control away from them.
      </p>
      <p>
        There are many elements of a system’s state that are of interest to the user, but there are many more
        the user has no interest in. Generally, elements that may affect a user’s decision-making are highly important
        to include, and all others should be excluded. This often includes general system information like battery life
        or internet connectivity, but will leave out the more specific information like the machine’s IP address.
        Determining what status items are important involves extensive testing and feedback.
      </p>
    </div>
  )
}