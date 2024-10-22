import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Card from './component/Card'
function App() {
  
  /*
  useStet(initial value) is hooks which is used to update UI 
  counter hold default value 
  setCounter is a function which update the state
  */
  let [counter,setCounter] = useState(10)   // 10 is default value for our counter 
  const addValue =() =>
  {
    setCounter(counter+1)
    console.log("Clicked value is : ",counter)
  }
  const removeVAlue  = () =>{
    if(counter<=0 || setCounter(counter-1) )
    console.log( `After removing the value : ${counter}`)
  }
  
  let product_item =["macBook","iphone","ipad"]

  return (
    <>
     <h1>Chai aur code</h1>
     <h3>counter value is:{counter}</h3>
     
     <button
    onClick={addValue} className=' bg-black-500 rounded-xl p-2 '
     >Add value </button>
     
     <button   onClick={removeVAlue} className=' bg-green-900 rounded-xl p-2 m-4'     >remove the value </button>

      {/* tailwind -css Demo */}
      <h1 className='bg-green-400 p-4 rounded-xl '>tailwind CSS</h1>
      
     
    <Card product_name ="Apple"  product_item={product_item} />
    <Card product_name = "HP laptop" />
    

    
    

    </>
  )
}

export default App
