import CabeceraAdmin from '../Admin/CabeceraAdmin.jsx';
import TableroAdmin from '../Admin/TableroAdmin.jsx';

function Admins() {
    return (
        <div className='bg-slate-100 min-h-screen'>
            <div>
                <CabeceraAdmin />
            </div>
            <div>
                <TableroAdmin />
            </div>
        </div>
    );
}

export default Admins;