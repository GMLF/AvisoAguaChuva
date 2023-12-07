import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/Heading.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Donation from "views/pages/donation.js";
import Help from "views/pages/help.js";
import Notification from "views/pages/notification.js";

export default function Pages() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-lightBlue-200 bg-no-repeat bg-full"
          ></div>
          <Switch>
            <Route path="/pages/donation" exact component={Donation} />
            <Route path="/pages/help" exact component={Help} />
            <Route path="/pages/notification" exact component={Notification} />
            <Redirect from="/pages" to="/pages/donation" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
