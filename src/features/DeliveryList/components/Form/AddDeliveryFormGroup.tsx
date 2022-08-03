import React from "react";
import { Form, Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { requiredRule } from "../../../../utils/validators";

const AddDeliveryFormGroup: React.FC = () => {
  return (
    <>
      <div>
        <p>Please select the order ID and a technician to deploy the cargo.</p>
        <p>All elements are mandatory.</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <Form.Item
          label={<span className="opacity-50">Order ID</span>}
          name="orderId"
          rules={[requiredRule]}
        >
          <Input className="rounded" />
        </Form.Item>
        <Form.Item
          label={<span className="opacity-50">Technician</span>}
          name="technician"
          rules={[requiredRule]}
        >
          <Input
            className="rounded"
            prefix={<SearchOutlined className="opacity-25" />}
          />
        </Form.Item>
        <Form.Item
          label={<span className="opacity-50">Platform</span>}
          name="platform"
          rules={[requiredRule]}
        >
          <Select className="rounded">
            {["Tetha", "Gamma", "Beta", "Alpha"].map((el) => (
              <Select.Option value={el}>{el}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label={<span className="opacity-50">Drone</span>}
          name="drone"
          rules={[requiredRule]}
        >
          <Select className="rounded">
            {["DJI-004Q"].map((el) => (
              <Select.Option value={el}>{el}</Select.Option>
            ))}
          </Select>
        </Form.Item>
      </div>
    </>
  );
};

export default AddDeliveryFormGroup;
