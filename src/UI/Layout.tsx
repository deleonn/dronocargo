import React from "react";

import { Header, Footer } from ".";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header username="Joel de Leon" />
      <div className="px-9 py-6 min-h-[calc(100vh-144px)]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
