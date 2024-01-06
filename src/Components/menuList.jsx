
export default function menuList({Icon,title,active}) {
  return (
    <div className="flex flex-row gap-[1vw] px-[2%] mb-[5vh]">
            <img src={Icon} alt="" />
            <p>{title}</p></div>
  )
}
