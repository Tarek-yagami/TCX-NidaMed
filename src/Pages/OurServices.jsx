
export default function OurServices() {
  return (
    
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-semibold mb-8">Our Services</h2>

      <div className="flex flex-col justify-center md:flex-row gap-8">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Service 1</h3>
          <p>Description of Service 1.</p>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Service 2</h3>
          <p>Description of Service 2.</p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Service 3</h3>
          <p>Description of Service 3.</p>
        </div>
      </div>
    </div>
  
  )
}
