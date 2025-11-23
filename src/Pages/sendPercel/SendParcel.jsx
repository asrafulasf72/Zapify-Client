import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
 const { register, handleSubmit, control} = useForm();
 const senderRegion= useWatch({control, name:'senderRegion'})
 const recevierRegion= useWatch({control, name: 'recevierRegion'})
  const serviceCenters=useLoaderData();
     const regionsDuplicate=serviceCenters.map(c=>c.region);
     const regions= [...new Set(regionsDuplicate)]
     
     const districtByRegion=(region)=>{
           const regionDistricts=serviceCenters.filter(c=> c.region === region);
           const districts=regionDistricts.map(d=> d.district);
           return districts
     }
 
  

  const handleSendParcel = (data) => {
    console.log(data);
  };
     
  return (
    <div className="my-10 px-3">
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

            <label className="label">Sender Email</label>
            <input type="email" className="input w-full" {...register('senderEmail')} placeholder="Sender Email" />

            <label className="label">Address</label>
            <input type="text" className="input w-full" {...register('senderAddress')} placeholder="Sender Address" />

            <label className="label">Sender Phone No</label>
            <input type="text" className="input w-full" {...register('senderPhoneNo')} placeholder="Sender Phone No" />

            {/* Sender Region */}
              <div className="flex flex-col md:flex-row gap-4">
                      <fieldset className="fieldset flex-1">
                <legend className="fieldset-legend">Sender Region</legend>
                <select defaultValue="Pick a Region" {...register('senderRegion')} className="select">
                  <option disabled={true}>Pick a Region</option>
                 {
                  regions.map((r,index)=> <option key={index} value={r}>{r}</option>)
                 }
                </select>
                {/* <span className="label">Optional</span> */}
            </fieldset>
                   
                   {/* Sender District */}
                  <fieldset className="fieldset flex-1">
                <legend className="fieldset-legend">Sender Districts</legend>
                <select defaultValue="Pick a District" {...register('senderDistrict')} className="select">
                  <option disabled={true}>Pick a District</option>
                   {
                  districtByRegion(senderRegion).map((d,index)=> <option key={index} value={d}>{d}</option>)
                 }
                </select>
                
            </fieldset>
              </div>

            <label className="label">Pickup Instruction</label>
            <textarea placeholder="Pickup Instruction" {...register('pickupInstruction')} className="textarea textarea-md w-full"></textarea>
          </fieldset>
          {/* Receiver Details */}
          <fieldset className="fieldset">
            <h2 className="text-[1.1rem] font-semibold text-black">Receiver Details</h2>
            <label className="label">Reciver Name</label>
            <input type="text" className="input w-full" {...register('reciverName')} placeholder="Reciver Name" />

            <label className="label">Receiver Email</label>
            <input type="email" className="input w-full" {...register('receiverEmail')} placeholder="Receiver Email" />

            <label className="label">Receiver Address</label>
            <input type="text" className="input w-full" {...register('reciverAddress')} placeholder="Receiver Address" />

            <label className="label">Receiver Contact No</label>
            <input type="text" className="input w-full" {...register('reciverNumber')} placeholder="Receiver Contact No" />

             {/* Reciver Region */}
              <div className="flex flex-col md:flex-row gap-4">
                      <fieldset className="fieldset flex-1">
                <legend className="fieldset-legend">Recevier Region</legend>
                <select defaultValue="Pick a Region" {...register('recevierRegion')} className="select">
                  <option disabled={true}>Pick a Region</option>
                 {
                  regions.map((r,index)=> <option key={index} value={r}>{r}</option>)
                 }
                </select>
                
            </fieldset>
                   
                   {/* Recevier District */}
                  <fieldset className="fieldset flex-1">
                <legend className="fieldset-legend">Recevier Districts</legend>
                <select defaultValue="Pick a District" {...register('recevierDistrict')} className="select">
                  <option disabled={true}>Pick a District</option>
                   {
                  districtByRegion(recevierRegion).map((d,index)=> <option key={index} value={d}>{d}</option>)
                 }
                </select>
               
            </fieldset>
              </div>

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
