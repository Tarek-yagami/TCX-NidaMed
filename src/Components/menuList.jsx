
export default function menuList({Icon,title,active}) {
  return (
    <div className="flex flex-row gap-[1vw] px-[3%]">
            <img src={Icon} alt="" />
            <p>{title}</p></div>
  )
}
