import {Form, Input} from 'antd';

const TextInput = ({name, message, placeholder}) => {
  return (
    <Form.Item
    name={name}
    rules={[
      {
        required: true,
        message: {message},
      },
      {
        pattern: /^[a-z-A-Z]+$/,
        message: 'Please use the allowed characters ( A Z a z ) .',
      },
    ]}
    >
      <Input
      placeholder={placeholder}
      />
    </Form.Item>
  );
}

export default TextInput;