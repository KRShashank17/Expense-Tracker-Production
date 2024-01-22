import React from 'react'
import { Progress } from 'antd'

const Analytics = ({allTransaction }) => {
        // Transactions
    const totalTransaction = allTransaction.length
    const totalIncomeTransaction = allTransaction.filter((transcation) => transcation.type === "income");
    const totalExpenseTransaction = allTransaction.filter((transcation) => transcation.type === "expense");
    const totalIncomePercent = (totalIncomeTransaction.length / totalTransaction) * 100;
    const totalExpensePercent = (totalExpenseTransaction.length / totalTransaction) * 100;
    
        // TurnOver
    const totalTurnover = allTransaction.reduce(
        (sum , transcation) => sum + transcation.amount , 0);
    const totalIncomeTurnover = allTransaction.filter(
        (transcation) => transcation.type === "income"
    ).reduce((sum , transaction)=> sum + transaction.amount , 0)
    const totalExpenseTurnover = allTransaction.filter(
        (transcation) => transcation.type === "expense"
    ).reduce((sum , transaction)=> sum + transaction.amount , 0)

    const totalIncomeTurnoverPercent = (totalIncomeTurnover / totalTurnover) * 100;
    const totalExpenseTurnoverPercent = (totalExpenseTurnover / totalTurnover) * 100;

    return (
    <>
        <div className="row m-3">
            
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        Total Transactions : {totalTransaction}
                    </div>
                    <div className="card-body">
                        <h5 className='text-success'>Income : {totalIncomeTransaction.length}</h5>
                        <h5 className='text-danger'>Expense : {totalExpenseTransaction.length}</h5>
                    </div>

                    <div>
                        <Progress type = "circle" strokeColor={'green'}
                        className= "mx-2"
                        percent={totalIncomePercent.toFixed(0) }
                        />
                        <Progress type = "circle" strokeColor={'red'}
                        className= "mx-2"
                        percent={totalExpensePercent.toFixed(0) }
                        />
                    </div>
                </div>
            </div>


            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                            Total TurnOver : {totalTurnover}
                        </div>
                        <div className="card-body">
                            <h5 className='text-success'>Income : {totalIncomeTurnover}</h5>
                            <h5 className='text-danger'>Expense : {totalExpenseTurnover}</h5>
                        </div>

                        <div>
                            <Progress type = "circle" strokeColor={'green'}
                            className= "mx-2"
                            percent={totalIncomeTurnoverPercent.toFixed(0) }
                            />
                            <Progress type = "circle" strokeColor={'red'}
                            className= "mx-2"
                            percent={totalExpenseTurnoverPercent.toFixed(0) }
                            />
                        </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Analytics