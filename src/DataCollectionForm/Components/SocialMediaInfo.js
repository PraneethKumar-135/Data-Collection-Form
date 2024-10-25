import React from 'react'

const SocialMediaInfo = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className='border border-black rounded-lg p-3 text-xl bg-data-blue'>
                <h1 className='font-medium text-data-text'>Social Media Agency Information</h1>
            </div>
            <div className='border border-black rounded-lg px-5 py-3 '>
                <p>Complete only if your hotel uses an outside agency to manage  the hotel's social media accounts</p>
                <div className='flex items-center gap-5 pt-7 pb-4'>
                    <div className='flex flex-col w-[50%]'>
                        <lable className="font-medium pb-1">Name of Agency <span className='text-red-600 ml-1'>*</span></lable>
                        <input placeholder="Enter Name of the Agency" className='border h-9 rounded-lg p-2' />
                    </div>
                    <div className='flex flex-col w-[50%]'>
                        <lable className="font-medium pb-1">Primary Contact<span className='text-red-600 ml-1'>*</span></lable>
                        <input placeholder="Enter Primary Contact Name" className='border h-9 rounded-lg p-2' />
                    </div>
                </div>
                <div className='flex items-center gap-5 pb-7'>
                    <div className='flex flex-col w-[50%]'>
                        <lable className="font-medium pb-1">Primary Contact Email Address </lable>
                        <input placeholder="Enter Primary Contact Email Address" className='border h-9 rounded-lg p-2' />
                    </div>
                    <div className='flex flex-col w-[50%]'>
                        <lable className="font-medium pb-1">Primary Contact Phone Number</lable>
                        <input placeholder="Enter Primary Contact Phone Number" className='border h-9 rounded-lg p-2' />
                    </div>
                </div>
                <p className='flex items-center gap-5'>
                    <span>Not Applicable/Hotel does not use agency </span>
                    <input type='checkbox' />
                </p>
            </div>
        </div>
    )
}

export default SocialMediaInfo