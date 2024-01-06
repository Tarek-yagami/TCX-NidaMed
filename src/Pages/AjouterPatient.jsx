import PatientInfo from '../Components/InfoPatient'
import Header from '../Components/AddPatientHeader'
import Footer from '../Components/AddPatientFooter'

export default function AjouterPatient() {
  return (
      <div className='min-h-screen w-screen flex flex-col bg-EEF8FD items-center'>
      <div className='mt-[1.5vh]'>
      <Header/>
      </div>
      <div class="w-full border-t-2 border-1F384C mt-[1.5vh]"></div>
      <h1 className='font-sans font-bold text-44728B text-5xl mt-[5vh]'>Ajouter un patient</h1>
      <div className='mt-[5vh]'>
      <PatientInfo/>
      </div>
      <Footer/>
    </div>
  )
}