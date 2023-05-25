import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import "./style.css";
import { Button, DatePicker, Form } from "antd";
import Input from "antd/es/input/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

export default function Register() {
  const navigate = useNavigate();

  const onFinish = (fieldsValue) => {
  
    axios
      .post("http://localhost:3000/api/users/register", fieldsValue.user)
      .then((result) => {
        if (result) {
          console.log("Received values of form: ", fieldsValue);
          navigate("/");
        }
        console.log(result);
      });
  };
  return (
    <div className="formContainer">
      <h2>Registration Form</h2>
      <Form
        name="time_related_controls"
        {...formItemLayout}
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        {/* first name */}
        <Form.Item
          name={["user", "fname"]}
          label="First Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* last name */}
        <Form.Item
          name={["user", "lname"]}
          label="Last Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* Email */}
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email",
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* password */}

        <Form.Item
          name={["user", "password"]}
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
