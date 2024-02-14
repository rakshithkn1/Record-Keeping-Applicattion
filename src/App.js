import './App.css'
import Header from './componenets/header'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
// import { Field } from './Field';

function App() {
const[name,setName]=useState('')

const[email,setemail]=useState('')
const[data,setdata]=useState([])

const removeitem=(ind)=>{

let arr=data
arr.splice(ind,1)
setdata([...arr])


 
}


const adddata=()=>{
  setdata([
    ...data,
    {
    name,
    email
  }])
  setName('')
  setemail('')
}

console.log(name);
  return (
   <div className="app">
    <Header></Header>
    <div className='text'>
    <Stack spacing={2} direction="row">
    < TextField value={name} 
    id="outlined-basic"
     label="Name" 
     onChange={(e)=>setName(e.target.value)}
     variant="outlined" 
     style={{margin:'2px'}} />
    < TextField value={email} 
   onChange={(e)=>setemail(e.target.value)}
    id="outlined-basic" 
    label="Email" 
    variant="outlined" 
    style={{margin:'2px'}} />
    <Button onClick={adddata} variant="contained" style={{backgroundColor:'red'}}>  <AddIcon/></Button>
    </Stack>
  

    </div>

    <div className='data'>
             <div className='data_1'>
               <h4> Name</h4>
               <h4> Email</h4>
               <h4 >Remove</h4>
             </div>
             {
            data.map((ele,ind)=>{
              return(
                <div className='data_1'>
                <h4> {ele.name}</h4>
                <h4> {ele.email}</h4>
                <button onClick={()=>removeitem(ind)}>Remove</button>
              </div>
              )

            })
          }

          </div>
        

   
      {
        // data.map(({Name,Email})=>{
        //   return(
        //     <div className='data'>
        //     <div className='data_1'>
        //       <h4> Name:{Name}</h4>
        //       <h4> Email:{Email}</h4>
        //       <button onClick={}>Remove</button>
        //     </div>
        //     </div>
        //   )
        

        // })

        // data.map((obj ,ind)=>{
        //   return(
        //     <Field
        //     Name={obj.Name}
        //     Email={obj.Email}
        //     />
        

        //   )

        // })
      }
   </div>
  );

}

export default App;
