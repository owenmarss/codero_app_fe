"use client"

import { useState } from 'react';

// Image and Icons
import Image from 'next/image';
import LogoCodero from "../../../public/images/logo_codero2.png";
import EyeIcon from '../../../public/icons/eye-icon';
import EyeSlashIcon from '../../../public/icons/eye-slash-icon';

export default function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    function viewPassword() {
        setPasswordVisible(!passwordVisible);
    }

    return (
        <main id="login" className='flex flex-col justify-center items-center gap-10 min-h-[100vh]'>
            <div id="login_logo" className='w-72'>
                <Image src={LogoCodero} alt='Codero' className='w-full'/>
            </div>

            <div id='login_form' className='flex flex-col gap-3'>
                <div id='login_email_container' className='w-96'>
                    <input type="email" placeholder='Email' className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'/>
                </div>

                <div id="login_password_container" className='w-96 relative'>
                    <input type="password" placeholder='Password' className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'/>
                    <div className='absolute top-0 right-0 py-2 mr-2'>
                        <button id='eye_enabled' onClick={viewPassword} className={`group ${passwordVisible ? '' : 'hidden' }`}>
                            <EyeIcon className='text-gray-400 group-hover:text-primary duration-500'/>
                        </button>

                        <button id="eye_disabled" onClick={viewPassword} className={`group ${passwordVisible ? 'hidden' : '' }`}>
                            <EyeSlashIcon className='text-gray-400 group-hover:text-primary duration-300'/>
                        </button>
                    </div>
                </div>
            </div>

            <div id='login_button_container' className='flex flex-col gap-2'>
                <button type='submit' className='bg-primary font-bold tracking-wide text-white rounded-md py-1 px-4 hover:underline text-lg'>Login</button>
                <a href="" className='text-gray-400 hover:underline font-light text-lg hover:text-primary'> Forgot Password? </a>
            </div>
        </main>
    )
};
