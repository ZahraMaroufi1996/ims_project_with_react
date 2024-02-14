import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Default = () => {
  const history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history("/dashboard/topology");
    } else {
      history("/login");
    }
  }, []);
  return <> Hiiiiiiiiiiiiiiiii </>;
};

export default Default;
