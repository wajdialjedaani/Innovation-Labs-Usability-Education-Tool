import styles from "@/styles/UIBones.module.scss";

import BoneTooltip from "../BoneTooltip";

export function AccountSettingsHeader(){
  return (
    <BoneTooltip title="Account Settings Header">
    <div className={styles.heuristicFourAccountSettingsHeader}>
      Account Settings
    </div>
    </BoneTooltip>
  )
}

export function InputBox(){
  return (
    <BoneTooltip title="Form Input Box">
    <div className={styles.heuristicFourInputBox}>
      
    </div>
    </BoneTooltip>
  )
}

export function UsernameSubHeader(){
  return (
    <BoneTooltip title="Username Subheader">
    <div className={styles.heuristicFourSubHeader}>
      Username
    </div>
    </ BoneTooltip>
  )
}

export function PasswordSubHeader(){
  return (
    <BoneTooltip title="Password Subheader">
    <div className={styles.heuristicFourSubHeader}>
      Password
    </div>
    </BoneTooltip>
  )
}

export function SecuritySubHeader(){
  return (
    <BoneTooltip title="Security Subheader">
    <div className={styles.heuristicFourSubHeader}>
      Security
    </div>
    </BoneTooltip>
  )
}

export function CurrentPasswordInputHeader(){
  return (
    <BoneTooltip title="Current Password Form Label">
    <div className={styles.currentPasswordHeader}>
      Current Password
    </div>
    </BoneTooltip>
  )
}

export function NewPasswordInputHeader(){
  return (
    <BoneTooltip title="New Password Form Label">
    <div className={styles.currentPasswordHeader}>
      New Password
    </div>
    </BoneTooltip>
  )
}

export function ConfirmNewPasswordInputHeader(){
  return (
    <BoneTooltip title="Confirm New Password Form Label">
    <div className={styles.currentPasswordHeader}>
      Confirm New Password
    </div>
    </BoneTooltip>
  )
}

export function ChangeUsernameButton(){
  return (
    <BoneTooltip title="Change Username Button">

    <div className={styles.heuristicFourNormalButton}>
      Change Username
    </div>
    </BoneTooltip>
  )
}

export function ChangePasswordButton(){
  return (
    <BoneTooltip title="Change Password Button">

    <div className={styles.heuristicFourNormalButton}>
      Change Password
    </div>
    </BoneTooltip>
  )
}

export function LogOutEverywhereButton(){
  return (
    <BoneTooltip title="Log Out Everywhere Button">
    <div className={`${styles.heuristicFourNormalButton} ${styles.heuristicFourScaryButton}`}>
      Log Out Everywhere
    </div>
    </BoneTooltip>
  )
}

export function DeleteAccountButton(){
  return (
    <BoneTooltip title="Delete Account Button">
    <div className={`${styles.heuristicFourNormalButton} ${styles.heuristicFourScaryButton}`}>
      Delete Account
    </div>
    </BoneTooltip>
  )
}

export function DeleteAccountWarning(){
  return (
    <BoneTooltip title="Delete Account Warning">

    <div className={styles.scaryWarning}>
      Warning: This will delete your account from Atomic Clothing. This action is irreversible.
    </div>

    </BoneTooltip>
  )
}

export function LogOutEverywhereWarning(){
  return (
    <BoneTooltip title="Log Out Everywhere Warning">

    <div className={styles.normalWarning}>
      This will sign you out on all devices. You will need to re-sign in after continuing.
    </div>

    </BoneTooltip>
  )
}

export function HeuristicFourStaticBody(){
  return (
    <div className={styles.heuristicFourStaticBody}>
    </div>
  )
}

