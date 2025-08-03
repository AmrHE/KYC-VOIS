import { useEffect, useState } from 'react';
import Form from './comps/Form'

function App() {
  const selectedMode = JSON.parse(localStorage.getItem('isDarkMode')!)
  const [isDark, setIsDark] = useState(selectedMode? true : false);


  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDark))
  }, [isDark])

  return (
    <div className={`my-0 p-10 text-center bg-white min-h-screen dark:bg-black ${isDark ? "dark" : ""}`}>
      <div className='bg-white dark:bg-black flex items-center justify-between w-full md:w-2/3 lg:w-1/3 mx-auto mb-10'>
        <h1 className='text-black dark:text-white text-3xl font-semibold'>KYC Form</h1>
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded shadow hover:bg-gray-300 dark:hover:bg-gray-700 transition"
        >
          {isDark ? "☀️ Light Mode": "🌙 Dark Mode" }
        </button>
      </div>
      <Form/>
    </div>
  )
}

export default App
