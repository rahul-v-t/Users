import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Space,Switch,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { UserState } from "./model";


function onChange(checked,date, dateString) {
  console.log(`switch to ${checked}`);
  console.log(date, dateString);
}
const DrawerForm = () => {
  const { data, visible, setVisible } = useContext(UserState);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        New account
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Submit
            </Button>
          </Space>
        }
      >
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter First Name" }]}
              >
                <Input placeholder="Please enter First Name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="Last Name"
                label="lastName"
                rules={[{ required: true, message: "Please enter Last Name" }]}
              >
                <Input placeholder="Please enter Last Name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="MobileNo"
                label="mobile"
                rules={[{ required: true, message: "Please enter Mobile No" }]}
              >
                <Input placeholder="Please enter Mobile NO" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Switch defaultChecked onChange={onChange} />
        <br/><br/>
        Choose Your Date of Birth
        <br/><br/>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
      </Drawer>
    </div>
  );
};

export default DrawerForm;