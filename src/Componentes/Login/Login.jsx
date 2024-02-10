import { Link, useLocation, useNavigate } from "react-router-dom";
import Nav_2 from "../NavBar/Nav_2";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const { loginWithEmailPassword, googleLogin, fbLogin } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = (e) => {
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
    const handleFBLogin = (e) => {
        e.preventDefault();
        fbLogin()
            .then(result => {
                console.log("Login successful:", result.user);
                toast.success('🦄 Login successful!');
                navigate(location?.state ? location.state : '/')
            }).catch(err => {
                console.error(err);
                toast.error(`Login Failed! ${err.message}`);
            })
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        loginWithEmailPassword(email, password)

            .then(result => {
                console.log("Login successful:", result.user);
                toast.success('🦄 Login successful!');
                navigate(location?.state ? location.state : '/')
            }).catch(err => {
                console.error(err);
                toast.error(`Login Failed! ${err.message}`);
            })

    };
    return (
        <>
            <Nav_2></Nav_2>



            <div className="w-[570px] mx-auto">
                <div className="w-full h-auto  border border-[#ABABAB] rounded p-8 font-montserrat mt-10">
                    <h1 className="text-black text-2xl font-bold mb-12">Login</h1>

                    <form onSubmit={handleLogin}>
                        <div className="mb-6">
                            {/* <label className="block text-black font-medium">Username or Email</label> */}
                            <input
                                type="email"
                                id="username"
                                className="border-b-2  border-[#C5C5C5] font-medium focus:border-[#F9A51A] w-full py-2 px-3 pl-0 text-black focus:outline-none"
                                placeholder="Username or Email"
                                name="email"
                                required
                            />
                        </div>
                        <div className="mb-6">
                            {/* <label className="block text-gray-700 font-medium">Password</label> */}
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="border-b-2 border-[#C5C5C5] font-medium focus:border-[#F9A51A] w-full py-2 px-3 mt-1 pl-0 text-black focus:outline-none"
                                placeholder="Password"
                                required
                            />
                        </div>

                        <div className="flex justify-between mt-6 mb-12">
                            <div className="flex gap-2 font-medium items-center">
                                <input className="w-4 h-4 " type="checkbox" />
                                <p>Remember Me</p>
                            </div>

                            <div className="text-[#F9A51A] font-medium  underline">
                                <a href="">Forgot Password</a>
                            </div>
                        </div>

                        <button type="submit" className="bg-[#F9A51A] w-full text-black font-medium py-[14px] px-4 rounded focus:outline-none focus:bg-[#f9a31aa2] hover:bg-[#f9a31aa2]">Login</button>
                        <p className="mt-4 font-medium text-center">Don’t have an account? <Link to={"/register"}><span className="text-[#F9A51A] underline">Create an account</span></Link></p>
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
                        <button onClick={handleGoogleLogin} className="relative w-[461px] h-12 font-medium text-base py-3 border border-[#C7C7C7] rounded-3xl hover:bg-gray-300"> <img className="absolute left-2 bottom-1 w-[37px] h-[37px]" src="/google.png" alt="" /> Continue with Google</button>
                    </div>
                </div>
                <ToastContainer />
            </div>


        </>
    );
};

export default Login;