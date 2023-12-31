import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Harchi = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard/topology");
    } else {
      navigate("/login");
    }
  }, []);
  return <></>;
};

export { Harchi };
