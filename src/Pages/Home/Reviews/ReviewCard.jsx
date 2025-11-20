import React from "react";

const ReviewCard = ({ review }) => {
  const { userName,review: testimonial, user_photoURL } = review;
  return (
    <div className="max-w-sm p-6 rounded-2xl bg-white shadow-sm border border-gray-100">
      {/* Quote Icon */}
      <div className="text-primary text-4xl mb-3">❝</div>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed mb-4">
      {testimonial}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-teal-300 my-4"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        <div>
            <img className="w-10 h-10 rounded-full bg-teal-900" src={user_photoURL} alt="" />
        </div>

        <div>
          <h3 className="font-semibold text-teal-900">{userName}</h3>
          <p className="text-gray-500 text-sm">Senior Product Designer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
