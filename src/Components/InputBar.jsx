
export default function InputBar({Data,DataPlaceholder}) {
  return (
    <div className='flex flex-col gap-[1vh] '>
            <h3 className='text-[2rem] font-medium text-BlueDark'>{Data}</h3>
            <input placeholder={DataPlaceholder} className='py-[2.5vh] w-[37vw] pl-[2vw] rounded-xl text-[2rem] border '/>
        </div>
  )
}
