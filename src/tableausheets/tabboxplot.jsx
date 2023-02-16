import React from "react";
import { TableauReport } from "tableau-react";

function MyComponent() {
  const url =
    "https://public.tableau.com/app/profile/krish.panchal/viz/Book1_16763301033320/Sheet1?publish=yes";
  const options = {
    width: "100%",
    height: "500px",
    hideTabs: true,
    hideToolbar: true,
  };
  const filters = [
    {
      fieldName: "Region",
      values: ["Asia", "Europe"],
    },
  ];
  const parameters = {
    Parameter1: "Value1",
    Parameter2: "Value2",
  };
  const handleTabSwitch = (tabName) => {
    console.log(`Switched to tab "${tabName}"`);
  };
  const handleLoad = (viz) => {
    console.log("Viz loaded:", viz);
  };

  return (
    <TableauReport
      url={url}
      options={options}
      filters={filters}
      parameters={parameters}
      onTabSwitch={handleTabSwitch}
      onLoad={handleLoad}
    />
  );
}

export default MyComponent;
