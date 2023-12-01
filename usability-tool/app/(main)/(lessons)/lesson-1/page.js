import "@/styles/lesson.scss";

export default function Lesson1() {
  return (
    <div className={"main-text-container"}>
      <h1>Lesson 1: Visual System Design</h1>
      <p>
        The visual presentation of a system is the first impression a user will have. A first impression is a lasting 
        impression, therefore, the visuals must be a primary focus. The main way that users interact with technology is 
        with visuals, typically through a graphical user interface (GUI), so it is vital that thought is put into the 
        visual design of the system, not just towards making the system look visually appealing.
      </p>
      <h1>Heuristic 1: Visibility of system status</h1>
      <p>
        “Visibility of system status” refers to information that is presented to the user, describing the system’s 
        current state. The user communicates with the system by interacting with it, therefore the system must 
        communicate back in order to help the user decide their next move. If not, the user would be clueless, guessing 
        at the current state of the system.
      </p>
      <p>
        The most important element of the system status that needs to be communicated to the user is providing <b>appropriate 
        feedback</b> to their actions. For example, if a user clicks on an icon,  something should visually indicate that 
        the action was performed. If not, the user will likely keep clicking the icon, leading to potentially unwanted 
        behavior. Even if the result of an action is still being performed, or can not be communicated to the user, the 
        action performed must be acknowledged as soon as possible. <b>Immediate feedback</b> can prevent the user from being 
        confused as to if their action had any effect. An example of immediate feedback would be, if a system needs 
        more time to process an action, a loading bar or other indication can be displayed so the user gets confirmation 
        that the action is working as intended.
      </p>
      <p>
        Another important aspect of information sharing is trust. Sharing the system status will build user trust, while 
        hiding the system status will break user trust. If the system changes state in a way that affects the user 
        without informing them, the user will be left confused and less likely to use the system in the future. The 
        user should be who is in control of the system, systems should avoid changing states, systems should only 
        change states when absolutely necessary. The user should have the most control over the system’s states.
      </p>
      <p>
        There are many elements of a system’s state that are of interest to the user, but there are many more where 
        the user has no interest. Generally, elements that may affect a user’s decision-making are highly important 
        to include, and all others should be excluded. This often includes general system information like battery 
        life or internet connectivity, but will leave out the more specific information like the machine’s IP address. 
        Determining what status items are important involves extensive testing and feedback.
      </p>
    </div>
  )
}