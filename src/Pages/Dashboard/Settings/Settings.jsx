import BreadCrumbs from "../components/BreadCrumbs";
import Navbar from "../components/Navbar/Navbar";
import SideBar from "../components/Sidebar/SideBar";
import DataTable from 'react-data-table-component';
import "./Settings.css"

export default function Settings() {
   const columns = [
    {
    name: 'Model Name',
    selector: row => row.name
  },
  {
    name: 'Status',
    selector: row => row.status
  },
  {
    name: 'Date Created',
    selector: row => row.datecreated
  },
  {
    name: 'Created by',
    selector: row => row.createdby
  },
  {
    name: 'Edit',
    selector: row => row.edit
  },
]
const data = [
  {
    id: 1,
    name:'Default Model',
    status: ' active',
    datecreated: '01/04/23',
    createdby: 'default',
    edit: ''
  },
  {
    id: 2,
    name:'Alpha Model',
    status: ' active',
    datecreated: '01/04/23',
    createdby: 'default',
    edit: ''
  },
  {
  id: 3,
  name:'Credit First Model',
  status: ' active',
  datecreated: '01/04/23',
  createdby: 'default',
  edit: ''
},
{
  id: 4,
  name:'CSI Model',
  status: ' active',
  datecreated: '01/04/23',
  createdby: 'default',
  edit: ''
}
]
  return (
    <>
      <Navbar />
      <SideBar />
        <BreadCrumbs />
   

      <div>
      <ul >
        <li>Settings</li>
        <li>Models</li>
      </ul>

    </div>

    <div>
    <div>
      <h1>Settings</h1>
    </div>
    <div>
    <button>Manage</button>
    <button>Create New Model</button>
    </div>
    </div>
    
    <div>
    <DataTable
      columns = {columns}
      data = {data}
      ></DataTable>
      </div>


    
    </>
  );
}
