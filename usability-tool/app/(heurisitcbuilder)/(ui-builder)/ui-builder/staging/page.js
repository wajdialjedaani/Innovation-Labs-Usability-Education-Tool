import { FeedbackRequest, ChatBox, OrderSummary, ShiptoSubheader, OrderSummaryHeader, BillToSubheader, BillingInfo, ShippingAddress, ShippingEstimate } from "@/components/ui-builder/bones/Heuristic10";
import { DocumentCanvas, TextDecorationModule, FontSizeModule, FontModule, UndoRedoModule, FormatBar, SaveButton, TitleBar, TitleBarGreeting, DocumentTitle, ListModule, AttachmentModule } from "@/components/ui-builder/bones/Heuristic8";
import { MissingPageErrorReporting, AlertIcon, ErrorLabel, InbodySearchBar } from "@/components/ui-builder/bones/Heuristic9";

export default function Staging() {
  return (
    <div>
      <OrderSummaryHeader />
      <ShiptoSubheader />
      <BillToSubheader />
      <BillingInfo />
      <ShippingAddress />
      <ShippingEstimate />
      <OrderSummary />
      <ChatBox />
      <FeedbackRequest />
    </div>
  )
}