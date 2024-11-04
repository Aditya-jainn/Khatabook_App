import React from 'react'






const Home = ({transactions}) => {
  const income = transactions.filter((transaction) =>transaction.amount > 0)
  .reduce((p , c)=> p+c.amount ,0);

  const expences = transactions.filter((transaction) =>transaction.amount < 0)
  .reduce((p , c)=> p+c.amount ,0);

  const balance = transactions.reduce((p ,c)=> {
       return p + c.amount
  },0);








  return (
    <div class="container text-center">
    <div class="row align-items-center" >
      <div class="col bg-success">
        <h3>Income</h3>
        <h6>{income}</h6>
      </div>
      <div class="col bg-danger">
      <h3>Expence</h3>
      <h6>{expences}</h6>
       </div>
       <div class="col bg-primary">
       <h3>Balance</h3>
      <h6>{balance}</h6>
      </div>
    </div>
  </div>
  )
}





export default Home