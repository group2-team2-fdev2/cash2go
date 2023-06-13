
import RightDirectionIcon from './RightDirectionIcon'


function Heading() {
  return (
    <div className='heading-container'>
        <div className='heading'> 
            <div className='top-application'>
            <h2>Application</h2>
            <RightDirectionIcon/>
            <h2>All application </h2>
            </div>
        
            <div className='middle-application'>
            <div>
                <h1>Applications</h1>
                <p className='viewAll-app'>View All Loan Application</p>
                </div>
                <button>Analytic</button>
            </div>

            <div className='last-application'>
            <p>All Applications</p>
            <p>Approved</p>
            <p>Pending</p>
            <p>Rejected</p>
            </div>
        </div>
    </div>
  )
}

export default Heading
