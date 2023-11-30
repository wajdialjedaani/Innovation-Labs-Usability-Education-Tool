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
        The most important element of system status that needs to be communicated to the user is <strong>appropriate
        feedback</strong> from their actions. If a user clicks on an icon, for example, something should visually
        indicate that the action was recorded. If not, they’ll probably keep clicking that icon, leading to potentially
        unwanted behavior. Even if the result of an action is still being computed, or otherwise can’t be communicated
        to the user, the action itself needs to be acknowledged as soon as possible. <strong>Immediate
        feedback</strong> can prevent the user from sitting there and wondering what’s going on or if their action had
        any effect. If the system needs more time to process the action, a loading bar or other indication should also
        be displayed so the user doesn’t think something went wrong.
      </p>
      <p>
        Another important aspect of information sharing is trust. Sharing the system status will build trust, while
        hiding it will break trust. If the system changes state in a way that affects the user without informing them,
        they will be left confused and less likely to use the system in the future. The user should be the one in
        control of the system, to a degree, and this would take control away from them.
      </p>
      <p>
        There are many elements of a system’s state that are of interest to the user, but there are many more that the
        user won’t need to know. Generally, elements that may affect a user’s decision-making are important to include,
        and all others should be excluded. This often includes general system information like battery life or internet
        connectivity, but will leave out the more specific information like the machine’s IP address. Determining what
        status items are important typically involves extensive testing and feedback.
      </p>
    </div>
  )
}