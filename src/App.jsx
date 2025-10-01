import { Suspense } from "react";
import "./App.css";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";
import OrdersContainer from "./Components/OrdersContainer";
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer";

const loadOrders = () => fetch("/orders.json").then((res) => res.json());

function App() {
  const ordersPromise = loadOrders();
  return (
    <>
      <header className="w-11/12 mx-auto py-3">
        <Navbar></Navbar>
      </header>
      <section className="mt-5 md:mt-0">
        <Heading> Our Kitchen Room </Heading>
      </section>
      <section>
        <Suspense
          fallback={<span className="loading loading-bars loading-xl"></span>}
        >
          <OrdersContainer ordersPromise={ordersPromise}></OrdersContainer>
        </Suspense>
      </section>
      <section>
        <Footer></Footer>
      </section>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
