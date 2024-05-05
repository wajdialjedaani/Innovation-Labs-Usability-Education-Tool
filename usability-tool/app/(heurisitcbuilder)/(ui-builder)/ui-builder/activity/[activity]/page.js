"use client";
import { redirect } from "next/navigation";
import UIBuilder from "@/components/ui-builder/UIBuilder";
import { getAuthContext } from "@/app/(heurisitcbuilder)/(main)/components/AuthContextProvider";
export default function UIBuilderActivity({ params }) {
  const {
    metaDataSuite: {
      metaData: { completedHeuristics },
    },
  } = getAuthContext();
  const UIBuilderID = Number(params.activity);
  if (!UIBuilderID || UIBuilderID < 0) redirect("1");
  else if (UIBuilderID > 10) redirect("10");

  const currHeuristicMetaData = completedHeuristics[UIBuilderID - 1];
  //redirect them if they haven't done the quiz yet.
  if (currHeuristicMetaData < 2) {
    redirect(`/quiz/${UIBuilderID}`);
  }

  //🤔
  let scenario;
  switch (UIBuilderID) {
    case 1:
      scenario = require("/lib/UIBuilder/scenario-test.json");
      break;
    case 2:
      scenario = require("/lib/UIBuilder/scenario-MatchBetweenSystemandtheRealWorld.json");
      break;
    case 3:
      scenario = require("/lib/UIBuilder/scenario-UserControlandFreedom.json");
      break;
    case 4:
      scenario = require("/lib/UIBuilder/scenario-ConsistencyAndStandards.json");
      break;
    case 5:
      scenario = require("/lib/UIBuilder/scenario-ErrorPrevention.json");
      break;
    case 6:
      scenario = require("/lib/UIBuilder/scenario-RecognitionRatherThanRecall.json");
      break;
    case 7:
      scenario = require("/lib/UIBuilder/scenario-FlexibilityAndEfficiencyOfUse.json");
      break;
    case 8:
      scenario = require("/lib/UIBuilder/scenario-AestheticAndMinimalDesign.json");
      break;
    case 9:
      scenario = require("/lib/UIBuilder/scenario-ErrorRecognition.json");
      break;
    case 10:
      scenario = require("/lib/UIBuilder/scenario-HelpAndDocumentation.json");
      break;
    default:
      scenario = require("/lib/UIBuilder/scenario-test.json");
      break;
  }

  return (
    <UIBuilder
      scenario={scenario}
      widgetData={scenario.widgetData}
      heuristic={UIBuilderID}
    />
  );
}