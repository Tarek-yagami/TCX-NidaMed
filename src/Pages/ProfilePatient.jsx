import PatientHeader from "../Components/AddPatientHeader";
import ProfileB from "../Images/profile_blue.svg"
export default function ProfilePatient() {
  return (
    <div>
      <PatientHeader/>
      <div className=" bg-Blue66 flex flex-col justify-end my-[3%] ml-[78%] mr-[3%]">
        <button className=" border bg-White text-center"> Modifier </button>
    </div>
    <img src={ProfileB} alt="" />
    <div className="flex ,flex-col">

    </div>
    </div>
  )
}
