import { useState } from "react";

import { Delivery } from "../utils/types";

export const useDelivery = () => {
  const currentDeliveriesInStorage = JSON.parse(
    localStorage.getItem("deliveries") as string
  );
  const [deliveryList, setDeliveryList] = useState<Delivery[]>(
    currentDeliveriesInStorage || []
  );

  function createDelivery(delivery: Delivery) {
    const deliveries = [...deliveryList, delivery];
    setDeliveryList(deliveries);
    localStorage.setItem("deliveries", JSON.stringify(deliveries));
  }

  return {
    deliveryList,
    createDelivery,
  };
};
