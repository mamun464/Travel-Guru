import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav_2 from "../NavBar/Nav_2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";


const Registration = () => {

    const { createUser, googleLogin, fbLogin } = useContext(AuthContext)

    const location = useLocation();
    const navigate = useNavigate();

    const handleFBLogin = (e) => {
        e.preventDefault();
        fbLogin()
            .then(result => {
                console.log("Registration successful:", result.user);
                toast.success('🦄 Registration  successful!');
                navigate(location?.state ? location.state : '/')
            }).catch(err => {
                console.error(err);
                toast.error(`Registration Failed! ${err.message}`);
            })
    };

    const handleGoogleReg = (e) => {
        e.preventDefault();
        googleLogin()
            .then(result => {
                console.log("Login successful:", result.user);
                toast.success('🦄 Login successful!');
                navigate(location?.state ? location.state : '/')
            }).catch(err => {
                console.error(err);
                toast.error(`Login Failed! ${err.message}`);
            })
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const firstName = form.get('firstName');
        const lastName = form.get('lastName');
        const email = form.get('email');
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');

        if (password != confirmPassword) {
            toast.error(`Confirm Password not match!`);
        } else {
            createUser(email, password)
                .then(result => {
                    updateProfile(result.user, {
                        displayName: `${firstName} ${lastName}`
                    }).then(re => {
                        console.log("User updated",);
                    }).catch(err => {
                        console.error(err);
                    });
                    console.log("Registration successful:", result.user);
                    toast.success('🦄 Registration successful!');
                    navigate(location?.state ? location.state : '/')
                }).catch(err => {
                    console.error(err);
                    toast.error(`Registration Failed! ${err.message}`);
                })
        }


    };
    return (
        <>
            <Nav_2></Nav_2>

            <div className="w-[570px] mx-auto">
                <div className="w-full h-auto  border border-[#ABABAB] rounded p-8 font-montserrat mt-10">
                    <h1 className="text-black text-2xl font-bold mb-12">Create an account</h1>

                    <form onSubmit={handleRegistration}>
                        <div className="mb-6">
                            {/* <label className="block text-black font-medium">Username or Email</label> */}
                            <input
                                type="text"
                                // id="username"
                                className="border-b-2  border-[#C5C5C5] font-medium  focus:border-[#F9A51A] w-full py-2 px-3 pl-0 text-black focus:outline-none"
                                placeholder="First Name"
                                required
                                name="firstName"
                            />
                        </div>
                        <div className="mb-6">
                            {/* <label className="block text-black font-medium">Username or Email</label> */}
                            <input
                                type="text"
                                // id="username"
                                className="border-b-2  border-[#C5C5C5] font-medium  focus:border-[#F9A51A] w-full py-2 px-3 pl-0 text-black focus:outline-none"
                                placeholder="Last Name"
                                required
                                name="lastName"
                            />
                        </div>
                        <div className="mb-6">
                            {/* <label className="block text-black font-medium">Username or Email</label> */}
                            <input
                                type="email"
                                id="username"
                                className="border-b-2  border-[#C5C5C5] font-medium  focus:border-[#F9A51A] w-full py-2 px-3 pl-0 text-black focus:outline-none"
                                placeholder="Username or Email"
                                required
                                name="email"
                            />
                        </div>
                        <div className="mb-6">
                            {/* <label className="block text-gray-700 font-medium">Password</label> */}
                            <input
                                type="password"
                                // id="password"
                                className="border-b-2 border-[#C5C5C5] font-medium focus:border-[#F9A51A] w-full py-2 px-3 mt-1 pl-0 text-black focus:outline-none"
                                placeholder="Confirm Password"
                                required
                                name="password"
                            />
                        </div>
                        <div className="mb-6">
                            {/* <label className="block text-gray-700 font-medium">Password</label> */}
                            <input
                                type="password"
                                id="password"
                                className="border-b-2 border-[#C5C5C5] font-medium focus:border-[#F9A51A] w-full py-2 px-3 mt-1 pl-0 text-black focus:outline-none"
                                placeholder="Password"
                                required
                                name="confirmPassword"
                            />
                        </div>

                        <button type="submit" className="bg-[#F9A51A] w-full text-black font-medium py-[14px] px-4 rounded focus:outline-none focus:bg-[#f9a31aa2] hover:bg-[#f9a31aa2]">Create an account</button>

                        <p className="mt-4 font-medium text-center">Already have an account? <Link to={"/login"}><span className="text-[#F9A51A] underline">Login</span></Link></p>
                    </form>


                </div>

                <div className=" mt-8 flex items-center justify-center gap-1 mb-8">
                    <hr className=" w-[200px] border-[#D1D1D1] " />
                    <h1 className="font-medium">Or</h1>
                    <hr className=" w-[200px] border-[#D1D1D1] " />
                </div>

                <div className="mb-12">
                    <div className="flex justify-center">
                        <button onClick={handleFBLogin} className="relative w-[461px] h-12 font-medium text-base py-3 border border-[#C7C7C7] rounded-3xl hover:bg-gray-300"> <img className="absolute left-2 bottom-1 w-[37px] h-[37px]" src="/fb.png" alt="" /> Continue with Facebook</button>
                    </div>
                    <div className="flex justify-center mt-3">
                        <button onClick={handleGoogleReg} className="relative w-[461px] h-12 font-medium text-base py-3 border border-[#C7C7C7] rounded-3xl hover:bg-gray-300"> <img className="absolute left-2 bottom-1 w-[37px] h-[37px]" src="/google.png" alt="" /> Continue with Google</button>
                    </div>
                </div>
                <ToastContainer />
            </div>


        </>
    );
};

export default Registration;