import React, { useEffect, useState } from 'react'

const Form = ({addtransaction , edit , updatetransaction }) => {
  const [text , settext] = useState("");
  const [amount , setamount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    edit.isedit ? updatetransaction({id : edit.transaction.id , text , amount : parseInt(amount)})
    :addtransaction(text , amount);

    setamount("")
    settext("")
  };

  useEffect (()=>{
    setamount(edit.transaction.amount);
    settext(edit.transaction.text);
  },[edit])


 
  
  

 
 

  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
            <div class="mb-3">
             <input type="number" className="form-control" placeholder='Amount' onChange={e=>setamount(e.target.value)} value={amount}/>
            </div>
            <textarea required
                placeholder='Transaction'
                className='form-control rounded-0'  onChange={e=>settext(e.target.value)} value={text}> 
            </textarea>
            <button type="submit" className="btn btn-primary">Save Transaction</button>
    </form>
  )
  
}

export default Form