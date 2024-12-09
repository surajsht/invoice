import Navbar from "./components/navbar/Navbar";
import "./app.css";
import TopContainer from "./components/top-container/TopContainer";
import NewInvoice from "./components/new-invoice/NewInvoice";

const App = () => {
  return (
    <>
      <Navbar />
      <TopContainer />
      <NewInvoice />
    </>
  );
};

export default App;
