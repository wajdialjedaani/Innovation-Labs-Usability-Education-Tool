import YoutubeEmbed from "@/components/textbook/YoutubeEmbed";
import styles from "@/styles/Textbook.module.scss";

export const heuristic6Meta = {
  heuristic: 6,
  title: "Recognition Rather than Recall",
  headerImg: {
    backgroundImage: `url('/lessons/headerimages/6.jpg')`,
    backgroundPosition: `-150px 75px`,
    backgroundSize: "50%",
  },
};

export function Heuristic6Text() {
  return (
    <div>
      <YoutubeEmbed 
        url="https://www.youtube.com/embed/6glQPp6q4Jc?si=YChp0LlsWe2kxouR"
      />
      <p>
        “Recognition rather than recall” refers to the need for systems to display information and actions explicitly
        so that users do not need to remember details from previous interactions. An example of this would be using
        a menu of icons in a text editor instead of memorizing command-line functions to edit the text. This helps
        to facilitate smoother interactions between the user and system by prompting them with visible and easily
        recognizable cues instead of making users rely on their memory.
      </p>
      <p>
        Providing <strong>visual cues</strong> and <strong>icons</strong> can instantly create recognition and instantly convey their meaning causing
        the user to spend less time memorizing what the icon accomplishes. This will drastically reduce the amount of&nbsp;
        <strong>mental effort</strong>, since users have an easier time recognizing rather than recalling, users will recall less and
        recognize more, the more icons and visual cues that are used. For example the Google Drive sidebar provides icons that
        a user can recognize. Such as a house for home, a computer for computer, and a cloud for cloud storage.
      </p>
      <img src="/lessons/lesson6-graphics/googledrive.PNG" alt="The icons provide an easy way for users to rely off of visual cues" />
      <p>
        There are many ways in which recall can be reduced such as a <strong>consistent design pattern</strong>, giving <strong>contextual hints</strong>,
        creating a <strong>predictable layout</strong>, and adding <strong>filters</strong>. Having a consistent design pattern helps a user gain an
        understanding of the functions that are presented and can recognize functions based on their design. Giving the
        user contextual hints will also reduce the amount of recall, as rather than having the user recall the information
        it is instead presented to them in a helpful manner. Creating a predictable layout will allow the users to
        become familiar with the layout and when they encounter a new part of the system, they will have recognition
        of the layout and how to interact with it. Finally having filters can help a user pinpoint what they want in
        a search by instead of them remembering the exact details, they can give a broad generalization of what they
        want, allowing the user to then look through those options. This decreases recall and allows the user to
        search based on recognition. For example the Lego store page allows users to customize and filter their search
        query by ticking boxes that will filter the search.
      </p>
      <img src="/lessons/lesson6-graphics/legostore.png" alt="There are filters on the left to specify the search" />
    </div>
  );
}
