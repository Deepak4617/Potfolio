import React from 'react';

const ContactInfoModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Deepak Kumar</h2>
                    <button onClick={onClose} className="text-gray-500 hover:text-red-700">
                        <svg className="w-7 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-10.293a1 1 0 10-1.414-1.414L10 8.586 7.879 6.465a1 1 0 00-1.414 1.414L8.586 10l-2.121 2.121a1 1 0 101.414 1.414L10 11.414l2.121 2.121a1 1 0 001.414-1.414L11.414 10l2.121-2.121z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                <hr />
                <h3 className="mt-4 text-lg font-semibold">Contact Info</h3>
                <div>
                    <div className="flex items-center space-x-2">
                        <svg className="w-6 h-6 text-blue-700" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.329-.025-3.038-1.852-3.038-1.852 0-2.137 1.445-2.137 2.941v5.666h-3.554V9h3.414v1.561h.049c.476-.9 1.635-1.852 3.366-1.852 3.595 0 4.253 2.367 4.253 5.448v6.294zM5.337 7.433c-1.144 0-2.069-.928-2.069-2.073 0-1.144.925-2.071 2.069-2.071 1.144 0 2.071.927 2.071 2.071 0 1.145-.927 2.073-2.071 2.073zM6.557 20.452h-2.44V9h2.44v11.452zM22.225 0H1.771C.792 0 0 .77 0 1.725v20.497C0 23.231.792 24 1.771 24h20.451C23.207 24 24 23.231 24 22.222V1.725C24 .77 23.207 0 22.225 0z" />
                        </svg>
                        <div>
                            <div className='pt-5'>
                                <p className="text-gray-700">Your Profile</p>
                                <a href="https://www.linkedin.com/in/deepak-kumar-594832297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">linkedin.com/in/deepak-kumar-594832297</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg
                            className="w-5 h-5 text-gray-500 "
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 16"
                        >
                            <path
                                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                            <path
                                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                        </svg>
                        <div className='pt-5'>
                            <p className="text-gray-700">Email</p>
                            <a href="mailto:dk4803382@gmail.com" className="text-blue-500 hover:underline">dk4803382@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
                                fill="black" />
                        </svg>
                        <div className='pt-5'>
                            <p className="text-gray-700">Phone</p>
                            <p>7696327196</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfoModal;
