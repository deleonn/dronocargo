import React, { useState } from "react";
import { Form, Modal } from "antd";

import { ActionBar, DeliveryList } from "./components";
import { useDelivery } from "../../hooks";
import AddDeliveryFormGroup from "./components/Form/AddDeliveryFormGroup";
import { Delivery } from "../../utils/types";

const DeliveryListPage: React.FC = () => {
  const [isDeliveryModalVisible, setIsDeliveryModalVisible] = useState(false);
  const { deliveryList, createDelivery } = useDelivery();

  const [form] = Form.useForm();

  const handleFormSubmit = (values: {
    drone: Delivery["drone"];
    orderId: Delivery["orderId"];
    platform: Delivery["platform"];
    technician: Delivery["technician"]["name"];
  }) => {
    createDelivery({
      ...values,
      technician: { name: values.technician },
      status: "Pending",
      technicalCheck: "Passed",
    });

    handleCancel();
  };

  const handleOk = async () => {
    const isValid = await form.validateFields();

    if (isValid) {
      handleFormSubmit(form.getFieldsValue());
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setIsDeliveryModalVisible(false);
  };

  return (
    <>
      <ActionBar onAddDelivery={() => setIsDeliveryModalVisible(true)} />
      <DeliveryList list={deliveryList} />

      <Modal
        title={<span className="text-2xl">New delivery</span>}
        visible={isDeliveryModalVisible}
        onOk={handleOk}
        okButtonProps={{ className: "bg-primary" }}
        okText="Create new delivery"
        bodyStyle={{ padding: "0 24px 24px " }}
        onCancel={handleCancel}
      >
        <Form form={form} onFinish={handleFormSubmit} layout="vertical">
          <AddDeliveryFormGroup />
        </Form>
      </Modal>
    </>
  );
};

export default DeliveryListPage;
