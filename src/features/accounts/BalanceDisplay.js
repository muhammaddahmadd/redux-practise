import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const account = useSelector((store) => store.account);
  const { balance, loan } = account;
  return (
    <div className="balance">
      {formatCurrency(balance)}
      {/* <span>{loan}</span> */}
    </div>
  );
}

export default BalanceDisplay;
