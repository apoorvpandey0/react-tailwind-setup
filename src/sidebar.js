import { FaBeer } from 'react-icons/fa';

const SideBarComponent  = ()=>{
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon icon= {<FaBeer size= "28" />}/>
            <SideBarIcon icon= {<FaBeer size= "28" />}/>
            <SideBarIcon icon= {<FaBeer size= "28" />}/>
            <SideBarIcon icon= {<FaBeer size= "28" />}/>
            <SideBarIcon icon= {<FaBeer size= "28" />}/>
            <SideBarIcon icon= {<FaBeer size= "28" />}/>
        </div>
    )

};

const SideBarIcon = ({ icon,text = "tooltip!" })=>{
    return (
        <div className = "sidebar-icon group">
            {icon}

            <span className = "sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )

}

export default SideBarComponent;