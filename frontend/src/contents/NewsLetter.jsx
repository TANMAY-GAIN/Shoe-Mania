

const NewsLetter = () => {
  const onSubmitHandler=(e)=>{
    e.preventDefault();
  }
  return (
    <div className='text-center'>
        <p className='text-2x1 font-medium text-gray-800'>Subscribe now & 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nobis magnam beatae, rem ut modi aspernatur ex minus? Illum distinctio, ipsum officiis laudantium labore nulla quis rem sint explicabo pariatur.</p>
        <form  onSubmit={onSubmitHandler}className='w-full sm:w-1/2 h-[35px] flex items-center gap-3 mx-auto my-6 border border-gray-400 pl-3'>
            <input className='w-full  sm:flex-1 outline-none'type='email' required placeholder='Enter your email'/>
            <button type='submit' className='flex items-center h-[35px] bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetter