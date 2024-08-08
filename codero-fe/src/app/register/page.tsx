"use client";

import { useState } from 'react';

// Image and Icons
import Image from 'next/image';
import LogoCodero from "../../../public/images/logo_codero2.png";
import EyeIcon from '../../../public/icons/eye-icon';
import EyeSlashIcon from '../../../public/icons/eye-slash-icon';

export default function Register() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    function viewPassword() {
        setPasswordVisible(!passwordVisible);
    }

    function viewConfirmPassword() {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    }

    return (
        <main id='register' className='flex flex-col justify-center items-center min-h-[100vh]'>
            <div id="register_logo" className='w-72 pt-20 pb-10'>
                <Image src={LogoCodero} alt='Codero' className='w-full'/>
            </div>

            <div id='register_form' className='grid grid-cols-2 grid-rows-8 gap-x-5 gap-y-1.5 items-center'>
                <div id='register_first_name_container' className=''>
                    <input type="text" name="" id="" placeholder='Nama Depan' className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'/>
                </div>

                <div id='register_last_name_container' className=''>
                    <input type="text" name="" id="" placeholder='Nama Belakang' className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'/>
                </div>

                <div id="register_gender_container" className="">
                    <select name="" id="" className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'>
                        <option value="">Jenis Kelamin</option>
                        <option value="">Laki-laki</option>
                        <option value="">Perempuan</option>
                    </select>
                </div>

                <div id="register_birth_date_container" className="">
                    <input type="date" name="" id="" placeholder='Tanggal Lahir' className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'/>
                </div>

                <div id="register_email_container" className="">
                    <input type="email" name="" id="" placeholder='Email' className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'/>
                </div>

                <div id="register_phone_container" className="">
                    <input type="tel" name="" id="" placeholder='No. Telp' className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'/>
                </div>

                <div id="register_address_container" className="">
                    <textarea name="" id="" placeholder='Alamat' className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'></textarea>
                </div>

                <div id="register_city_container" className="">
                    <input type="text" name="" id="" placeholder='Kota' className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'/>
                </div>

                <div id="register_position_container" className="">
                    <select name="" id="" className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'>
                        <option value=""> Head </option>
                        <option value=""> HRD </option>
                        <option value=""> Finance </option>
                        <option value=""> Business Development </option>
                        <option value=""> Teacher </option>
                    </select>
                </div>

                <div id="register_division_container" className="">
                    <select name="" id="" className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'>
                        <option value=""> Full-Time </option>
                        <option value=""> Part-Time </option>
                        <option value=""> Intern </option>
                    </select>
                </div>

                <div id="register_region_container" className="">
                    <select name="" id="" className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'>
                        <option value=""> Jabodetabek </option>
                        <option value=""> Banjarmasin </option>
                        <option value=""> Yogyakarta </option>
                    </select>
                </div>

                <div id="register_password_container" className='relative col-span-2'>
                    <input type="password" name="" id="" placeholder='Password' className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'/>
                    <div className='absolute top-0 right-0 py-2 mr-2'>
                        <button id='eye_enabled' onClick={viewPassword} className={`group ${passwordVisible ? '' : 'hidden'}`}>
                            <EyeIcon className='text-gray-400 group-hover:text-primary duration-500'/>
                        </button>

                        <button id="eye_disabled" onClick={viewPassword} className={`group ${passwordVisible ? 'hidden' : ''}`}>
                            <EyeSlashIcon className='text-gray-400 group-hover:text-primary duration-300'/>
                        </button>
                    </div>
                </div>

                <div id="register_confirm_password_container" className='relative col-span-2'>
                    <input type="password" name="" id="" placeholder='Konfirmasi Password' className='shadow-sm shadow-gray-400 rounded-md pl-2 py-2 text-base bg-gray-200 w-full'/>
                    <div className='absolute top-0 right-0 py-2 mr-2'>
                        <button id='eye_enabled' onClick={viewConfirmPassword} className={`group ${confirmPasswordVisible ? '' : 'hidden'}`}>
                            <EyeIcon className='text-gray-400 group-hover:text-primary duration-500'/>
                        </button>

                        <button id="eye_disabled" onClick={viewConfirmPassword} className={`group ${confirmPasswordVisible ? 'hidden' : ''}`}>
                            <EyeSlashIcon className='text-gray-400 group-hover:text-primary duration-300'/>
                        </button>
                    </div>
                </div>
            </div>

            <div id='register_button_container' className='flex flex-col pt-5 pb-10'>
                <button type='submit' className='bg-primary font-bold tracking-wide text-white rounded-md py-1 px-10 hover:underline text-lg'>Register</button>
            </div>
        </main>
    )
};
