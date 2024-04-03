import styles from "@/styles/UIBones.module.scss";

import BoneTooltip from "../BoneTooltip";

export function AccountSettingsHeader(){
  return (
    <div className={styles.heuristicFourAccountSettingsHeader}>
      Account Settings
    </div>
  )
}

export function InputBox(){
  return (
    <div className={styles.heuristicFourInputBox}>
      
    </div>
  )
}

export function UsernameSubHeader(){
  return (
    <div className={styles.heuristicFourSubHeader}>
      Username
    </div>
  )
}

export function PasswordSubHeader(){
  return (
    <div className={styles.heuristicFourSubHeader}>
      Password
    </div>
  )
}

export function SecuritySubHeader(){
  return (
    <div className={styles.heuristicFourSubHeader}>
      Security
    </div>
  )
}

export function CurrentPasswordInputHeader(){
  return (
    <div className={styles.currentPasswordHeader}>
      Current Password
    </div>
  )
}

export function NewPasswordInputHeader(){
  return (
    <div className={styles.currentPasswordHeader}>
      New Password
    </div>
  )
}

export function ConfirmNewPasswordInputHeader(){
  return (
    <div className={styles.currentPasswordHeader}>
      Confirm New Password
    </div>
  )
}

export function ChangeUsernameButton(){
  return (
    <div className={styles.heuristicFourNormalButton}>
      Change Username
    </div>
  )
}

export function ChangePasswordButton(){
  return (
    <div className={styles.heuristicFourNormalButton}>
      Change Password
    </div>
  )
}

export function LogOutEverywhereButton(){
  return (
    <div className={`${styles.heuristicFourNormalButton} ${styles.heuristicFourScaryButton}`}>
      Log Out Everywhere
    </div>
  )
}

export function DeleteAccountButton(){
  return (
    <div className={`${styles.heuristicFourNormalButton} ${styles.heuristicFourScaryButton}`}>
      Delete Account
    </div>
  )
}

export function DeleteAccountWarning(){
  return (
    <div className={styles.scaryWarning}>
      Warning: This will delete your account from Atomic Clothing. This action is irreversible.
    </div>
  )
}

export function LogOutEverywhereWarning(){
  return (
    <div className={styles.normalWarning}>
      This will sign you out on all devices. You will need to re-sign in after continuing.
    </div>
  )
}

export function HeuristicFourStaticBody(){
  return (
    <div className={styles.heuristicFourStaticBody}>
    </div>
  )
}

