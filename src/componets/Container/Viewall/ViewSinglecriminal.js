import React from 'react'
import Sidebar from '../../SIdebar/Sidebar'
import Photo from '../../../componets/Photo/rob--profile.jpg'
import { useState ,useEffect} from 'react'

export default function ViewSinglecriminal() {
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
        return  <div className='sectionContainer'>
        <div className="section">
            <Sidebar />
          <div className='contents-x py-5 w-[70%]'>
          <div className='py-5 '>
                    <div class="p-4 w-[100%] mb-4  text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-700 dark:text-red-400" role="alert">
                        <span class="font-medium">Danger alert!</span>  Error: {Error.message}
                            </div>
                    </div>
       

          </div>
        </div>

    </div>
    }
     else if (!Isloaded) {
        return  <div className='sectionContainer'>
        <div className="section">
            <Sidebar />
          <div className='contents-x py-5 w-[70%]'>
          <div className='py-5 '>
        
                        
                        <div className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-700 dark:text-yellow-300" role="alert">
                               <span className="font-medium">!</span> Loading...
                            </div>
                           </div>;
        

          </div>
        </div>

    </div>
     }
     else{
  return (<div className='sectionContainer'>
    <div className="section">
        <Sidebar />
      <div className='contents-x'>
      <div className='px-[14rem] py-10'>
      {
            items.map((data,index) => (

<div className="w-[50rem] p-4  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   
    <div className="flex flex-col items-center pb-10">
        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={Photo} alt="Bonnie image"/>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Dereji Obera</h5>
        <div class="flex space-x-[16.5rem] ">
        <span className='text-sm text-gray-300'>ID  </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 block justify-between">1200FG</span>
        </div>
        <div class="flex  space-x-[18rem]">
        <span className='text-sm text-gray-300'> Age </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 block justify-between">33</span>
        </div>
        <div class="flex  space-x-[14.5rem]">
        <span className='text-sm text-gray-300'>Crime Type </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 block justify-between">theif</span>
        </div>
        <div class="flex ml-2 space-x-16 ">
        <span className='text-sm text-gray-300'>Crime Discription </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 block justify-between">lorem lorem 
        lorem lorem lore  lorem lorem lorem lorem lorem lorem</span>
        </div>
        <div class="flex  space-x-[11rem]">
        <span className='text-sm text-gray-300'>Year Of Sentence </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 block justify-between">12 Year</span>
        </div>
       
       
    </div>
</div>
            ))
        }

      
    </div>

      </div>
    </div>

</div>
   )
  
}
}
