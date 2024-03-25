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
import { useRouter } from "next/navigation";

export default function MenuBar(props){
  const {scenarioInformation, solutionMode, toggleSolutionView} = getContextSuite();
  const [modal, setModal] = useState(null);

  const router = useRouter();

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

  function handleExit(){
    router.push(scenarioInformation.exitUrl)
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
            scaryMode
            onClick={handleExit}
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
          {solutionMode ? 
            <Button
              alt="submit"
              icon="unlock"
              onClick={() => {toggleSolutionView();}}
              text="Exit Solution View"
            /> 
            :
            <Button
              alt="submit"
              icon="check"
              onClick={() => {renderModal(<GradingPanel toggleFunction={clearModal}/>, "Activity Results")}}
              text="Submit"
            />
          }
        </div>
      </nav>
    </Fragment>
  )
}

function Button({icon, alt, onClick, text, scaryMode}){
  return (
    <div className={styles.menuBarButtonContainer}>
      <button className={`${styles.menuBarButton} ${scaryMode && styles.scaryButton}`} role="button" alt={alt} title={alt} onClick={onClick}>
      {text}
      <img src={`/icons/${icon}.svg`}/>
      </button>
    </div>
  )
}