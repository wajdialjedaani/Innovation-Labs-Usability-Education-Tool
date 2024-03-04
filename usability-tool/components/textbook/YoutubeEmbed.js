import styles from "@/styles/Textbook.module.scss"

export default function YoutubeEmbed({url}){
  return (
    <div className={styles.embedContainer}>
      <iframe className={styles.embed} src={url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}