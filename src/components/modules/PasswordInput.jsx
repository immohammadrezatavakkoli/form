import {Form, Input} from 'antd';

const PasswordInput = ({name, message, placeholder}) => {
  return (
    <Form.Item
    name= {name}
    rules={[
      {
        required: true,
        message: {message},
      },
      {
        pattern: /^[a-z-A-Z-0-9]+$/,
        message: 'Please use the allowed characters ( A Z a z 0 9 ) .',
      },
    ]}
    hasFeedback
    >
      <Input.Password
      placeholder={placeholder}
      />
    </Form.Item>
  );
}

export default PasswordInput;