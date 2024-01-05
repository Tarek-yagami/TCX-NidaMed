import { useState } from 'react';
import SearchIcon from '../Images/Search.svg';
import FilterIcon from '../Images/Filter.svg';
import SuiviIcon from '../Images/Star.svg';
import AddIcon from '../Images/Plus.svg';
const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Effectuer des actions avec le texte de recherche
    console.log('Recherche:', searchText);
  };

  const handleFilter = () => {
    // Effectuer des actions pour le filtrage
    console.log('Filtrage activé');
  };
  const handleSuivi = () => {
    // Effectuer des actions pour le filtrage
    console.log('Suivi activé');
  };
  const handleAdd = () => {
    // Effectuer des actions pour le filtrage
    console.log('Ajout activé');
  };
  return (
    <div className='flex flex-col pt-[5%] ml-auto justify-end'>
        <div className='flex flex-row  py-4 justify-end'>
    
      <button onClick={handleAdd} className="mx-2 cursor-pointer flex flex-col">
        <div className='flex flex-row rounded-2xl  bg-Blue px-4 py-2 border'>
        <img src={AddIcon} alt="Suivi" className="w-6 h-6" />
        <p className='px-2 text-White'>Ajouter un patient</p>
        </div>
      </button>
        
    </div>
    <div className='flex flex-row items-center'>
    <div className="flex flex-row items-center rounded-full border py-2 px-2.5 ">
      <input
        type="text"
        placeholder="Rechercher..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="flex-1 p-2 border-none outline-none"
      />
      <button onClick={handleSearch} className="mx-2 cursor-pointer">
        <img src={SearchIcon} alt="Loupe" className="w-6 h-6" />
      </button>
      <button onClick={handleFilter} className="cursor-pointer mx-2">
        <img src={FilterIcon} alt="Filtre" className="w-6 h-6" />
      </button>
      
    </div>
    <div className='items-center justify-center'>
    <button onClick={handleSuivi} className="mx-2  cursor-pointer flex flex-col ">
        <div className='flex flex-row rounded-xl bg-Blue33 px-4 py-2 border'>
        <img src={SuiviIcon} alt="Suivi" className="w-6 h-6" />
        
        </div>
      </button></div>
      </div>
    </div>
  );
};

export default SearchBar;
