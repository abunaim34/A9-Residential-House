import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';



const UpdateProfile = () => {
    const { user, updateUserProfile, setReload } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
    } = useForm()


    const handleUpdateProfile = (data) => {
        const { name, photoURL } = data

        updateUserProfile(name, photoURL)
            .then(() => {
                setReload(true)
                toast.success('Update successfully',)
            })
    }
    return (
        <div className="mt-10">
            <Helmet>
                <title>Residential House | Update Profile</title>
            </Helmet>
            <div className=" flex flex-col lg:flex-row text-center items-center justify-between lg:mx-28">
                <div className="hero mt-12 rounded-3xl bg-cover" >
                    <div className="hero-content text-center text-neutral-content">
                        <div className="flex justify-around gap-8 lg:my-8">
                            <div data-aos="fade-right" data-aos-duration="1000" className="lg:text-start md:text-center mb-8 text-black">
                                <h1 className="mb-5 md:text-5xl text-3xl font-bold">Update your Profile <br /> Picture and Name..</h1>
                                <p className="mb-5 md:w-96 lg:w-full">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className="card lg:mt-5 shrink-0 w-full md:w-[450px] max-w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleUpdateProfile)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input {...register("name")} defaultValue={user?.displayName} type="text" placeholder="Full Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input {...register("email")} defaultValue={user?.email} type="email" placeholder="Email" className="input input-bordered" disabled />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input {...register("photoURL")} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn font-bold text-white bg-[#23BE0A]">Update Profile</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;