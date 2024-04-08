import UIBuilder from "@/components/ui-builder/UIBuilder";

const scenario = require("/lib/UIBuilder/scenario-FlexibilityAndEfficiencyOfUse.json");

export default function UIBuilderPage() {
  return (
    <UIBuilder
      scenario={scenario}
      widgetData={scenario.widgetData}
      heuristic={7}
    />
  );
}
