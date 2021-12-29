import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,Image,
  Space,Switch,Menu, Dropdown,message, Tooltip,
} from "antd";
import { PlusOutlined,DownOutlined, UserOutlined } from "@ant-design/icons";
import { useContext } from "react";
import { UserState } from "./model";

function ImageDemo() {
  return (
    <Image
      width={200}
      src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
    />
  );
}

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      CSE
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      ECE
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      EEE
    </Menu.Item>
  </Menu>
);

function onChange(checked,date, dateString) {
  console.log(`switch to ${checked}`);
  console.log(date, dateString);
}
function handleSubmit(e) {
  const firstname=e.target.name.value;
  console.log(firstname);
  
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
      >
        <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter First Name" }]}
              >
                <Input value={Input}  placeholder="Please enter First Name" />
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
          Select Tags &nbsp;
        <Switch defaultChecked onChange={onChange} />
        <br/><br/>
        Choose Your Date of Birth
        <br/><br/>
        <Space direction="vertical">
            <DatePicker onChange={onChange} />

            <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                Select Department
            </Dropdown.Button>

        </Space>
        <br /><br/>
        <ImageDemo />
        <br/><br />
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={handleSubmit} type="primary">
              Submit
            </Button>
          </Space>
        </Form>
      </Drawer>
    </div>
  );
};

export default DrawerForm;