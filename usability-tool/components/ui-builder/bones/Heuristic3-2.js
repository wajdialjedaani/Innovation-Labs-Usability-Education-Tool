import styles from "@/styles/UIBones.module.scss";
import BoneTooltip from "../BoneTooltip";

export function HeuristicThreeTwoStaticTopBar() {
  return (
    <div className={styles.heuristic3StaticTopBar}>
    </div>
  )
}

export function HeuristicThreeTwoStaticBody() {
  return (
    <div className={styles.heuristic3StaticBody}>
    </div>
  )
}

export function NeutronLogo() {
  return (
    <div className={styles.neutronLogo}>
      <img src="/UIBuilder/neutron.svg" />
    </div>
  )
}

export function AccountsDropdown() {
  return (
    <BoneTooltip title="Top Bar - Accounts">

      <div className={styles.heuristic3DropdownBox}>
        Accounts
        <img src="/icons/chevron-down.svg" />
      </div></BoneTooltip>
  )
}

export function TransfersDropdown() {
  return (
    <BoneTooltip title="Top Bar - Transfers">

      <div className={styles.heuristic3DropdownBox}>
        Transfers
        <img src="/icons/chevron-down.svg" />
      </div></BoneTooltip>
  )
}

export function SettingsDropdown() {
  return (
    <BoneTooltip title="Top Bar - Settings">

      <div className={styles.heuristic3DropdownBox}>
        Settings
        <img src="/icons/chevron-down.svg" />
      </div></BoneTooltip>
  )
}

export function TopBarGreeting() {
  return (
    <BoneTooltip title="Top Bar - Profile">

      <div className={styles.heuristic3DropdownBox}>
        John Doe &nbsp;
        <img src="/icons/user.svg" />
      </div></BoneTooltip>
  )
}

export function AccountTransferHeader() {
  return (
    <BoneTooltip title="Account Transfer Header">

      <div className={styles.heuristicFourAccountSettingsHeader}>
        Account Transfer
      </div></BoneTooltip>
  )
}

export function TransferFromSubHeader() {
  return (
    <BoneTooltip title="Transfer From Subheader">

      <div className={styles.heuristicFourSubHeader}>
        Transfer From
      </div></BoneTooltip>
  )
}

export function TransferToSubHeader() {
  return (
    <BoneTooltip title="Transfer To Subheader">

      <div className={styles.heuristicFourSubHeader}>
        Transfer To
      </div></BoneTooltip>
  )
}

export function AccountTransferDropdownOne() {
  return (
    <BoneTooltip title="Account Selector Dropdown">

      <div className={styles.heuristic3AccountSelector}>
        <div className={styles.heuristic3SelectorGroup}>
          <img src="/icons/chevron-down.svg" />
          <div>****1866</div>
        </div>

        <div className={styles.heuristic3SelectorGroup}>
          $1345.27
        </div>
      </div></BoneTooltip>
  )
}

export function AccountTransferDropdownTwo() {
  return (
    <BoneTooltip title="Account Selector Dropdown">

      <div className={styles.heuristic3AccountSelector}>
        <div className={styles.heuristic3SelectorGroup}>
          <img src="/icons/chevron-down.svg" />
          <div>****9435</div>
        </div>

        <div className={styles.heuristic3SelectorGroup}>
          $12,857.62
        </div>
      </div></BoneTooltip>
  )
}

export function AmountSubheader() {
  return (
    <BoneTooltip title="Amount Selector Subheader">

      <div className={styles.heuristicFourSubHeader}>
        Transfer Amount
      </div></BoneTooltip>
  )
}

export function AmountInputBox() {
  return (
    <BoneTooltip title="Amount Input Box">

      <div className={styles.heuristic3InputBox}>
        $
      </div></BoneTooltip>
  )
}

export function CancelButton() {
  return (
    <BoneTooltip title="Cancel Button">

      <div className={styles.heuristic3Button}>
        <img src="/icons/x.svg" />
        Cancel
      </div></BoneTooltip>
  )
}

export function TransferButton() {
  return (
    <BoneTooltip title="Transfer Button">

      <div className={styles.heuristic3Button}>
        <img src="/icons/send.svg" />
        Transfer
      </div>
    </BoneTooltip>
  )
}