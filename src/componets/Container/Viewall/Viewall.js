import React from 'react'
import Sidebar from '../../SIdebar/Sidebar'
import './Viewall.css'
import { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Viewall() {
   const [items,setItems] = useState();
   const [Isloaded,setIsloaded]=useState();
   const [errot,setError]=useState(null);
   useEffect(()=>{
    const fetchData = async () => {
        try {
          
         
          const response = await fetch("https://mocki.io/v1/4f7bf80f-e4c8-44c5-9be2-afc649a5af96",{
            method:"GET",
            headers:{
              'content-Type':'application/json',
            }
          })
          const json = await response.json();
          console.log(json)
           console.log(json)
        
        
          setIsloaded({
              isLoaded:true
          })
            setItems(json.cars)
          console.log(json);
        } catch (error) {
          console.log("error", error);
        }
      };
  
      fetchData();
   },[]);
   if (Error) {
      return <div className='sectionContainer'>
      <div className="section">
          <Sidebar />
        <div className='contents-x'>
        <div className='con w-full'>
      
      <div className='con'>

<div className="scr -my-2 py-2  sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
            <div className="flex justify-between">
            <h1 className='text-[2rem]'>All Criminals</h1>
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
              
                <tbody className="scroll bg-white overflow-y-scroll w-full h-[50vh] ">
                <div className='p-2 w-[100%]'>
                    <div class="p-4 w-[100%] mb-4  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-700 dark:text-red-400" role="alert">
                        <span class="font-medium">Danger alert!</span>  Error: {Error.message}
                            </div>
                    </div>
            

             
                 
                  
                      
                </tbody>
               
            </table>

</div>
</div>
</div>
            
          </div>
         
       

        </div>
      </div>

  </div> 
   

    }
    else if (!Isloaded) {
      return <div className='sectionContainer'>
      <div className="section">
          <Sidebar />
        <div className='contents-x'>
        <div className='con w-full'>
      
      <div className='con'>

<div className="scr -my-2 py-2  sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
            <div className="flex justify-between">
            <h1 className='text-[2rem]'>All Criminals</h1>
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
                <div>
                        
                 <div class="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-700 dark:text-yellow-300" role="alert">
                        <span class="font-medium">!</span> Loading...
                     </div>
                    </div>;
            

             
                 
                  
                      
                </tbody>
               
            </table>
    
</div>
</div>
</div>
            
          </div>
         
       

        </div>
      </div>

  </div> 
    }
    else{
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
            <h1 className='text-[2rem]'>All Criminals</h1>
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
          {
            items.map((data,index) => (
           
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
                           <Link to='/singlecriminal' >
                           <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button></Link>  
                          </td>
                </tr>

))
}
            

             
                 
                  
                      
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
}
