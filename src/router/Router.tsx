import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DeliveryDetailsPage, DeliveryListPage } from "../features";

type Route = {
  path: string;
  element: React.ReactNode;
  index?: boolean;
};

const routes: Route[] = [
  {
    path: "/",
    element: <DeliveryListPage />,
    index: true,
  },
  {
    path: "/shipment/:id",
    element: <DeliveryDetailsPage />,
    index: true,
  },
];

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((props) => (
          <Route {...props} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
