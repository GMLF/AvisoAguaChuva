import React from "react";

// components

import CardTable from "components/Cards/CardTable.js";
import CardTableDonation from "components/Cards/CardTableDonation";


export default function TablesDonation() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardTableDonation />
        </div>
      </div>
    </>
  );
}
