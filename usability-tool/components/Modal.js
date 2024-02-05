// Modal.js 

// Takes props.toggleFunction and children. 
// user handles modal panel and children. clicking outside bounds of children will trigger toggleFunction.
import styles from "@/styles/modal.module.scss";

export default function Modal({toggleFunction, children, heading}){

  const handleClick = (event) => {
    // Check if the clicked element or its parent is the modalBody
    if (
      event.target === event.currentTarget ||
      event.target.parentElement === event.currentTarget
    ) {
      // Perform desired action here
      toggleFunction();
    }
  };

  return (
    <div className={styles.modalBody} onClick={handleClick}>
      <div className={styles.modalContainer}>
        <div className={styles.modalPanel}>
          <div className={styles.modalHeading}>
            <div className={styles.modalHeadingText}>
              {heading}
            </div>

            <button className={styles.modalButton} title="exit" onClick={toggleFunction}>
              <img src="/icons/x.svg" alt="exit"/>
            </button>
          </div>

          <div className={styles.modalChildrenContainer}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}