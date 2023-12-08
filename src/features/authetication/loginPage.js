import { useDispatch, useSelector } from "react-redux";

function loginPage() {
  useSelector();
  useDispatch();
  return (
    <div>
      <p>
        Email:
        <input type="email" />
      </p>
      <p>
        Password
        <input type="password" />
      </p>
    </div>
  );
}

export default loginPage;
