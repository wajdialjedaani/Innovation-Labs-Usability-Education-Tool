import '@/styles/lesson.scss'

export default function Lesson5() {
  return (
    <main>
      <h1>Error Handling</h1>
      <h3>Heuristic 5: Error prevention & Heuristic 9: Help users recognize, diagnose, and recover from errors</h3>
      <p>
        The aim of the “error prevention”, and “help users recognize, diagnose, and recover from errors” usability
        heuristics is to minimize the risk of errors and to help users when errors do arise.
        <br /><br />
        “Error prevention” emphasizes designing interfaces such that user errors are anticipated and avoided. This can
        be accomplished by using clear and descriptive labels for fields, asking for confirmation before performing
        irreversible actions, and constraints that prevent the user from entering invalid data. By mitigating errors,
        users can expect an increase in productivity as well as their experience.
        <br /><br />
        In contrast, the “help users recognize, diagnose, and recover from errors” usability heuristic acknowledges
        that even after implementing error mitigation techniques, errors will still occur. In order to best help users
        navigate through errors, when an error occurs a meaningful message should appear that helps the user to
        understand what went wrong and what steps they can take to rectify it. This will help the user to not make the
        same error again in the future as well as to get them back to their task as soon as possible.
      </p>
    </main>
  )
}