import { useForm } from "react-hook-form"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom"

const Register = () => {
    const { createUser } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password, name, photoURL } = data
        console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className=" flex justify-between mx-28">
            <div className="hero mt-12 rounded-3xl bg-cover" >
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex justify-around gap-8 my-8">
                        <div data-aos="fade-right" data-aos-duration="1000" className="text-start mb-8 text-black">
                            <h1 className="mb-5 text-5xl font-bold">Welcome to the <br /> <span className='bg-gradient-to-r from-[#1DD100] via-red-500 to-blue-400 text-transparent bg-clip-text bg-300% animate-gradient'>Residential House</span><br /> Register Page</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-5 shrink-0 w-full md:w-[450px] max-w-full shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Full Name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input {...register("photoURL",)} type="text" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                        {errors.password && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control mt-3">
                        <button className="btn font-bold text-white bg-[#23BE0A]">Register</button>
                        <div className="text-center mt-4">
                            <p>Dont have an account? <Link to='/login' className="text-blue-500 font-semibold">Log In</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;