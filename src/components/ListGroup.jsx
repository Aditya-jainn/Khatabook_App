import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({transactions , removetransaction, edittransaction}) => {
  return (
    <ul className='list-group my-3'>
       {
        transactions.map((transaction) =>{
          return  <ListItem key={transaction.id} transaction={transaction} removetransaction={removetransaction} edittransaction={edittransaction}/>
        })
       }
        
         
        
      
    </ul>
  )
}

export default ListGroup