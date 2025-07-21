import { useState } from "react";

import AirtimeForm from "./AirtimeForm";
import DataForm from "./DataForm";
import CableForm from "./CableForm";
import ElectricityForm from "./ElectricityForm";

export default function QuickRecharge() {
  const isRegistered = true;

  return <div>{isRegistered && <Tab />}</div>;
}

export function Tab() {
  const [activeTab, setActiveTab] = useState("AirtimeForm");

  const renderTab = () => {
    switch (activeTab) {
      case "AirtimeForm":
        return <AirtimeForm />;
      case "CableForm":
        return <CableForm />;
      case "DataForm":
        return <DataForm />;
      case "ElectricityForm":
        return <ElectricityForm />;
      default:
        return <AirtimeForm />;
    }
  };

  return (
    <>
      <div className="flex justify-center gap-4 bg-blue-50">
        <button onClick={() => setActiveTab("AirtimeForm")}>Buy Airtime</button>
        <button onClick={() => setActiveTab("CableForm")}>
          Cable Subscription
        </button>
        <button onClick={() => setActiveTab("DataForm")}>Buy Data</button>
        <button onClick={() => setActiveTab("ElectricityForm")}>
          Buy Electricity
        </button>
      </div>
      <div>{renderTab()}</div>
    </>
  );
}
