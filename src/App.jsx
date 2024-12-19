import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState('')
  const [company, setcompany] = useState('')
  const [phonenumber, setphonenumber] = useState('')

  const [allUsers, setAllUsers] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const newArr = [...allUsers, { name, company, phonenumber }]

    setAllUsers(newArr)

    setName('')
    setcompany('')
    setphonenumber('')
  }

  const deleteHandler = (i)=>{

    const copyUsers = [...allUsers]

    copyUsers.splice(i,1)

    setAllUsers(copyUsers)
    
  }


  return (
    <div className='w-50 flex bg-slate-400'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className=' p-5 '>
        

        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value)
          }}
          className='rounded font-medium text-xl px-4 py-2  border-2 mt-4 border-black' type="text" placeholder='Enter Name' />

        <input
          value={company}
          onChange={(e) => {
            setcompany(e.target.value)
          }}
          className='rounded  font-medium text-xl px-4 py-2  border-2 mt-3 border-black' type="text" placeholder='Enter company' />

        <input
          value={phonenumber}
          onChange={(e) => {
            setphonenumber(e.target.value)
          }}
          className='rounded font-medium text-xl px-4 py-2  mt-4 border-2 border-black' type="text" placeholder='Enter phone number' />
        <button className='bg-blue-700 text-white font-medium px-4 py-2 mt-4 rounded text-xl'>add contact</button>
      </form>

      <div className='p-5 bg-gray-200 w-50 flex-col'>
        {allUsers.map(function (elem,i) {

          return <div key={i} className='inline-block m-2 p-3 w-50 rounded-md text-center bg-pink-300'>
          
            <h1 className='text-3xl font-semibold'>{elem.name}</h1>
            <h1 className='mt-2 text-gray-600 font-medium text-xl'> {elem.company}</h1>
            <h3 className='mt-2 text-gray-600 font-medium text-xl'>{elem.phonenumber}</h3>
            <button onClick={()=>{
              deleteHandler(i)
            }} className='bg-red-600 text-sm mt-4 rounded text-white px-3 py-1'>Delete</button>
          </div>
        })}
      </div>

    </div>
  )
}

export default App