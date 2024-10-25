import React from 'react'

const personalInformation = () => {
  return (
    <div className='flex flex-col gap-5'>
      {/* Data Collection Form */}
      <div className='border border-black py-1 rounded-lg bg-data-blue'>
        <div className='flex items-center justify-between px-5'>
          <img width={100} src="https://assets.website-files.com/611cbbfb9a41092654f24228/616e52b7d8fc6451b604d39f_logo.png" alt='' />
          <img width={100} className='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Marriott_Logo.svg/1024px-Marriott_Logo.svg.png" alt='' />
        </div>
        <h1 className='text-center font-semibold text-3xl py-3 text-data-text'>DATA COLLECTION FORM</h1>
        <p className='text-end pr-3 text-data-text'>FAQ</p>
      </div>

      {/* Personal Information */}
      <div className='border border-black rounded-lg p-3 text-xl bg-data-blue'>
        <h1 className='font-medium text-data-text'>Personal Information</h1>
      </div>

      {/* Personal Information Data */}
      <div className='border border-black rounded-lg px-10 py-3'>
        <div className='flex items-center gap-5 py-2'>
          <div className='flex flex-col w-[50%]'>
            <lable className="font-medium pb-1">First Name <span className='text-red-600 ml-1'>*</span></lable>
            <input placeholder="Enter Your First Name" className='border h-9 rounded-lg p-2' />
          </div>
          <div className='flex flex-col w-[50%]'>
            <lable className="font-medium pb-1">Last Name <span className='text-red-600 ml-1'>*</span></lable>
            <input placeholder="Enter Your Last Name" className='border h-9 rounded-lg p-2' />
          </div>
        </div>


        <div className='flex items-center gap-5 py-2'>
          <div className='flex flex-col w-[50%]'>
            <lable className="font-medium pb-1">Title <span className='text-red-600 ml-1'>*</span></lable>
            <input placeholder="Enter Your Title" className='border h-9 rounded-lg p-2' />
          </div>
          <div className='flex flex-col w-[50%]'>
            <lable className="font-medium pb-1">Email <span className='text-red-600 ml-1'>*</span></lable>
            <input placeholder="Enter Your Email" className='border h-9 rounded-lg p-2' />
          </div>
        </div>

        <div className='flex flex-col w-[50%] py-2'>
          <lable className="font-medium pb-1">EID <span className='text-red-600 ml-1'>*</span></lable>
          <input placeholder="Enter Employee ID " className='border h-9 rounded-lg p-2' />
        </div>

        <div className='flex gap-5 py-2'>
          <div className='flex flex-col w-[15%]'>
            <label className="font-medium pb-1">Country Code <span className='text-red-600 ml-1'>*</span></label>
            <select className='border h-9 rounded-lg'></select>
          </div>
          <div className='flex flex-col w-[85%]'>
            <lable className="font-medium pb-1">Phone <span className='text-red-600 ml-1'>*</span></lable>
            <input placeholder="Enter Your Phone Number" className='border h-9 rounded-lg p-2' />
          </div>
        </div>

      </div>
    </div>
  )
}

export default personalInformation