import React from "react";
import { Button, Dropdown, Menu, Table } from "antd";

import { Delivery } from "../../../../utils/types";
import { DownOutlined } from "@ant-design/icons";
import { ViewSidebarIcon } from "../../../../UI/icons";
import { Link } from "react-router-dom";

const menu = (
  <Menu
    items={[
      { key: "1", label: "Edit" },
      { key: "2", label: "Delete" },
    ]}
  />
);

interface DeliveryListProps {
  list: Delivery[];
}

const DeliveryList: React.FC<DeliveryListProps> = ({ list }) => {
  const columns = [
    {
      key: "status",
      dataIndex: "status",
      render: (_: any, record: Delivery) => (
        <div>
          <span className="text-xs opacity-50">Status</span>
          <p className="font-semibold">{record.status}</p>
        </div>
      ),
    },
    {
      key: "orderId",
      dataIndex: "orderId",
      render: (_: any, record: Delivery) => (
        <div>
          <span className="text-xs opacity-50">Order ID</span>
          <p>{record.orderId}</p>
        </div>
      ),
    },
    {
      key: "technician",
      dataIndex: "technician",
      render: (_: any, record: Delivery) => (
        <div>
          <span className="text-xs opacity-50">Technician</span>
          <p>{record.technician.name}</p>
        </div>
      ),
    },
    {
      key: "platform",
      dataIndex: "platform",
      render: (_: any, record: Delivery) => (
        <div>
          <span className="text-xs opacity-50">Platform</span>
          <p>{record.platform}</p>
        </div>
      ),
    },
    {
      key: "drone",
      dataIndex: "drone",
      render: (_: any, record: Delivery) => (
        <div>
          <span className="text-xs opacity-50">Drone</span>
          <p>{record.drone}</p>
        </div>
      ),
    },
    {
      key: "technicalCheck",
      dataIndex: "technicalCheck",
      render: (_: any, record: Delivery) => (
        <div>
          <span className="text-xs opacity-50">Technical check</span>
          <p>{record.technicalCheck}</p>
        </div>
      ),
    },
    {
      key: "actions",
      dataIndex: "actions",
      align: "right" as any,
      width: "250px",
      render: (_: any, record: Delivery) => (
        <div className="flex justify-end">
          <Link to={`/shipment/${record.orderId}`}>
            <Button className="mx-1 rounded flex items-center justify-center">
              Details{" "}
              <ViewSidebarIcon style={{ fontSize: "16px", opacity: 0.75 }} />
            </Button>
          </Link>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button className="mx-1 rounded flex items-center justify-center">
              Actions <DownOutlined className="opacity-25" />
            </Button>
          </Dropdown>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-4">
      <Table
        columns={columns}
        dataSource={list}
        pagination={false}
        showHeader={false}
        rowKey="orderId"
      />
    </div>
  );
};

export default DeliveryList;
