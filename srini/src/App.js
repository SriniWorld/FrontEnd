
import Additem from './Additem';
import './App.css';
import Header from './Header';
import Life from './Life';
import SearchItem from './SearchItem';
import Serupu from './Serupu';
import { useState,useEffect } from 'react';
 
function App() {

  /*const[items,setitem]= useState(
    [
        {id:1,name:"HCL",checked:true},
        {id:2,name:"TCS",checked:true},
        {id:3,name:"DEL",checked:true},
        {id:4,name:"CTS",checked:true}
    ]
) */
const[items,setitem]= useState([]);
useEffect(
  ()=>{JSON.parse(localStorage.getItem('GET_Names'))},[]
)
const[newItem,setNewItem] = useState('');

const[newSearchItem,setSearchItem] =useState('');

const additem = (newItem) =>{
const id=items.length ? items[items.length -1 ].id +1 : 1;
const addnewitem={id,checked:false,name:newItem}
const listitem = [...items,addnewitem]
setitem(listitem)
localStorage.setItem("GET_Names",JSON.stringify(listitem))
}

const handleCheckbox = (id)=>{
const listitem= items.map((item) => item.id === id ? {...item,checked:!item.checked} : item)
setitem(listitem)
localStorage.setItem("GET_Names",JSON.stringify(listitem))
}
const handleDeletename = (id) =>{
const listitem = items.filter((item) => item.id !== id)
setitem(listitem)
 localStorage.setItem("GET_Names",JSON.stringify(listitem))
}

const handleSubmit = (e)=>{
 e.preventDefault()
 if(!newItem) return;
 console.log(newItem)
additem(newItem)
setNewItem('')
}
 
  return (
     <div className='App'>
      <Header/>
      <Additem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      <SearchItem newSearchItem={newSearchItem} setSearchItem={setSearchItem}/>
      <Life 
      items={items.filter(item => (item.name.toLocaleLowerCase()).includes(newSearchItem.toLocaleLowerCase()))}
       handleCheckbox={handleCheckbox} 
       handleDeletename={handleDeletename}/>
      <Serupu length={items.length}/>
     </div>
  );
}

export default App;
