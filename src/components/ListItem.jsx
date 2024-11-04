import React from 'react'

const ListItem = ({transaction , removetransaction ,edittransaction}) => {
  return (
    <li className='list-group-item'>
            <h1>{transaction.text}</h1>
            <p>{transaction.amount}</p>
            <span className='float-end'>
                <button onClick={()=>edittransaction(transaction)} className='btn btn-warning btn-sm'>Edit</button>
                <button onClick={()=>removetransaction(transaction.id)} className='btn btn-danger btn-sm'>Delete</button>
            </span>
        </li>
  )
}

export default ListItem