import Head from "next/head";
import { Form } from "antd";
import TextField from "../../components/modules/TextField";
import PasswordInput from "../../components/modules/PasswordInput";
import sendDataToServer from "../../utils/sendDataToServer";

const Register = () => {

  const onFinish = async (values) => {
    try {
      const response = await sendDataToServer(values);
      // console.log(response.message);
      alert(response.message)
    } catch (error) {
      console.error(error);
    }
  };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  return (
    <>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <Form
        className="h-screen w-full flex flex-col justify-center items-center gap-0 bg-[#f6fff3]"
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h1 className="text-2xl italic font-thin p-5">Create New Account</h1>
        <div className="w-3/12 h-auto">
          <TextField
            name="First Name"
            message="Please enter your First Name ."
            placeholder="First Name"
          />
        </div>
        <div className="w-3/12 h-auto">
          <TextField
            name="Last Name"
            message="Please enter your Last Name ."
            placeholder="Last Name"
          />
        </div>
        <div className="w-3/12 h-auto">
          <PasswordInput
            name="Password"
            message="Please enter your Password ."
            placeholder="Password"
          />
        </div>
        <div className="w-3/12 flex flex-row justify-center items-center pt-5">
          <button className="italic font-thin text-base bg-[#c9f6ba] rounded-md px-5 py-2">
            Create Account
          </button>
        </div>
      </Form>
    </>
  );
};

export default Register;