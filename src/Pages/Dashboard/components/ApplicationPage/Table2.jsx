import { Data } from "./Data"
import { useEffect } from "react"
import Downarrow from "./DownArrow"
import Download from "./Download"
import NextArrow from "./NextArrow"
import PreviousArrow from "./PreviousArrow"
import "./Application.css"

function Table2() {

    useEffect(() => {
        fetch(`https://cash2go-backendd.onrender.com/api/v1/applicant`)
        .then(resp=>resp.json())
        .then(resp=>{
            console.log(resp)
            setData(resp)})
    }, [])

  return (
    <div className='table-container'>
      <table className='table'>
            <thead className='table-head'>
                <tr>
                    <th className='allApp-container'>All Applications</th>
                </tr>
                
                <tr className="second-tableHead">
                    <th className='app-info'>
                        <div>Applicants info</div>
                    </th>
                    <th >
                        <div className='tableHead-container'>
                            <p>Date</p>
                            <Downarrow/>
                        </div>
                        
                    </th>
                    <th >
                        <div className='tableHead-container'>
                            <p>Status</p>
                            <Downarrow/> 
                        </div>
                        
                    </th>
                    <th>
                       <div  className='tableHead-container'>
                            <p>Credit Score</p>
                            <Downarrow/>
                        </div> 
                    </th>
                    <th >
                        <div className='tableHead-container'>
                            <p>Amount</p>
                            <Downarrow/>
                        </div>
                    </th>
                </tr>
            </thead>

            <tbody>
                  {Data && Data.map((item) =>{
                          return (<tr key={item.episode_id}>
                              <td>
                                  {item.applicantInfo }
                                </td>
                              <td>{item.date}</td>
                            <td>{item.status}</td>
                              <td className="status">{item.creditscore}</td>
                              <td>{item.amount}</td>
                              <td><Download/></td>
                            </tr>)
                            }
                            )}
                <tr className='footer' >
                    <td >
                        <div className='pre'>
                            <PreviousArrow/>
                            <p>Pre</p>
                        </div>   
                    </td>
                    <td><div className='page-no'> 
                        <p>1</p> 
                        <p>2</p>
                        <p>...</p>
                        <p>5</p>
                        <p>6</p> 
                        </div>
                    </td>
                    <td >
                        <div className='next'>
                            <p>Next</p> 
                            <NextArrow/>
                        </div> 
                    </td>
                </tr>
                    
            </tbody>
      </table>
    </div>
  )
}
export default Table2
