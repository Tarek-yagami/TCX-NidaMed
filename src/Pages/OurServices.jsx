
export default function OurServices() {
  return (
    
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-8">Our Services</h2>

      <div className="flex flex-col justify-center md:flex-row gap-8">
        {/* Service 1 */}
        <div className="w-[25%] bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Planification fluide des rendez-vous.</h3>
          <p >On va vous aider a réduire  les délais d'attente pour les patients</p>
        </div>

        {/* Service 2 */}
        <div className="w-[25%] bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Suivi facile  des patients /cas</h3>
          <p>NidaMed va faire un enregistrement précis des traitements passés</p>
        </div>

        {/* Service 3 */}
        <div className="w-[25%] bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Gestion propre des dossiers patients</h3>
          <p> Suivi en temps réel des mises à jour médicales avec un accès rapide et sécurisé aux historiques des patients</p>
        </div>
      </div>
    </div>
  
  )
}
