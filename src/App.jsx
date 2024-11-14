import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Form from './components/Form'
import ListGroup from './components/ListGroup'

const App = () => {
const [transactions , settransactions] = useState([]);
const [edit , setedit] = useState({
  transaction: {},
  isedit: false,
})


const addtransaction = (text , amount) => {
  settransactions([
    {id:crypto.randomUUID() , text , amount: parseInt(amount)}, ...transactions
  ])
};

const removetransaction = (id) =>{
  settransactions(transactions.filter((item)=>item.id !== id));
}

const edittransaction = (transaction) =>{
 setedit({
  transaction: transaction,
  isedit: true,
})
}
 const updatetransaction = (updatedtransaction) =>{
  settransactions(transactions.map(item =>item.id === updatedtransaction.id ? updatedtransaction : item))
  setedit({
    transaction:{},
    isedit: false,
  })
 };



















  return (
   <>
    <Navbar />
    <div className='contanier p-5'>
    <Form addtransaction ={addtransaction} edit={edit} updatetransaction={updatetransaction} />
    <Home transactions ={transactions} />
    <ListGroup transactions ={transactions} removetransaction={removetransaction} edittransaction={edittransaction} />
    </div>
   </>
  )
}

export default App
