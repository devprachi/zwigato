import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

/*
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *   - RestaurantCard
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 *
 */

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      {/* Footer */}
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout />);
