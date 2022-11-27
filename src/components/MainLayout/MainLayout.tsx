import './MainLayout.css';
import { Outlet } from "react-router-dom";
import Header from '../Header/Header';
function MainLayout() {

    return (
        <div className='main-layout' >
            <Header/>
            <div className='content'>
                <Outlet/>
            </div>
        </div>
    )
}
export default MainLayout;