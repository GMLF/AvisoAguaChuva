import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import Navbar from "components/Navbars/Heading.js";
import FooterSmall from "components/Footers/FooterSmall.js";

// views

import Donation from "views/pages/donation.js";

export default function Pages() {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          ></div>
          <Switch>
            <Route path="/pages/donation" exact component={Donation} />
            <Redirect from="/pages" to="/pages/donation" />
          </Switch>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
