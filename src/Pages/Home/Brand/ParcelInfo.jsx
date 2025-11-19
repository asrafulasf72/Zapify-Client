import React from "react";
import livetarck from "../../../assets/live-tracking.png";
import safeDelivery from "../../../assets/safe-delivery.png";

const ParcelInfo = () => {
  return (
    <div className="my-10">
      <div className="border-2 border-dotted border-gray-300"></div>

      <div className="my-10">
        <div className="flex gap-5 items-center my-4 p-5 bg-base-300 rounded-2xl">
          <div>
            <img src={livetarck} alt="" />
          </div>
          <div className="divider divide-dotted divider-horizontal divider-start "></div>
          <div className="flex-1">
            <h1 className="text-[1.5rem] text-black font-semibold">
              Live Parcel Tracking
            </h1>
            <p>
              Stay updated in real-time with our live parcel tracking feature.
              From pick-up to delivery, monitor your shipment's journey and get
              instant status updates for complete peace of mind.
            </p>
          </div>
        </div>

        <div className="flex gap-5 items-center my-4  p-5 bg-base-300 rounded-2xl">
          <div>
            <img src={safeDelivery} alt="" />
          </div>
          <div className="divider divide-dotted divider-horizontal divider-start "></div>
          <div className="flex-1">
            <h1 className="text-[1.5rem] text-black font-semibold">
              100% Safe Delivery
            </h1>
            <p>
            We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center my-4  p-5 bg-base-300 rounded-2xl">
          <div className="">
            <img src={safeDelivery} alt="" />
          </div>
          <div className="divider divide-dotted divider-horizontal divider-start "></div>
          <div className="flex-1">
            <h1 className="text-[1.5rem] text-black font-semibold">
              24/7 Call Center Support
            </h1>
            <p>
           Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.
            </p>
          </div>
        </div>

      
      </div>
       <div className="border-2 border-dotted border-gray-300"></div>
    </div>
  );
};

export default ParcelInfo;
