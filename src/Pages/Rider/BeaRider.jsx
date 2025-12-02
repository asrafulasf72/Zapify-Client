import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { useLoaderData } from 'react-router';
import { useAxiosSecure } from '../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const BeaRider = () => {
    const { register, handleSubmit, control } = useForm();
    const { user } = useAuth();
    const serviceCenters = useLoaderData();
    const axiosSecure = useAxiosSecure();

    const riderRegion = useWatch({ control, name: 'riderRegion' })
    const regionsDuplicate = serviceCenters.map(c => c.region);
    const regions = [...new Set(regionsDuplicate)]

    const districtByRegion = (region) => {
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts
    }

    const handleBeaRider = (data) => {
        axiosSecure.post('/riders', data)
            .then((res) => {
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Application has been submitted. Will let you Know",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div>
            <h1>Be a Rider</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <form onSubmit={handleSubmit(handleBeaRider)}>
                    <fieldset className="fieldset">
                        <h2 className="text-[1.1rem] font-semibold text-black">Rider Details</h2>
                        <label className="label">Rider Name</label>
                        <input type="text" className="input w-full" {...register('riderName')} defaultValue={user?.displayName} placeholder="Sender Name" />

                        <label className="label">Rider Email</label>
                        <input type="email" className="input w-full" defaultValue={user?.email} {...register('riderEmail')} placeholder="Rider Email" />

                        <label className="label">Rider Driving License Number</label>
                        <input type="number" className="input w-full" {...register('drivingLicense')} placeholder="Driving License Number" />

                        <label className="label">NID Number</label>
                        <input type="number" className="input w-full" {...register('nidNo')} placeholder="NID Number" />

                        <label className="label">Address</label>
                        <input type="text" className="input w-full" {...register('riderAddress')} placeholder="Rider Address" />

                        <label className="label">Rider Phone No</label>
                        <input type="text" className="input w-full" {...register('riderPhoneNo')} placeholder="Raider Phone No" />

                        {/* Sender Region */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <fieldset className="fieldset flex-1">
                                <legend className="fieldset-legend">Rider Region</legend>
                                <select defaultValue="Pick a Region" {...register('riderRegion')} className="select">
                                    <option disabled={true}>Pick a Region</option>
                                    {
                                        regions.map((r, index) => <option key={index} value={r}>{r}</option>)
                                    }
                                </select>
                                {/* <span className="label">Optional</span> */}
                            </fieldset>

                            {/* Sender District */}
                            <fieldset className="fieldset flex-1">
                                <legend className="fieldset-legend">Rider Districts</legend>
                                <select defaultValue="Pick a District" {...register('riderDistrict')} className="select">
                                    <option disabled={true}>Pick a District</option>
                                    {
                                        districtByRegion(riderRegion).map((d, index) => <option key={index} value={d}>{d}</option>)
                                    }
                                </select>

                            </fieldset>
                        </div>
                        <label className="label">Tell Us About Your Self</label>
                        <textarea placeholder="About your Self" {...register('tellUs')} className="textarea textarea-md w-full"></textarea>
                    </fieldset>
                    <input
                        type="submit"
                        value="Apply As Rider"
                        className="btn btn-primary text-black my-4"
                    />
                </form>
            </div>
        </div>
    );
};

export default BeaRider;