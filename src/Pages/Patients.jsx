import PatientHeader from '../Components/AddPatientHeader'
import Recherche from '../Components/barre_recherche'
import Sidebar from '../Components/sidebar'
import SampleTable from '../Components/Table'
export default function Patients() {
  return (
    <div className='flex  gap-2 bg-Blue44 '>
      <Sidebar/>
      <div className='flex flex-col py-[0.5%]'>
      <PatientHeader/>
      <div className="w-full border-t-2 border-1F384C opacity-20 mt-[1.5vh]"></div>
    <div className='flex flex-col w-full mr-[10%]'>
      <Recherche/>
      <SampleTable/>
      </div>
      </div>
    </div>
  )
}
