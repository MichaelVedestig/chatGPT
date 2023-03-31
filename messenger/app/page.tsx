import { SunIcon, BoltIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline"

export default function Home() {

  return (

    <main className='text-white flex flex-col items-center justify-center h-screen px-2'>
      <h1 className='text-5xl font-bold mb-20'>ChatGTP</h1>

      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-6 w-6"/>
            <h2>
              Examples
            </h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Tell me how to make waffles"</p>
            <p className="infoText">"What is imperative programming?"</p>
            <p className="infoText">"What was project mocking bird?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-6 w-6"/>
            <h2>
              Capabilities
            </h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"One click access to change between ChatGPT models"</p>
            <p className="infoText">"Chat messages are stored in FIreBase's Firestore"</p>
            <p className="infoText">"Hot Toast notifications indicate ChatGPT's behavior"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-6 w-6"/>
            <h2>
              Limitations
            </h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Some models are more prone to non sense output than others"</p>
            <p className="infoText">"Most of the models have silly cencorship rules"</p>
            <p className="infoText">"ChatGPT is based on text, not data, so output might not reflect reality"</p>
          </div>
        </div>
      </div>
    
    
    
    
    
    
    </main>
  
  
  
  )
}
