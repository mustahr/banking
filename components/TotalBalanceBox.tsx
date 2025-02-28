import AnimatedCounter from "@/components/AnimatedCounter";
import DoughnutCart from "./DoughnutCart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance w-full">
      <div className="total-balance-chart">
        <DoughnutCart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="header-2 ">Bank Accounts: {totalBanks}</h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">total current balance </p>
          <div className="total-balance-amount flex items-center gap-2">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
