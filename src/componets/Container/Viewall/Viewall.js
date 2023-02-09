import React from 'react'
import Sidebar from '../../SIdebar/Sidebar'
import './Viewall.css'
import { useState ,useEffect} from 'react'

export default function Viewall() {
   const [data,setData] = useState();
   const [Isloaded,setIloaded]=useState();
   const [errot,setError]=useState(null);
 



   return (
    <div className='sectionContainer'>
    <div className="section">
        <Sidebar />
      <div className='contents-x'>
      <div className='con w-full'>
      
      <div className='con'>

<div className="scr -my-2 py-2  sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
            <div className="flex justify-between">
            <h1 className='text-[2rem]'>All criminals</h1>
            </div>
        </div>
        <div className="align-middle  inline-block w-[8-%] shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
            <table className="min-w-full">
                <thead>
                    <tr>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">ID</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">First Name</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Age</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Crime Type</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Crime Discription</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Status</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"> Year Of Sentence</th>
                        <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                    </tr>
                </thead>
              
                <tbody className="scroll bg-white overflow-y-scroll h-[50vh]">
                        <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div className="flex items-center">
                                    <div>
                                        <div className="text-sm leading-5 text-gray-800">#1</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div className="text-sm leading-5 text-blue-900">Dereje Obera</div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">32</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">danger</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span className="relative text-xs">active</span>
                            </span>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                            </td>
                  </tr>
                  <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div className="flex items-center">
                                    <div>
                                        <div className="text-sm leading-5 text-gray-800">#1</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div className="text-sm leading-5 text-blue-900">Dereje Obera</div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">32</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">danger</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span className="relative text-xs">active</span>
                            </span>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                            </td>
                  </tr>
                  <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div className="flex items-center">
                                    <div>
                                        <div className="text-sm leading-5 text-gray-800">#1</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div className="text-sm leading-5 text-blue-900">Dereje Obera</div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">32</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">danger</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                <span className="relative text-xs">active</span>
                            </span>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                <button className=" px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                            </td>
                  </tr>
                  <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div className="flex items-center">
                                    <div>
                                        <div className="text-sm leading-5 text-gray-800">#1</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div className="text-sm leading-5 text-blue-900">Dereje Obera</div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">32</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">danger</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                <span className="relative inline-block  py-1 font-semibold text-red-900 leading-tight">
                                <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                <span className="relative text-xs">not active</span>
                            </span>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                            </td>
                  </tr>
                  <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div className="flex items-center">
                                    <div>
                                        <div className="text-sm leading-5 text-gray-800">#1</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div className="text-sm leading-5 text-blue-900">Dereje Obera</div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">32</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">danger</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                <span className="relative inline-block  py-1 font-semibold text-red-900 leading-tight">
                                <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                <span className="relative text-xs">not active</span>
                            </span>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                            </td>
                  </tr>
                  <tr>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div className="flex items-center">
                                    <div>
                                        <div className="text-sm leading-5 text-gray-800">#1</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                <div className="text-sm leading-5 text-blue-900">Dereje Obera</div>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">32</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">danger</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                                <span className="relative inline-block  py-1 font-semibold text-red-900 leading-tight">
                                <span aria-hidden className="absolute inset-0 bg-red-200 opacity-50 rounded-full"></span>
                                <span className="relative text-xs">not active</span>
                            </span>
                            </td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">September 12</td>
                            <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                            </td>
                  </tr>
                 
                  
                      
                </tbody>
               
            </table>
          <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
<div>
    <p className="text-sm leading-5 text-blue-700">
        Showing
        <span className="font-medium">1</span>
        to
        <span className="font-medium">200</span>
        of
        <span className="font-medium">2000</span>
        results
    </p>
</div>

</div>
</div>
</div>
</div>
            
          </div>
    
      </div>
    </div>

</div>
  
  )
}
