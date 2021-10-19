const SideBarComponent  = ()=>{
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
            <SideBarIcon/>
            <SideBarIcon/>
            <SideBarIcon/>
            <SideBarIcon/>
            <SideBarIcon/>
            <SideBarIcon/>
        </div>
    )

};

const SideBarIcon = ()=>{
    return (
        <i>
            A
        </i>
    )

}

export default SideBarComponent;