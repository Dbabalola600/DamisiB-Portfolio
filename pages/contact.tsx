import { useState } from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";


export default function Contact(){


    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        subject: "",
        message: ""
    });

    const [formState, setFormState] = useState({
        success: false,
        error: false,
        loading: false
    });

    const HandleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setFormState({ success: false, error: false, loading: true });
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            if (response.status === 200) {
                setFormState({ success: true, error: false, loading: false });
                setFormData({ fullName: "", email: "", subject: "", message: "" });
            } else {
                setFormState({ success: false, error: true, loading: false });
            }
        } catch (error) {
            console.log("An Error Occurred: ", error);
            setFormState({ success: false, error: true, loading: false });
        }
    };
    return (
        <>
          <div className="flex h-full">
                <div className="my-auto w-full">
                    <h1 className="text-4xl text-center font-semibold text-primary tracking-wider self-center">
                        <span className="text-gray-700">Contact</span> me
                    </h1>
                    <p className="text-center text-xl">get in touch...</p>

                    {/* Contact Card */}
                    <div className="shadow-md rounded py-6 mx-10 lg:mx-32 mt-10 mb-10">
                        <div className="grid grid-cols-2 text-center gap-10 md:gap-auto">
                            <div className="col-span-3 md:col-span-1">
                                <div className="flex justify-center text-secondary">
                                    <GoLocation className="text-4xl" />
                                </div>
                                <h2 className="text-xl mb-1 mt-1 font-semibold text-primary">Address</h2>
                                <a target="_blank" href="https://goo.gl/maps/W71a6ZoQFxjJSYTg9" rel="noreferrer">
                                    <p className="text-xl font-medium text-gray-700">Lagos, Nigeria</p>
                                </a>
                            </div>

                            <div className="col-span-3 md:col-span-1">
                                <div className="flex justify-center text-secondary">
                                    <AiOutlineMail className="text-4xl" />
                                </div>
                                <h2 className="text-xl mb-1 mt-1 font-semibold text-primary">Email</h2>
                                <a href="mailto:dami600bab@gmail.com" rel="noreferrer">
                                    <p className="text-xl font-medium text-gray-700">dami600bab@gmail.com</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="mx-10 lg:mx-32">
                        <form onSubmit={HandleSubmit}>
                            <div className="md:grid md:grid-cols-2 gap-x-8">
                                <div className="mt-4">
                                    <label className="uppercase block text-sm font-semibold text-gray-700">Full Name</label>
                                    <div className="mt-1">
                                        <input
                                            required
                                            name="fullName"
                                            type="text"
                                            value={formData.fullName}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    fullName: e.target.value
                                                });
                                            }}
                                            className="w-full focus:border-primary rounded focus:ring focus:ring-primary focus:ring-opacity-50"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <label className="uppercase block text-sm font-semibold text-gray-700">Email</label>
                                    <div className="mt-1">
                                        <input
                                            required
                                            name="email"
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value
                                                });
                                            }}
                                            className="w-full focus:border-primary rounded focus:ring focus:ring-primary focus:ring-opacity-50"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 md:col-span-2">
                                    <label className="uppercase block text-sm font-semibold text-gray-700">Subject</label>
                                    <div className="mt-1">
                                        <input
                                            required
                                            name="subject"
                                            type="text"
                                            value={formData.subject}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    subject: e.target.value
                                                });
                                            }}
                                            className="w-full focus:border-primary rounded focus:ring focus:ring-primary focus:ring-opacity-50"
                                        />
                                    </div>
                                </div>

                                <div className="mt-4 md:col-span-2">
                                    <label className="uppercase block text-sm font-semibold text-gray-700">Message</label>
                                    <div className="mt-1">
                                        <textarea
                                            required
                                            name="message"
                                        

                                            value={formData.message}
                                            onChange={(e) => {
                                                setFormData({
                                                    ...formData,
                                                    message: e.target.value
                                                });
                                            }}
                                            className="w-full h-28 focus:border-primary rounded focus:ring focus:ring-primary focus:ring-opacity-50"
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="flex mt-8 lg:mt-10">
                                <div className="m-auto">
                                    <button type="submit" className="bg-primary font-bold text-white text-xl rounded px-6 py-4 hover:text-primary hover:bg-white hover:ring-2 hover:ring-primary">
                                        <div className="flex items-center space-x-4">
                                            <RiSendPlaneFill />
                                            <div>Send</div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {formState.loading && <div className="font-bold tracking-wider mt-6 bg-primary rounded-sm text-center py-4 px-4 text-xl text-white mb-3">Processing... Please Wait</div>}

                            {formState.error && <div className="font-bold tracking-wider mt-6 bg-red-500 rounded-sm text-center py-4 px-4 text-xl text-white mb-3">An Error Occurred, Try Again.</div>}

                            {formState.success && <div className="font-bold tracking-wider mt-6 bg-green-500 rounded-sm text-center py-4 px-4 text-xl text-white mb-3">Message Sent</div>}
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}