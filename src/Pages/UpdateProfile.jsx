import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';



const UpdateProfile = () => {
    const { user, updateUserProfile, setUser } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
    } = useForm()


    const handleUpdateProfile = (data) => {
        const { name, photoURL } = data || {};

        updateUserProfile(name, photoURL)
            .then(() => {
                setUser({
                    ...user,
                    displayName: name,
                    photoURL: photoURL
                })
                toast.success('Update successfully')
            })
    }
    return (
        <div className="mt-10 text-center">
            <Helmet>
                <title>Residential House | Update Profile</title>
            </Helmet>
            <h2 className="mb-5 md:text-5xl text-3xl font-bold">Update Your Profile</h2>
            <p>If you want to update your profile, please update now</p>
            <div className=" flex flex-col mt-10 lg:flex-row-reverse text-center space-y-10 items-center justify-around lg:mx-28">
                <div data-aos="fade-left" data-aos-duration="3000" className="flex mt-5 flex-col border items-center justify-center w-full md:w-[450px] md:h-[400px] p-6 shadow-md rounded-xl bg-base-100">
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-gray-300 ring-offset-base-100 ring-offset-2">
                            <img src={user?.photoURL} alt="Profile picture not" />
                        </div>
                    </div>
                    <div className="space-y-4 mt-4 text-center divide-y bg-base-100 dark:divide-gray-300">
                        <div className="my-2 space-y-1">
                            <h2 className="text-xl font-semibold sm:text-2xl"> {user?.displayName}</h2>
                            <p className="px-5 text-xs sm:text-base dark:text-gray-600">Email :- {user?.email}</p>
                        </div>
                        <div className=" pt-2 space-x-4 ">
                            <div className="">
                                <label className="label">
                                    <span className="label-text font-semibold">Photo URL</span>
                                </label>
                                <input disabled defaultValue={user?.photoURL} type="text" placeholder="Full Name" className="input input-bordered w-full" />
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" className="card  shrink-0 border w-full md:w-[450px] max-w-full shadow-md bg-base-100">
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
                            <input {...register("email")}  value={ user ? user?.email : "Email not found"} type="email" placeholder="Email" className="input input-bordered" disabled />
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