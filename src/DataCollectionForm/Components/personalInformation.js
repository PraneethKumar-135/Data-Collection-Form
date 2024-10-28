import React, { useState } from 'react';

const PersonalInformation = () => {
  const [Personaldata, setPersonalData] = useState({
    FirstName: "",
    LastName: "",
    Title: "",
    Email: "",
    Eid: "",
    CountryCode: "",
    PhoneNumber: "",
  });

  const handlePersonalData = (e) => {
    const { name, value } = e.target;
    setPersonalData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(Personaldata);
  

  return (
    <div className='flex flex-col gap-5'>
      {/* Data Collection Form */}
      <header className='border border-black py-1 rounded-lg bg-data-blue'>
        <div className='flex items-center justify-between px-5'>
          <img width={100} src="https://assets.website-files.com/611cbbfb9a41092654f24228/616e52b7d8fc6451b604d39f_logo.png" alt='' />
          <img width={100} className='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Marriott_Logo.svg/1024px-Marriott_Logo.svg.png" alt='' />
        </div>
        <h1 className='text-center font-semibold text-3xl py-3 text-data-text'>DATA COLLECTION FORM</h1>
        <p className='text-end pr-3 text-data-text'>FAQ</p>
      </header>

      {/* Personal Information */}
      <header className='border border-black rounded-lg p-3 text-xl bg-data-blue'>
        <h1 className='font-medium text-data-text'>Personal Information</h1>
      </header>

      {/* Personal Information Data */}
      <div className='border border-black rounded-lg px-10 py-3'>
        <section className='flex items-center gap-5 py-2'>
          <aside className='flex flex-col w-[50%]'>
            <label className="font-medium pb-1">First Name <span className='text-red-600 ml-1'>*</span></label>
            <input
              name="FirstName"
              value={Personaldata.FirstName}
              onChange={handlePersonalData}
              placeholder="Enter Your First Name"
              className='border h-9 rounded-lg p-2'
            />
          </aside>
          <aside className='flex flex-col w-[50%]'>
            <label className="font-medium pb-1">Last Name <span className='text-red-600 ml-1'>*</span></label>
            <input
              name="LastName"
              value={Personaldata.LastName}
              onChange={handlePersonalData}
              placeholder="Enter Your Last Name"
              className='border h-9 rounded-lg p-2'
            />
          </aside>
        </section>

        <section className='flex items-center gap-5 py-2'>
          <aside className='flex flex-col w-[50%]'>
            <label className="font-medium pb-1">Title <span className='text-red-600 ml-1'>*</span></label>
            <input
              name="Title"
              value={Personaldata.Title}
              onChange={handlePersonalData}
              placeholder="Enter Your Title"
              className='border h-9 rounded-lg p-2'
            />
          </aside>
          <aside className='flex flex-col w-[50%]'>
            <label className="font-medium pb-1">Email <span className='text-red-600 ml-1'>*</span></label>
            <input
              name="Email"
              value={Personaldata.Email}
              onChange={handlePersonalData}
              placeholder="Enter Your Email"
              className='border h-9 rounded-lg p-2'
            />
          </aside>
        </section>

        <section className='flex flex-col w-[50%] py-2'>
          <label className="font-medium pb-1">EID <span className='text-red-600 ml-1'>*</span></label>
          <input
            name="Eid"
            value={Personaldata.Eid}
            onChange={handlePersonalData}
            placeholder="Enter Employee ID"
            className='border h-9 rounded-lg p-2'
          />
        </section>

        <section className='flex gap-5 py-2'>
          <aside className='flex flex-col w-[15%]'>
            <label className="font-medium pb-1">Country Code <span className='text-red-600 ml-1'>*</span></label>
            <select
              name="CountryCode"
              value={Personaldata.CountryCode}
              onChange={handlePersonalData}
              className='border h-9 rounded-lg'
            >
              {/* Add your options here */}
            </select>
          </aside>
          <aside className='flex flex-col w-[85%]'>
            <label className="font-medium pb-1">Phone <span className='text-red-600 ml-1'>*</span></label>
            <input
              name="PhoneNumber"
              value={Personaldata.PhoneNumber}
              onChange={handlePersonalData}
              placeholder="Enter Your Phone Number"
              className='border h-9 rounded-lg p-2'
            />
          </aside>
        </section>
      </div>
    </div>
  );
};

export default PersonalInformation;
