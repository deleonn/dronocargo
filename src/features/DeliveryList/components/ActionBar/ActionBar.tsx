import React from "react";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

interface ActionBarProps {
  onAddDelivery: () => void;
}

const ActionBar: React.FC<ActionBarProps> = ({ onAddDelivery }) => {
  return (
    <div className="flex justify-between">
      <div>
        <span className="text-3xl font-light">Delivery</span>
        <span className="text-3xl font-light opacity-50 ml-4">History</span>
      </div>
      <div className="flex gap-4">
        <Input
          className="rounded"
          placeholder="Search"
          prefix={<SearchOutlined className="opacity-25" />}
        />
        <Button
          type="primary"
          className="rounded py-2 px-4 h-fit bg-primary"
          onClick={onAddDelivery}
        >
          New delivery
        </Button>
      </div>
    </div>
  );
};

export default ActionBar;
