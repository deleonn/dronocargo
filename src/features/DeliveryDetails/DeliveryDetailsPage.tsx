import { Button } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";

const DeliveryDetailsPage: React.FC = () => {
  const params = useParams<{ id: string }>();

  return (
    <div>
      <p>Order ID: {params.id}</p>
      <Link to="/">
        <Button>Go Back</Button>
      </Link>
    </div>
  );
};

export default DeliveryDetailsPage;
