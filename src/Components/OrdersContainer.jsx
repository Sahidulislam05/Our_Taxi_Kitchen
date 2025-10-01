import { use, useState } from "react";
import States from "./States";
import OrderCard from "./Card/OrderCard";
import CookingCard from "./Card/CookingCard";
import { toast, ToastContainer } from "react-toastify";
import ReadyCard from "./Card/ReadyCard";

const OrdersContainer = ({ ordersPromise }) => {
  const data = use(ordersPromise);
  //   console.log(orders);
  const [orders, setOrders] = useState(data);

  const [cookingItem, setCookingItem] = useState([]);

  const [readyItems, setReadyItems] = useState([]);

  const handleOrder = (order) => {
    const isExist = cookingItem.find((item) => item.id === order.id);
    // console.log(isExist);
    if (isExist) {
      toast.error("Already Cooking! Try again later.");
      return;
    }
    // console.log(order);
    const newCookingItem = [...cookingItem, order];
    setCookingItem(newCookingItem);
  };

  const handleCooking = (order) => {
    order.cookedAt = new Date().toLocaleTimeString();
    const newCookingOrder = [...readyItems, order];
    setReadyItems(newCookingOrder);
    // Remove Item from Cooking Item
    const remaining = cookingItem.filter((item) => item.id !== order.id);
    setCookingItem(remaining);

    const remainingOrders = orders.filter((item) => item.id !== order.id);
    setOrders(remainingOrders);
  };
  return (
    <div>
      <States
        cookingTotal={cookingItem.length}
        readyItems={readyItems.length}
        orders={orders.length}
      ></States>
      <section className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-12 gap-7">
        <div className="md:col-span-7">
          <h2 className="text-4xl font-bold"> Current Orders </h2>
          <div className="space-y-5">
            {orders.map((item) => (
              <OrderCard
                handleOrder={handleOrder}
                order={item}
                key={item.id}
              ></OrderCard>
            ))}
          </div>
        </div>
        <div className="md:col-span-5 space-y-5">
          <h2 className="text-4xl font-bold"> Cooking Now </h2>
          <div className="shadow p-10 space-y-4">
            {cookingItem.map((order) => (
              <CookingCard
                key={order.id}
                order={order}
                handleCooking={handleCooking}
              ></CookingCard>
            ))}
          </div>
          <h2 className="text-4xl font-bold"> Order Ready </h2>
          <div className="shadow p-10 space-y-4">
            {readyItems.map((order) => (
              <ReadyCard key={order.id} order={order}></ReadyCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrdersContainer;
