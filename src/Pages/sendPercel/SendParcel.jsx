import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const { register, handleSubmit } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div className="my-10">
      <form onSubmit={handleSubmit(handleSendParcel)}>
        {/* Parcel Type */}
        <div>
          <label className="label mr-5">
            {" "}
            <input
              type="radio"
              {...register("percelType")}
              value="document"
              className="radio"
              defaultChecked
            />{" "}
            Document
          </label>
          <label className="label">
            {" "}
            <input
              type="radio"
              {...register("percelType")}
              value="non-document"
              className="radio"
            />{" "}
            Non-Document
          </label>
        </div>

        {/* Parcel Info name weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input type="text" className="input w-full" {...register('parcelName')} placeholder="Your Parcel Name" />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight</label>
            <input type="number" className="input w-full" {...register('parcelWeight')} placeholder="Enter Your Parcel Weight (Kg)" />
          </fieldset>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
            {/* Sender Details */}
          <fieldset className="fieldset">
            <h2 className="text-[1.1rem] font-semibold text-black">Sender Details</h2>
            <label className="label">Sender Name</label>
            <input type="text" className="input w-full" {...register('senderName')} placeholder="Sender Name" />

            <label className="label">Address</label>
            <input type="text" className="input w-full" {...register('senderAddress')} placeholder="Sender Address" />

            <label className="label">Sender Phone No</label>
            <input type="text" className="input w-full" {...register('senderPhoneNo')} placeholder="Sender Phone No" />

            <label className="label">Sender District</label>
            <input type="text" className="input w-full" {...register('senderDistrict')} placeholder="Sender District" />

            <label className="label">Pickup Instruction</label>
            <textarea placeholder="Pickup Instruction" {...register('pickupInstruction')} className="textarea textarea-md w-full"></textarea>
          </fieldset>
          {/* Receiver Details */}
          <fieldset className="fieldset">
            <h2 className="text-[1.1rem] font-semibold text-black">Receiver Details</h2>
            <label className="label">Reciver Name</label>
            <input type="text" className="input w-full" {...register('reciverName')} placeholder="Reciver Name" />

            <label className="label">Receiver Address</label>
            <input type="text" className="input w-full" {...register('reciverAddress')} placeholder="Receiver Address" />

            <label className="label">Receiver Contact No</label>
            <input type="text" className="input w-full" {...register('reciverNumber')} placeholder="Receiver Contact No" />

            <label className="label">Receiver District</label>
            <input type="text" className="input w-full" {...register('reciverDistrict')} placeholder="Receiver District" />

            <label className="label">Delivery Instruction</label>
            <textarea placeholder="Delivery Instruction" {...register('deliveryInstruction')} className="textarea textarea-md w-full"></textarea>
          </fieldset>
        </div>
        <input
          type="submit"
          value="Send Percel"
          className="btn btn-primary text-black mt-4"
        />
      </form>
    </div>
  );
};

export default SendParcel;
