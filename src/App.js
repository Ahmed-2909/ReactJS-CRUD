import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import "./App.css";
import Table from './Table';
import PhotoCard from './PhotoCard';



function App() {
  const { register, setValue, handleSubmit, reset, formState: { errors } } = useForm();
  const id = Math.random() + 10;
  const [birthdate, setBirthdate] = useState('');
  const [birthdateError, setBirthdateError] = useState('');
  const [allData, setAllData] = useState([]);
  const [image, setImage] = useState(null);
  const [visibal, setVisibal] = useState(false);
  const [photoCardData, setPhotoCaetData] = useState("");


  const removePhotoHandler = () => {
    setVisibal(false);
    console.log()
    console.log("in the div")
  }
  const handleImageChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };
  const photoHandler = (id) => {
    const photo = allData.filter((ta) => ta.id === id);
    const photoValue = photo[0];
    setPhotoCaetData(photoValue);
    setVisibal(true);
  }
  function handleInputChange(event) {
    const inputDate = new Date(event.target.value); // Convert input to Date object
    const currentDate = new Date(); // Get current date

    if (inputDate > currentDate) {
      setBirthdateError('Birth date cannot be a future date.');
    } else {
      setBirthdateError('');
      setBirthdate(event.target.value);
    }
  }
  const onSubmit = (data) => {

    const totalData = { ...data, birthdate, id, image }
    setAllData((prevUserData) => {
      return [...prevUserData, { ...totalData }]
    })


    if (!birthdate) {
      setBirthdateError('Birth date is required.');
      return;
    }
    reset();
    setBirthdate('')
  }
  const tableDeleteHandler = (id) => {
    const deleteTable = allData.filter((ta) => ta.id !== id);
    console.log(id)
    setAllData([...deleteTable])
  }
  // const listEidt = (id) => {
  //   const index = allData.findIndex(object => {
  //     return object.id === id;
  //   });
  //   console.log(index);
  //   const newArr = allData.splice(index, 1);
  //   setAllData(newArr);
  // }
  const tableEidtHandler = (id) => {
    console.log(id);
    const eidtTable = allData.filter((ta) => ta.id === id);
    // console.log(eidtTable);
    const defaultValues = eidtTable[0];
    console.log(defaultValues);
    // listEidt(id);
    setValue("firstName", defaultValues.firstName);
    setValue("LestName", defaultValues.LestName);
    setValue("HouseNo", defaultValues.HouseNo);
    setValue("Area", defaultValues.Area);
    setValue("PlaceOfBirth", defaultValues.PlaceOfBirth)
    setValue("PhoneNumber", defaultValues.PhoneNumber);
    setBirthdate(eidtTable[0].birthdate);
    // const deleteTable = allData.filter((ta) => ta.id !== id);
    // setAllData([...deleteTable])
    // const index = allData.indexOf(id);
    // console.log(index);
    tableDeleteHandler(id);

  }
  console.log(allData);
  return (
    <div className='bg-black py-28  ' >
      <div className='flex bg-white w-3/5 mx-auto pb-12 flex-nowrap  rounded-2xl shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] my-20  '>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col text-xs w-fit mx-auto space-y-6 my-4 p-8 sm:text-lg lg:text-3xl' >
          <lable className='font-bold' >First Name</lable>
          <input
            placeholder='First Name'
            type="text"
            name='firstName'

            className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[40vw] lg:p-3'
            {...register("firstName", { required: true, minLength: 2 })}
          />
          {errors.firstName && <p className='text-red-600 text-xs sm:text-lg lg:text-2xl font-mono'>First Name Should be 2 Character Long</p>}
          <lable className='font-bold'>last Name</lable>
          <input
            placeholder='Last Name'
            type="text"
            name='LestName'
            className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[40vw] lg:p-3'
            {...register("LestName", { required: true, minLength: 2 })}
          />
          {errors.LestName && <p className='text-red-600 text-xs sm:text-lg lg:text-2xl font-mono'>Lest Name Should be 2 Character Long</p>}
          <lable className='font-bold'>Birth date</lable>
          <input type="date" id="birthdate" value={birthdate} onChange={handleInputChange}
            className='w-fit shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:p-3' />
          {birthdateError && <p className='text-red-600 text-xs sm:text-lg lg:text-2xl font-mono'>{birthdateError}</p>}
          <label className='font-bold'>Address</label>
          <lable className='font-bold'>House No</lable>
          <textarea
            placeholder='House No'
            type="text"
            name='HouseNo'
            className='w-[40vw] shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:p-3'
            {...register("HouseNo", { required: true, minLength: 2 })}
          />
          {errors.HouseNo && <p className='text-red-600 text-xs sm:text-lg lg:text-2xl font-mono'>House No Should be 2 Character Long</p>}
          <lable className='font-bold'>Area/Locality</lable>
          <textarea
            placeholder='Area/Locality'
            type="text"
            name='Area'
            className='w-[40vw] shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:p-3'
            {...register("Area", { required: true, minLength: 5 })}
          />
          {errors.Area && <p className='text-red-600 text-xs sm:text-lg lg:text-2xl font-mono'>Area Should be 2 Character Long</p>}
          <lable className='font-bold'>Place of birth</lable>
          <input
            placeholder='Place of birth'
            type="text"
            name='PlaceOfBirth'
            className='w-[40vw] shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:p-3'
            {...register("PlaceOfBirth", { required: true, minLength: 5 })}
          />
          {errors.PlaceOfBirth && <p className='text-red-600 text-xs sm:text-lg lg:text-2xl font-mono'> Place Of Birth Should be 2 Character Long</p>}
          <lable className='font-bold'>Phone number</lable>
          <input
            placeholder='Phone number'
            type="number"
            name='PhoneNumber'
            className='w-[40vw] shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:p-3'
            {...register("PhoneNumber", { required: true, pattern: /^[0-9]{10}$/ })}
          />
          {errors.PhoneNumber && <p className='text-red-600 text-xs sm:text-lg lg:text-2xl font-mono'>Phone Number Should be 10 Character Long</p>}
          <label className='font-bold'>Profile pic</label>
          <input type='file' name='ProfilePic' onChange={handleImageChange}
            className='w-[40vw] shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-4' />

          <button type='submit' className='relative top-7 bg-blue-500 p-4 space-y-7  rounded-lg text-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:text-blue-500 hover:bg-white  ' style={{
            marginTop: "40px !important"
          }}>Submit</button>
        </form>

      </div>
      <div className='flex flex-col  lg:flex-row'>
        {visibal && <PhotoCard name={photoCardData.firstName + "" + photoCardData.LestName} img={photoCardData.image} phoneNumber={photoCardData.PhoneNumber}
          onRemove={removePhotoHandler} />}
        <div className=' w-3/5 h-fit overflow-y-auto text-left text-sm font-light mx-auto  mb-10 rounded-xl shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] my-10 '
        >
          <table className=" shadow-lg bg-white  rounded-xl w-full mx-auto table-auto sm:text-lg lg:text-2xl  ">
            <thead className="border-b font-medium dark:border-neutral-500 ">
              <tr>

                <th scope="col" className="px-6 py-4">Name</th>
                <th scope="col" className="px-6 py-4">Date Of Birth</th>
                <th scope="col" className="px-6 py-4">Address</th>
                <th scope="col" className="px-6 py-4">Place Of Birth</th>
                <th scope="col" className="px-6 py-4">Phone Number</th>
                <th scope="col" className="px-6 py-4">Edit</th>
                <th scope="col" className="px-6 py-4">Delete</th>

              </tr>
            </thead>
            <tbody >

              {allData.map((item) => (<Table
                key={Math.random() * 100}

                name={item.firstName + " " + item.LestName}
                dateOfBirth={item.birthdate}
                address={item.HouseNo + " " + item.Area}
                placeOfBirth={item.PlaceOfBirth}
                phoneNumber={item.PhoneNumber}
                onDelete={tableDeleteHandler}
                onEdit={tableEidtHandler}
                onPhoto={photoHandler}
                id={item.id}
              />))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
