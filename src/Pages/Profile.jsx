import Profile from "../Images/profile.svg";
import Sidebar from "../Components/sidebar";
import PatientHeader from "../Components/AddPatientHeader";
export default function ProfileDoc() {
    
  return (
    <div className='flex  gap-2 bg-Blue44 h-[100vh] '>
      <Sidebar/>
      <div className='flex flex-col py-[0.5%]'>
      <PatientHeader/>
      <div className="w-auto border-t-2 border-1F384C opacity-20 mt-[1.5vh]"></div>
    <div className="flex flex-col items-center justify-center ">
      <div className=" flex items-end  ml-[85%] mt-6 mb-4">
        <button className="border bg-White text-center px-4 py-2">Modifier</button>
      </div>

      <img
        src={Profile}
        alt="Profile Icon"
        className="w-32 h-32 mb-2"
      />
      <p className="text-left text-2xl font-semibold mb-4 text-shadow">
        Bienvenue Dr.Benameur
      </p>

      <div className="flex flex-col items-center">
        <p>Bibliographie</p>
        <input
          type="text"
          placeholder="Ex: dentiste"
          className="py-[1.75vh] w-50vw px-[3vw] rounded-2xl text-2rem border mb-4"
        />
        <p>Spécialité</p>
        <input
          type="text"
          placeholder="Ex: dentiste"
          className="py-[1.75vh] w-50vw px-[3vw] rounded-2xl text-2rem border mb-4"
        />
        <p>Sexe</p>
        <input
          type="text"
          placeholder="Ex: Male"
          className="py-[1.75vh] w-50vw px-[3vw] rounded-2xl text-2rem border mb-4"
        />

        <p>Mot de passe</p>
        <input
          type="password"
          placeholder="Ex: je suis un medecin dentiste..."
          className="py-[1.75vh] w-50vw px-[3vw] rounded-2xl text-2rem border"
        />
      </div>
    </div></div></div>
  );
}
