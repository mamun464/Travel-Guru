import { Link } from "react-router-dom";
import Nav_2 from "../NavBar/Nav_2";


const Registration = () => {
    return (
        <>
            <Nav_2></Nav_2>

            <div className="w-[570px] mx-auto">
                <div className="w-full h-auto  border border-[#ABABAB] rounded p-8 font-montserrat mt-10">
                    <h1 className="text-black text-2xl font-bold mb-12">Create an account</h1>

                    <form>
                        <div className="mb-6">
                            {/* <label className="block text-black font-medium">Username or Email</label> */}
                            <input
                                type="text"
                                // id="username"
                                className="border-b-2  border-[#C5C5C5] font-medium  focus:border-[#F9A51A] w-full py-2 px-3 pl-0 text-black focus:outline-none"
                                placeholder="First Name"
                                required
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
                        <button className="relative w-[461px] h-12 font-medium text-base py-3 border border-[#C7C7C7] rounded-3xl hover:bg-gray-300"> <img className="absolute left-2 bottom-1 w-[37px] h-[37px]" src="/fb.png" alt="" /> Continue with Facebook</button>
                    </div>
                    <div className="flex justify-center mt-3">
                        <button className="relative w-[461px] h-12 font-medium text-base py-3 border border-[#C7C7C7] rounded-3xl hover:bg-gray-300"> <img className="absolute left-2 bottom-1 w-[37px] h-[37px]" src="/google.png" alt="" /> Continue with Google</button>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Registration;