const Signup = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-amber-600'>
      <div className='border-amber-900 rounded-xl w-100'>
        <div className='text-center text-4xl text-yellow-400 p-2'>Sign Up Here</div>
        <div>
          <div className='flex flex-col justify-between gap-1 p-2'>
            <span className='text-xl text-white'>Fullname </span>
            <input type="text" className='border-2 border-white bg-white rounded-md p-1.5' placeholder='fullname'/>
          </div>
          <div className='flex flex-col justify-between gap-1 p-2'>
            <span className='text-xl text-white'>Username </span>
            <input type="text" className='border-2 border-white bg-white rounded-md p-1.5' placeholder='username'/>
          </div>
          <div className='flex flex-col justify-between gap-1 p-2'>
            <span className='text-xl text-white'>Email </span>
            <input type="email" className='border-2 border-white bg-white rounded-md p-1.5' placeholder='email'/>
          </div>
          <div className='flex flex-col justify-between gap-1 p-2'>
            <span className='text-xl text-white'>Password </span>
            <input type="password" className='border-2 border-white bg-white rounded-md p-1.5' placeholder='password'/>
          </div>
          <div className='flex justify-between gap-4 items-center p-2'>
            <button className='w-full bg-amber-400 rounded-md p-2 hover:bg-amber-800'>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
