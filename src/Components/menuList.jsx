import { Link } from 'react-router-dom';
export default function menuList({Icon,title,path,active}) {
  return (
    <Link to={path}><div className="flex flex-row gap-[1vw] px-[%] mb-[5vh]">
            <img src={Icon} alt="" />
            <p>{title}</p></div></Link>
  )
}
