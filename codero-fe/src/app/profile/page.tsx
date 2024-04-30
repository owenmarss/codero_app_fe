import CameraIcon from "../../../public/icons/camera-icon";
import KeyIcon from "../../../public/icons/key-icon";
import Pen2Icon from "../../../public/icons/pen2-icon";

export default function Profile() {
    return (
        <main id="profile" className="pt-7 pb-10 px-6 flex flex-col gap-5">
            <div id="profile_title">
                <h1 className="text-2xl font-semibold text-primary"> Profile </h1>
            </div>

            <div id="profile_content" className="flex flex-col gap-5">
                <div id="profile_picture" className="relative flex justify-center items-center bg-gray-400 w-72 h-72 rounded-full shadow-md drop-shadow-md">
                    <h1 className="text-2xl font-bold tracking-wider"> Foto </h1>

                    <button className="absolute bottom-0 right-0 mr-4 mb-2 bg-primary text-white w-14 h-14 rounded-full shadow-md drop-shadow-md flex justify-center items-center hover:bg-secondary duration-500">
                        <CameraIcon />
                    </button>

                    {/* <div id="picture_editor" className="absolute bottom-0 right-0 mr-4 mb-2 bg-primary flex justify-center items-center w-14 h-14 rounded-full shadow-md drop-shadow-md">
                        <button className="text-white">
                            <CameraIcon />
                        </button>
                    </div> */}
                </div>

                <div id="profile_info" className="grid grid-cols-2 justify-between gap-y-5 pt-2">
                    <div id="profile_info_id" className="flex flex-col gap-1.5 col-span-2 w-64">
                        <h2 className="text-lg font-medium text-black"> ID: </h2>
                        <input 
                            type="text" 
                            name="" 
                            id="" 
                            disabled={true}
                            placeholder="EMP-0001"
                            className="text-base text-gray-400 border border-gray-300 rounded-md p-2 w-56"
                        />
                    </div>

                    <div id="profile_info_first_name" className="flex flex-col gap-1.5 w-64">
                        <h2 className="text-lg font-medium text-black"> Nama Depan: </h2>
                        <input
                            type="text" 
                            name="" 
                            id="" 
                            disabled={true}
                            placeholder="Owen"
                            className="text-base text-black border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>

                    <div id="profile_info_last_name" className="flex flex-col gap-1.5 w-64">
                        <h2 className="text-lg font-medium text-black"> Nama Belakang: </h2>
                        <input 
                            type="text" 
                            name="" 
                            id="" 
                            disabled={true}
                            placeholder="Marscel"
                            className="text-base text-black border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>

                    <div id="profile_info_gender" className="flex flex-col gap-1.5 w-64">
                        <h2 className="text-lg font-medium text-black"> Jenis Kelamin: </h2>
                        <select
                            name="" 
                            id="" 
                            disabled={true}
                            className="text-base text-gray-400 border border-gray-300 rounded-md p-2 w-1/2 bg-transparent" 
                        >
                            <option value="Pria"> Pria </option>
                            <option value="Pria"> Wanita </option>
                        </select>
                    </div>

                    <div id="profile_info_birth_date" className="flex flex-col gap-1.5 w-64">
                        <h2 className="text-lg font-medium text-black"> Tanggal Lahir: </h2>
                        <input 
                            type="date" 
                            name="" 
                            id="" 
                            disabled={true}
                            value={"2000-08-27"}
                            className="text-base text-gray-400 border border-gray-300 rounded-md p-2 w-3/4"
                        />
                    </div>

                    <div id="profile_info_email" className="flex flex-col gap-1.5 w-80">
                        <h2 className="text-lg font-medium text-black"> Email: </h2>
                        <input 
                            type="email" 
                            name="" 
                            id="" 
                            disabled={true}
                            placeholder="owenmarscel@gmail.com"
                            className="text-base text-black border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>

                    <div id="profile_info_phone" className="flex flex-col gap-1.5 w-64">
                        <h2 className="text-lg font-medium text-black"> Nomor Telepon: </h2>
                        <input 
                            type="tel" 
                            name="" 
                            id="" 
                            disabled={true}
                            placeholder="081234567890"
                            className="text-base text-gray-400 border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>

                    <div id="profile_info_address" className="flex flex-col gap-1.5 w-96">
                        <h2 className="text-lg font-medium text-black"> Alamat: </h2>
                        <textarea 
                            name="text" 
                            id="" 
                            disabled={true}
                            placeholder="Jl. Kebon Jeruk No. 27, Jakarta Barat"
                            className="text-base text-gray-400 border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>

                    <div id="profile_info_city" className="flex flex-col gap-1.5">
                        <h2 className="text-lg font-medium text-black"> Kota: </h2>
                        <input 
                            type="text" 
                            name="" 
                            id="" 
                            disabled={true}
                            placeholder="Jakarta"
                            className="text-base text-gray-400 border border-gray-300 rounded-md p-2 w-64"
                        />
                    </div>

                    <div id="profile_info_position" className="flex flex-col gap-1.5 w-64">
                        <h2 className="text-lg font-medium text-black"> Posisi: </h2>
                        <select
                            name="" 
                            id="" 
                            disabled={true}
                            className="text-base text-gray-400 border border-gray-300 rounded-md p-2 w-full bg-transparent"
                        >
                            <option value=""> Head </option>
                            <option value=""> HRD </option>
                            <option value=""> Finance </option>
                            <option value=""> Business Development </option>
                            <option value=""> Teacher </option>
                        </select>
                    </div>

                    <div id="profile_info_division" className="flex flex-col gap-1.5">
                        <h2 className="text-lg font-medium text-black"> Divisi: </h2>
                        <select 
                            name=""
                            id=""
                            className="text-base text-gray-400 border border-gray-300 rounded-md p-2 w-64 bg-transparent"
                            disabled={true}
                        >
                            <option value=""> Full-Time </option>
                            <option value=""> Part-Time </option>
                            <option value=""> Intern </option>
                        </select>
                    </div>

                    <div id="profile_info_region" className="flex flex-col gap-1.5">
                        <h2 className="text-lg font-medium text-black"> Cabang: </h2>
                        <select 
                            name="" 
                            id="" 
                            className="text-base text-gray-400 border border-gray-300 rounded-md p-2 w-64 bg-transparent"
                            disabled={true}
                        >
                            <option value=""> Jabodetabek </option>
                            <option value=""> Banjarmasin </option>
                            <option value=""> Yogyakarta </option>
                        </select>
                    </div>
                    
                </div>

                <div id="profile_action" className="flex justify-end gap-5 pt-5">
                    <a href="/profile/change-password" className="bg-blue-950 text-white font-bold flex items-center gap-2 pl-2 pr-3 rounded-md tracking-wide hover:bg-blue-900 hover:underline hover:shadow-md hover:drop-shadow duration-300">
                        <KeyIcon className="text-white"/>
                        Change Password 
                    </a>

                    <button 
                        id="profile_action_edit" 
                        className="text-white font-bold tracking-widest bg-primary rounded-md py-2 pl-4 pr-5 hover:bg-secondary hover:underline hover:shadow-md hover:drop-shadow duration-300 flex items-center gap-2"
                    >
                        <Pen2Icon className="text-white"/> 
                        Edit 
                    </button>

                    <button 
                        id="profile_action_save" 
                        className="text-white font-bold tracking-widest bg-green-700 rounded-md p-2 w-24 hover:bg-green-500 hover:underline hover:shadow-md hover:drop-shadow duration-300 hidden"
                    >
                        Save 
                    </button>
                </div>
            </div>
        </main>
    )
};
