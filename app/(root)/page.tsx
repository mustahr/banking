import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import Loader from "@/components/ui/Loader";

const Home = () => {
  const LoggedIn = {
    firstName: "Musta",
    lastName: "hr",
    email: "musrahr2000@gmail.com",
  };
  return (
    <section className="home">
      <Loader />
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={LoggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={40090.45}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar
        user={LoggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123450 }, { currentBalance: 43562 }]}
      />
    </section>
  );
};
export default Home;
