// MenuBar.js - Component for rendering MenuBar on UIBuilder. 
// Also responsible for rendering modal windows

// styles
import styles from "@/styles/UIBuilder.module.scss";

// components
import Modal from "../Modal";
import DebugMenu from "./DebugMenu";

// utils
import { Fragment, useState } from "react";

export default function MenuBar(props){
  const [modal, setModal] = useState(null);

  function clearModal() {
    setModal(null);
  }

  function renderModal(component, heading) {
    setModal(
      <Modal toggleFunction={clearModal} heading={heading}>
        {component}
      </Modal>
    )
  }

  return (
    <Fragment>
      {modal}

      <nav className={styles.menuBarContainer}>
        <div className={styles.menuBarGroup}>
          <Button
            alt="exit"
            icon="x"
          />

          <Button
            alt="help"
            icon="help-circle"
          />

          <Button
            alt="debug menu"
            icon="cpu"
            onClick={() => {renderModal(<DebugMenu />, "debug menu")}}
          />
        </div>

        <div className={styles.menuBarTitle} role="heading">
          UI Builder Debug Editor
        </div>

        <div className={styles.menuBarGroup}>
          <Button
            alt="submit"
            icon="check"
          />
        </div>
      </nav>
    </Fragment>
  )
}

function Button({icon, alt, onClick}){
  return (
    <button className={styles.menuBarButton} role="button" alt={alt} title={alt} onClick={onClick}>
      <img src={`icons/${icon}.svg`}/>
    </button>
  )
}