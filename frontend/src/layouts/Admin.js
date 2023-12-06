import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import TablesHelp from "views/admin/TablesHelp";
import TablesDonation from "views/admin/TablesDonation";
import notFound from "views/notFound.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/TablesDonation" exact component={TablesDonation} />
            <Route path="/admin/TablesHelp" exact component={TablesHelp} />
            <Route path="/notFound" exact component={notFound} />

            <Redirect from="/admin" to="/notFound" />
            
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
