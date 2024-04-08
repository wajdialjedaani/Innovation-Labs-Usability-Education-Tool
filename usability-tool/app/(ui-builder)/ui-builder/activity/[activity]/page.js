"use client";
import { redirect } from "next/navigation";
import UIBuilder from "@/components/ui-builder/UIBuilder";
import { getAuthContext } from "@/app/(main)/components/AuthContextProvider";
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
    case 4:
      scenario = require("/lib/UIBuilder/scenario-ConsistencyAndStandards.json");
      break;
    case 5:
      scenario = require("/lib/UIBuilder/scenario-idk.json");
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
