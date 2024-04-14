import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { FaGoogle, FaGithub, } from "react-icons/fa";
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Helmet } from "react-helmet-async";


const Login = () => {
    const { logInUser, googleLogin, githubLogin } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        const { email, password } = data || {}
        console.log(email, password);

        if(password.length < 6){
            return toast.error('Password should be at least 6 characters or longer')
        }
        if(!/[A-Z]/.test(password)){
            return toast.error('Your password should have at least one Uppercase characters')
        }
        else if(!/[a-z]/.test(password)){
            return toast.error('Your password should have at least one Lowercase characters')
        }
        

        // Login user
        logInUser(email, password)
            .then(result => {
                toast.success('Login successfully', result.user)
                navigate("/")
            })
            .catch(error => {
                toast.error('Incorrect password', error)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            toast.success('Login successfully', result.user)
            navigate("/")
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGithubLogin = () => {
        githubLogin()
        .then(result => {
            toast.success('Login successfully', result.user)
            navigate("/")
        })
        .catch(error => {
            console.log(error);
        })
    }
    return (
        <div className="flex flex-col lg:flex-row text-center items-center justify-between lg:mx-28">
            <Helmet>
                <title>Residential House | Login page</title>
            </Helmet>
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
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input {...register("password")} type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" />
                        <span onClick={() => setShowPassword(!showPassword)} className="absolute top-12 right-2 cursor-pointer">
                            {
                                showPassword ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>
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
                            <p>Dont have an account? <Link to='/register' className="text-blue-500 font-semibold">Sign UP</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;