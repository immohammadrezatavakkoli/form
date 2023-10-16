import { useEffect } from "react";
import { useRouter } from "next/router";
import  Spinner  from "../components/modules/Spinner";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      await router.push("/register");

      // fetch all users

      // const response = await fetch("/api");
      // const data = await response.json();
      // console.log(data);

      // fetch a user by userId

      // const userId = "652d91c585cbaf40b35c3dc0";
      // const response = await fetch(`/api/${userId}`);
      // const data = await response.json();
      // console.log(data);
    }
    fetchData();
  }, []);

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#ffffff]">
      <Spinner />
    </div>
  )
};

export default Home;
