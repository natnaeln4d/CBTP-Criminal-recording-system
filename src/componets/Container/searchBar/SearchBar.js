import React from 'react'
import Sidebar from '../../SIdebar/Sidebar'

export default function SearchBar() {
  return (
    <div className='sectionContainer'>
    <div className="section">
        <Sidebar />
      <div className='contents-x'>
      <div className='w-full'>
      
      <div className='con w-full'>
      
      <div className='con'>

      <div className="scr -my-2 py-2  sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
            <div className="flex justify-between mb-3">
            <h1 className='text-[2rem]'>Search by id</h1>
            </div>
            <form>   
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative bg-yellow-50 w-[40rem]">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input type="search" id="default-search" class="block w-[40rem] p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search criminal here..." required/>
              <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
          </form>
        </div>
        <div className="align-middle  inline-block w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
            <table className="w-[100%]">
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
                        {/* <tr>
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
                  </tr> */}
         
                 
                  
                      
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

</div>
 
  )
}
