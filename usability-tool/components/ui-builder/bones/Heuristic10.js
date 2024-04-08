import styles from "@/styles/UIBones.module.scss";
import BoneTooltip from "../BoneTooltip";

export function OrderSummaryHeader() {
  return (
    <div className={styles.heuristic10OrderSummaryHeader}>
      <div>Order Summary</div>
      <div><img src="/icons/help-circle.svg" /></div>
    </div>
  )
}

export function ShiptoSubheader() {
  return (
    <div className={styles.heuristic10SectionSubheader}>
      Ship to:
    </div>
  )
}

export function BillToSubheader() {
  return (
    <div className={styles.heuristic10SectionSubheader}>
      Bill to:
    </div>
  )
}

export function BillingInfo() {
  return (
    <div className={styles.heuristic10BillingInfo}>
      John Doe<br />
      6851 Stephanie Isle<br />
      West Adela, NE 34928-2903
      <div className={styles.heuristic10BillingInfoCard}>
        <img src="/UIBuilder/mastercard.gif" />
        Mastercard ending in 3456
      </div>
    </div>
  )
}

export function ShippingAddress() {
  return (
    <div className={styles.heuristic10BillingInfo}>
      John Doe<br />
      6851 Stephanie Isle<br />
      West Adela, NE 34928-2903
    </div>
  )
}

export function ShippingEstimate() {
  return (
    <div style={{ fontSize: "20px", backgroundColor: "white", width: "fit-content" }}>
      Arrives in 5-10 business days.
    </div>
  )
}

export function OrderSummary() {
  return (
    <div className={styles.heuristic10OrderSummary}>
      <div className={styles.orderItems}>
        <div className={styles.orderItem}>
          <div className={styles.picBox}>
            <div className={styles.picHolder}>
              <img src="/UIBuilder/heuristic6/thechicken.jpg" />
            </div>
            <div>The Chicken Hat</div>
          </div>
          <div className={styles.moneyTitle}>
            <div>24.99</div>
          </div>
        </div>
        <div className={styles.orderItem}>
          <div className={styles.picBox}>
            <div className={styles.picHolder}>
              <img src="/UIBuilder/heuristic6/theredditor.png" />
            </div>
            <div>The Moderator</div>
          </div>
          <div className={styles.moneyTitle}>
            <div>45.99</div>
          </div>
        </div>
        <div className={styles.orderItem}>
          <div className={styles.picBox}>
            <div className={styles.picHolder}>
              <img src="/UIBuilder/heuristic6/thenewbie.jpg" />
            </div>
            <div>The New Hire</div>
          </div>
          <div className={styles.moneyTitle}>

            <div>5.99</div>
          </div>
        </div>
      </div>

      <div className={styles.moneySummary}>
        <div className={styles.moneySummaryRow}>
          <div className={styles.moneySummaryTitle}>Subtotal</div>
          <div>76.97</div>
        </div>
        <div className={styles.moneySummaryRow}>
          <div className={styles.moneySummaryTitle}>Tax&nbsp;&nbsp;</div>
          <div>6.35</div>
        </div>
        <div className={styles.moneySummaryRow}>
          <div className={styles.moneySummaryTitle}>Shipping</div>
          <div>12.99</div>
        </div>
        <div className={styles.moneySummaryRow}>
          <div className={styles.moneySummaryTitle}>Total</div>
          <div>96.31</div>
        </div>
      </div>
    </div>
  )
}

export function ChatBox() {
  return (
    <div className={styles.chatbox}>
      <img src="/icons/message-square.svg" />
      <div>Chat</div>
    </div>
  )
}

export function FeedbackRequest() {
  return (
    <div className={styles.feedbackRequestBox}>
      <div>We value your feedback! Please rate your shopping experience:</div>
      <div className={styles.starBox}>
        <img src="/icons/star.svg" />
        <img src="/icons/star.svg" />
        <img src="/icons/star.svg" />
        <img src="/icons/star.svg" />
        <img src="/icons/star.svg" />
      </div>
    </div>
  )
}