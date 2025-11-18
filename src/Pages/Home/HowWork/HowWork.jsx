import React from "react";
import { motion } from "framer-motion";
import booking from "../../../assets/bookingicon.png";

const howWork = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments we deliver on time, every time.",
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments we deliver on time, every time.",
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments we deliver on time, every time.",
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments we deliver on time, every time.",
  },
];

const HowWork = () => {
  return (
    <section className=" bg-base-100 my-10" id="features">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-base-content mb-4"
        >
          How it Work
        </motion.h2>
        <p className="text-base-content/70 max-w-2xl mx-auto mb-12">
          We make sending packages simple from easy booking to fast delivery,
          secure hubs, and flexible payment options.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {howWork.map((howWorks, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col items-center"
            >
              <div className="mb-4">
                <img src={booking} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-2">
                {howWorks.title}
              </h3>
              <p className="text-base-content/70 text-sm">
                {howWorks.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWork;
