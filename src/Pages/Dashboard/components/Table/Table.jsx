import React from 'react'
import Approved from './Approved'
import ApplicantImage from './ApplicantImage'
import Applicant from './Applicant'
import Rejected from './Rejected'
import Pending from './Pending'
import Downarrow from './Downarrow'
import Download from './Download'
import PreviousArrow from './PreviousArrow'
import NextArrow from './NextArrow'
import '../../components/Table.css'


const Table = () => {
  return (
    <div className='table-container'>
      <table className='table'>
            <thead className='table-head'>
                <tr>
                    <th className='allApp-container'>All Applications</th>
                </tr>
            </thead>
            <thead>
                <tr>
                    <th className='app-info'>Applicants info</th>
                    <th >
                        <div className='heading-container'>
                            <p>Date</p>
                            <Downarrow/> 
                        </div>
                        
                    </th>
                    <th >
                        <div className='heading-container'>
                            <p>Status</p>
                            <Downarrow/> 
                        </div>
                        
                    </th>
                    <th>
                       <div  className='heading-container'>
                            <p>Credit Score</p>
                            <Downarrow/>
                        </div> 
                    </th>
                    <th >
                        <div className='heading-container'>
                            <p>Amount</p>
                            <Downarrow/>
                        </div>
                    </th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>
                        <div className='appInfo-container'>
                            <ApplicantImage/>
                            <Applicant name={'Ogbeni Mallam'}/>
                        </div>
                    </td>
                    <td>02/04/2023</td>
                    <td><Approved/></td>
                    <td>810</td>
                    <td>N35,000.00</td>
                    <td><Download/></td>
                </tr>

                <tr>
                    <td>
                        <div className='appInfo-container'>
                            <ApplicantImage/>
                            <Applicant name={'Rukayat Stutern'}/>
                        </div>
                        
                    </td>
                <td>02/04/2023</td>
                <td><Approved/></td>
                <td>205</td>
                <td>N102,000.00</td>
                <td><Download/></td>
                </tr>

                <tr>
                    <td>
                        <div className='appInfo-container'>
                            <ApplicantImage/>
                            <Applicant name={'Muktar Beello'}/>
                        </div>
                    </td>
                    <td>01/04/2023</td>
                    <td><Rejected/></td>
                    <td>332</td>
                    <td>N40,000.00</td>
                    <td><Download/></td>
                </tr>

                <tr>
                <td>
                        <div className='appInfo-container'>
                            <ApplicantImage/>
                            <Applicant name={'Olorunyomi Stutern'}/>
                        </div>
                    </td>
                    <td>01/04/2023</td>
                    <td><Rejected/></td>
                    <td>790</td>
                    <td>N50,000.00</td>
                    <td><Download/></td>
                </tr>

                <tr>
                    <td>
                        <div className='appInfo-container'>
                            <ApplicantImage/>
                            <Applicant name={'Ekere Stutern'}/>
                        </div>
                    </td>
                    <td>01/04/2023</td>
                    <td><Pending/></td>
                    <td>650</td>
                    <td>N50,000.00</td>
                    <td><Download/></td>
                </tr>
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

export default Table
