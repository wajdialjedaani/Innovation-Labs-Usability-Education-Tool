import YoutubeEmbed from "@/components/textbook/YoutubeEmbed"
import styles from "@/styles/Textbook.module.scss"

export const heuristic5Meta = {
  heuristic: 1,
  title: "Error Prevention",
  headerImg: {
    backgroundImage: `url('/lessons/headerimages/5.jpg')`,
    backgroundPosition: `-150px -30px`,
    backgroundSize: "50%"
  }
}

export function Heuristic5Text() {
  return (
    <div>
      <YoutubeEmbed url="https://www.youtube.com/embed/imS9s1DUY-I?si=yFojpJkgB60WiiTy" />

      <p>“Error prevention” emphasizes designing interfaces such that user errors are <strong>anticipated</strong> and <strong>avoided</strong>.
        This can be accomplished by using clear and descriptive labels for fields, asking for confirmation before
        performing irreversible actions, and constraints that prevent the user from entering invalid data. By
        mitigating errors, users can expect an increase in productivity as well as their experience. Achieving
        error prevention involves several key strategies.
      </p>
      <p>Employing <strong>clear and descriptive labels</strong> for fields, buttons, and interactive elements is crucial. Ambiguity
        in labeling can lead to confusion and errors. By ensuring that labels are specific and informative, such
        as using “Save Changes” instead of “Submit”, users can better understand the intended actions.
      </p>
      <p>Integrating <strong>confirmation dialogs</strong> for actions with <strong>irreversible effects</strong> adds a layer of protection against
        unintended actions. For example, a confirmation message to delete an account is the bare minimum required
        to prevent users from accidentally performing this irreversible action. Dialogs should clearly articulate
        the outcomes of the action and provide users with the option to proceed or cancel.
      </p>
      <p>A simple way websites use confirmation is by using Javascripts built in functions to open a confirmation
        window.
      </p>
      <p className={styles.centerImage}><img src="/lessons/lesson5-graphics/jsconfirm.gif" alt="JS confirm window" /></p>
      <p>Implementing advanced <strong>input validation</strong> mechanisms helps prevent users from entering invalid data. Real-time
        feedback on the validity of inputs, paired with clear error messages and suggestions for corrections, guides
        users towards accurate data entry, likely reducing the amount of errors.
      </p>
      <p>By incorporating these strategies into interface design, designers can proactively reduce errors, resulting
        in a smoother and more satisfying user experience.
      </p>
    </div>
  )
}