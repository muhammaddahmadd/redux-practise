import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer);
  const { fullName, id } = customer;
  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
