import Approved from './Approved'
import Download from './Download'
import Pending from './Pending'
import User from './User'
import Rejected from './Rejected'

export const Data = [

    {   
        id: 1,
        applicantInfo: <User name={'Ogbeni Mallam'} />,
        date: '02/04/23',
        status: <Approved/>,
        creditscore: '810',
        amount: 'N 35,000.00',
        download: <Download/>
    },

    {
        id: 2,
        applicantInfo: <User name={'Muktar Bellow'} />,
        date: '02/04/23',
        status: <Rejected/>,
        creditscore: '205',
        amount: 'N 102,000.00',
        download: <Download/>
    },

    {
        id: 3,
        applicantInfo: <User name={'Rukayat Stutern'} />,
        date: '01/04/23',
        status: <Rejected/>,
        creditscore: '332',
        amount: 'N 40,000.00',
        download: <Download/>
    },

    {
        id: 4,
        applicantInfo: <User name={'Olorunyomi Stutern'} />,
        date: '01/04/23',
        status: <Approved />,
        creditscore: '790',
        amount: 'N 50,000.00',
        download: <Download/>
    },

    {
        id: 5,
        applicantInfo: <User name={'Ekere Stutern'} />,
        date: '01/04/23',
        status: <Pending/>,
        creditscore: '650',
        amount: 'N 50,000.00',
        download: <Download/>
    }
]