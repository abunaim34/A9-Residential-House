import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"


const Login = () => {
    const {logInUser } = useContext(AuthContext)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const {email, password} = data || {}
        console.log(email, password);

        // Login user
        logInUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card mt-5 shrink-0 w-full md:w-[450px] max-w-full shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="email" className="input input-bordered"  />
                            {errors.email && <span className="text-red-600">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input {...register("password")} type="password" placeholder="password" className="input input-bordered"  />
                            {errors.password && <span className="text-red-600">This field is required</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover font-medium">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <button className="btn font-bold text-white bg-[#23BE0A]">Login</button>
                            <div className="text-center mt-4">
                                <p>Have an account? <Link to='/register' className="text-blue-500 font-semibold">Sign UP</Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;