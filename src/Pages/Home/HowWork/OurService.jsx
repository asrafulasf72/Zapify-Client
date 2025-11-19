import React from "react";
import { motion } from "framer-motion";
import service from "../../../assets/service.png";

const ourService = [
  {
    title: "Express  & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const OurService = () => {
  return (
    <section
      className=" bg-secondary my-10 md:px-30 md:py-15 py-5 rounded-2xl"
      id="features"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Our Services
        </motion.h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments we deliver on
          time, every time.
        </p>

        <div className="grid grid-cols-1 mdm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ourService.map((services, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col items-center 
    ${index === 1 ? "bg-primary text-white" : "bg-base-100"}`}
            >
              <div className="mb-4">
                <img src={service} alt="" />
              </div>
              <h3 className="text-xl font-semibold text-base-content mb-2">
                {services.title}
              </h3>
              <p className="text-base-content/70 text-sm">
                {services.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurService;
