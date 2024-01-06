import InputBar from "./InputBarPatient.jsx"
import Upload from "../Images/CloudUploadFill.svg"
export default function addPatient({Data,DataPlaceholder}) {
  return (
    <div className="flex flex-col items-center bg-FFFFFF w-[30vw] rounded-xl border-E3E3E3">
       <div className="w-[25vw] mt-[3vh]">
      <InputBar DataPlaceholder={"Nom"} className="h-[3.5vh]"/>
      </div>
      <div className="w-[25vw]">
      <InputBar DataPlaceholder={"Age"}/>
      </div>
      <div className="w-[25vw]">
      <InputBar DataPlaceholder={"Sexe"}/>
      </div>
      <div className="w-[25vw]">
      <InputBar DataPlaceholder={"Maladie"}/>
      </div>
      <div class="relative mt-[1vh]">
        <input placeholder="Dossier médical" className="py-[1.5vh] pl-[3vw] pr-10  rounded-xl  border border-E3E3E3 w-[25vw] "/>
        <img src={Upload} alt="Icon" class="absolute right-5 top-3 w-6 h-6"/>
      </div>
      <div className="flex mt-[1vh] mb-[1vh]">
        <input type="checkbox" class="form-checkbox border-blue-500" />
        <p className="text-959292 font-sans font-medium tl-[2vw]">Suivis</p>
      </div>
      <div >
      <button className="font-sans font-semibold w-[25vw] h-[7vh] bg-4EADDE rounded-xl mb-[3.5vh] hover:opacity-80 ">Enregister</button>
      </div>
    </div>
  )
}
