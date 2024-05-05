import UIBuilder from "@/components/ui-builder/UIBuilder";

const scenario = require("/lib/UIBuilder/scenario-developermode.json");

const widgetData = {
  drawer: [
    {
      "id": "OrderSummaryHeader",
      "bone": "OrderSummaryHeader",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "ShiptoSubheader",
      "bone": "ShiptoSubheader",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "BillToSubheader",
      "bone": "BillToSubheader",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "BillingInfo",
      "bone": "BillingInfo",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "ShippingAddress",
      "bone": "ShippingAddress",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "ShippingEstimate",
      "bone": "ShippingEstimate",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "OrderSummary",
      "bone": "OrderSummary",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "ChatBox",
      "bone": "ChatBox",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "FeedbackRequest",
      "bone": "FeedbackRequest",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "AtomicLogo",
      "bone": "AtomicLogo",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "HeuristicThreeStaticTopBar",
      "bone": "HeuristicThreeStaticTopBar",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "HeuristicThreeStaticBody",
      "bone": "HeuristicThreeStaticBody",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "HatsDropdown",
      "bone": "HatsDropdown",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "SuitsDropdown",
      "bone": "SuitsDropdown",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "ShoesDropdown",
      "bone": "ShoesDropdown",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "CartButton",
      "bone": "CartButton",
      "zIndex": 150,
      "style": {}
    },
    {
      "id": "SearchBar",
      "bone": "SearchBar",
      "zIndex": 150,
      "style": {}
    }
  ],
  grid: []
};


export default function UIBuilderPage() {
  return (
    <UIBuilder scenario={scenario} widgetData={widgetData} />
  )
}