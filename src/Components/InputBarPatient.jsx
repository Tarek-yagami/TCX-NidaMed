export default function InputBarPatient({ Data, DataSize, DataPlaceholder, DataPlaceholderSize}) {
  return (
    <div className='flex flex-col gap-[1vh] '>
      <h3 className={`text-${DataSize}rem font-medium text-5F696D font-sans`}>{Data}</h3>
      <input
        placeholder={DataPlaceholder}
        className={`py-[1.5vh] pl-[3vw] rounded-xl text-${DataPlaceholderSize}rem border border-E3E3E3 `}
      />
    </div>
  );
}
