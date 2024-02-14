import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h4>گشتم نبود نگرد نیست</h4>
      <Link to="/">صفحه‌ی اصلی</Link>
    </div>
  );
};

export default NotFound;
