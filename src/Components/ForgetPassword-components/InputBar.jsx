export default function InputBar({ Data, DataSize, DataPlaceholder, DataPlaceholderSize}) {
  return (
    <div className='flex flex-col gap-[1vh] '>
      <h3 className={`text-${DataSize}rem font-medium text-5F696D font-sans`}>{Data}</h3>
      <input
        placeholder={DataPlaceholder}
        className={`py-[2.5vh] pl-[2vw] border rounded-3xl text-${DataPlaceholderSize}rem`}
      />
    </div>
  );
}
