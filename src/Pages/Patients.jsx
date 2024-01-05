import Recherche from '../Components/barre_recherche'
import SampleTable from '../Components/Table'
export default function Patients() {
  return (
    <div className='flex flex-col w-full mr-[10%]'>
      <Recherche/>
      <SampleTable/>
      </div>
  )
}
