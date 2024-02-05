// MenuBar.js - Component for rendering MenuBar on UIBuilder. 
// Also responsible for rendering modal windows

// styles
import styles from "@/styles/UIBuilder.module.scss";

// components
import Modal from "../Modal";
import DebugMenu from "./DebugMenu";
import GradingPanel from "./GradingPanel";
import InfoPanel from "./InfoPanel";

// utils
import { Fragment, useEffect, useState } from "react";
import { getContextSuite } from "./UIBuilderContextProvider.js";
import BoneDiscarder from "./BoneDiscarder";

export default function MenuBar(props){
  const {scenarioInformation} = getContextSuite();
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

  // use effect for displaying scenario information
  useEffect(() => {
    renderModal(<InfoPanel />, scenarioInformation.title);
  }, []);

  return (
    <Fragment>
      {modal}

      <nav className={styles.menuBarContainer}>
        <div className={styles.menuBarGroup}>
          <Button
            alt="exit"
            icon="x"
            text="Exit"
          />

          <Button
            alt="help"
            icon="help-circle"
            onClick={() => {
              renderModal(<InfoPanel />, scenarioInformation.title);
            }}
            text="Scenario Information"
          />

          { scenarioInformation.title === "developer mode" &&
            <Button
              alt="debug menu"
              icon="cpu"
              onClick={() => {renderModal(<DebugMenu />, "debug menu")}}
              text="Developer Menu"
            />
          }
        </div>

        <div className={styles.menuBarTitle} role="heading">
          {scenarioInformation.title}
        </div>

        <div className={styles.menuBarGroup}>
          <Button
            alt="submit"
            icon="check"
            onClick={() => {renderModal(<GradingPanel />, "Activity Results")}}
            text="Submit"
          />
        </div>
      </nav>
    </Fragment>
  )
}

function Button({icon, alt, onClick, text}){
  return (
    <div className={styles.menuBarButtonContainer}>
      <button className={styles.menuBarButton} role="button" alt={alt} title={alt} onClick={onClick}>
      {text}
      <img src={`/icons/${icon}.svg`}/>
      </button>
    </div>
  )
}