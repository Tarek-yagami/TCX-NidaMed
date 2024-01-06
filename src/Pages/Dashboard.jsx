
import Sidebar from '../Components/sidebar';
import PatientHeader from '../Components/AddPatientHeader';
import Illustration from '../Images/Doctor-cuate 1.svg';

export default function Dashboard() {
  return (
    <div>
      <div className='flex  gap-2 bg-Blue44 '>
        <Sidebar />
        <div className='flex flex-col py-[0.5%]'>
          <PatientHeader />
          <div className="w-full border-t-2 border-1F384C opacity-20 mt-[1.5vh]"></div>
          <p className='text-left text-[2rem] pl-[5%] font-semibold my-[2%]' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.25)' }}>Bienvenue Dr.Username </p>
          <div className='flex w-full h-[45vh] justify-center items-center rounded-xl bg-White mx-[5%] font-bold'>
            <div className='flex flex-col justify-center px-[10%] py-[0.5%] text-[1rem] text-center'>
              <p className='text-[1.5rem] '>Visits for today</p>
              <p className='text-[2.5rem]'>140</p>
              <div className='flex py-[5%] justify-center gap-[2vh] '>
                <div className='h-[20%] bg-Blue66 px-[30%] py-[10%] justify-center gap-[1%]  rounded-2xl'>
                  <p>New Patients</p>
                  <p>20</p>
                </div>
                <div className='h-[20%] bg-Blue66 px-[30%] py-[10%] justify-center gap-[2%]  rounded-2xl'>
                  <p>Old Patients</p>
                  <p>43</p>
                </div>
              </div>
            </div>
            <img className='justify-end ' src={Illustration} alt="" />
          </div>
          <div className='flex w-50 h-[25vh] justify-center items-center rounded-xl bg-White mx-[5%] font-bold'>
            <p>Patient Récents</p>
          </div>
        </div>
      </div>
    </div>
  );
}
