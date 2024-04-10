import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { FaGoogle, FaGithub, } from "react-icons/fa";


const Login = () => {
    const { logInUser, googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data || {}
        console.log(email, password);

        navigate("/")

        // Login user
        logInUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGithubLogin = () => {
        githubLogin()
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="flex flex-col lg:flex-row text-center items-center justify-between lg:mx-28">
            <div className="hero mt-12 rounded-3xl bg-cover" >
                <div className="hero-content text-center text-neutral-content">
                    <div className="flex justify-around gap-8 my-8">
                        <div data-aos="fade-right" data-aos-duration="1000" className="lg:text-start text-center mb-8 text-black">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold">Welcome to the <br /> <span className='bg-gradient-to-r from-[#1DD100] via-red-500 to-blue-400 text-transparent bg-clip-text bg-300% animate-gradient'>Residential House</span><br /> Login Page..</h1>
                            <p className="mb-5 md:w-96 lg:w-full">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="card lg:mt-5 shrink-0 w-full md:w-[450px] max-w-full shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input {...register("email")} type="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input {...register("password")} type="password" placeholder="password" className="input input-bordered" />
                        {errors.password && <span className="text-red-600">This field is required</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover font-medium">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control">
                        <button className="btn font-bold text-white bg-[#23BE0A]">Login</button>
                        <div className="divider mt-6"> OR</div>
                        <div className="p-4 flex flex-col md:flex-row justify-around items-center space-y-3 md:space-y-0">
                            <button onClick={handleGoogleLogin} className="btn btn-outline ">
                                <FaGoogle />
                                Login with Google
                            </button>
                            <button onClick={handleGithubLogin} className="btn btn-outline">
                                <FaGithub />
                                Login with Github
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <p>Have an account? <Link to='/register' className="text-blue-500 font-semibold">Sign UP</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;