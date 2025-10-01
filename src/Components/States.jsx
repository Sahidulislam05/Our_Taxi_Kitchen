import { CookingPot, Heater, ScrollText } from "lucide-react";

const States = ({ orders, cookingTotal, readyItems }) => {
  return (
    <div className="w-11/12 mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <ScrollText className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Orders
            <h2 className="text-6xl font-bold">{orders}</h2>
          </div>
        </div>
      </div>

      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CookingPot className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Current Cooking
            <h2 className="text-6xl font-bold">{cookingTotal}</h2>
          </div>
        </div>
      </div>

      <div className="border-4 border-dotted rounded-2xl border-amber-400 p-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Heater className="animate-pulse" color="#fcb700" size={100} />
          <div className="text-xl text-center">
            Order Ready
            <h2 className="text-6xl font-bold">{readyItems}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default States;
