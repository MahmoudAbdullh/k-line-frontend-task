import { Form, Input, Button, Checkbox, Select, Row } from "antd";
import { useState } from "react";
import TermsModal from "./TermsModal";
const { Option } = Select;

const plainOptions = ["I am a Doctor", "I am a Patient"];

const LoginForm = () => {
  const [openTermsConditions, setOpenTermsConditions] = useState(false);

  const handleTermsClick = () => {
    setOpenTermsConditions(true);
  };
  const handleTermsClose = () => {
    setOpenTermsConditions(false);
  };
  const onFinish = () => {
    //submit form
  };

  return (
    <>
      <div className="form-wrapper">
        <TermsModal
          visible={openTermsConditions}
          handleCancel={handleTermsClose}
        />
        <Checkbox.Group options={plainOptions} defaultValue={["Apple"]} />

        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Field is required" }]}
          >
            <Input placeholder="First Name*" />
          </Form.Item>
          <Form.Item
            name="lastName"
            rules={[{ required: true, message: "Field is required" }]}
          >
            <Input placeholder="Last Name*" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Field is required!" },
              { type: "email", message: "invalid Email!" },
            ]}
          >
            <Input placeholder="Email*" />
          </Form.Item>
          <Form.Item
            name="number"
            rules={[{ type: "number", message: "invalid!" }]}
          >
            <Input placeholder="Mobile*" />
          </Form.Item>
          <Form.Item name="Gender" rules={[{ required: true }]}>
            <Select placeholder="gender*" allowClear>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>

          <Form.Item name="country" rules={[{ required: true }]}>
            <Select placeholder="country*" allowClear>
              <Option value="country">country</Option>
              <Option value="country">country 2</Option>
            </Select>
          </Form.Item>
          <Form.Item name="city" rules={[]}>
            <Input placeholder="City*" />
          </Form.Item>
          <Form.Item
            name="postal code"
            rules={[
              { type: "number" },
              { max: 5, message: "Invalid postal code" },
            ]}
          >
            <Input placeholder="Postal Code*" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Field is required" }]}
          >
            <Input.Password placeholder="Password*" />
          </Form.Item>
          <Form.Item
            name="Confirm Password"
            rules={[{ required: true, message: "Field is required" }]}
          >
            <Input.Password placeholder="Confirm Password*" />
          </Form.Item>

          <Row style={{ justifyContent: "space-between" }}>
            <Form.Item>
              <Button type="danger">Back to Signin</Button>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Button type="link" onClick={handleTermsClick}>
              Terms & conditions
            </Button>
          </Row>
        </Form>
      </div>
    </>
  );
};

export default LoginForm;
