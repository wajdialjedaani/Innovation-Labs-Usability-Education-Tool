import { HeuristicThreeStaticBody, HeuristicThreeStaticTopBar } from "@/components/ui-builder/bones/Heuristic3"
import { LogOutEverywhereWarning, DeleteAccountWarning, LogOutEverywhereButton, DeleteAccountButton, ChangeUsernameButton, ChangePasswordButton, NewPasswordInputHeader, ConfirmNewPasswordInputHeader, CurrentPasswordInputHeader, SecuritySubHeader, PasswordSubHeader, InputBox, AccountSettingsHeader, UsernameSubHeader } from "@/components/ui-builder/bones/Heuristic4"

export default function Staging(){
  return (
    <div>
      <HeuristicThreeStaticTopBar />
      <HeuristicThreeStaticBody />


      <AccountSettingsHeader />
      <InputBox />
      <UsernameSubHeader />
      <PasswordSubHeader />
      <SecuritySubHeader />
      <CurrentPasswordInputHeader />
      <ConfirmNewPasswordInputHeader />
      <NewPasswordInputHeader />
      <ChangePasswordButton />
      <ChangeUsernameButton />
      <DeleteAccountButton />
      <LogOutEverywhereButton />
      <DeleteAccountWarning />
      <LogOutEverywhereWarning />
    </div>
  )
}