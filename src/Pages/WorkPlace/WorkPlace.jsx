import WorkPlaceSideBar from "@/components/Workplace_SideBar/WorkPlaceSideBar"
import WorkPlaceMain from "@/components/WorkPlace_Main/WorkPlaceMain"

function WorkPlace() {
  return (
    <div className="flex md:flex-row flex-col min-h-screen"> 
        <WorkPlaceSideBar/>
        <WorkPlaceMain/>
    </div>
  )
}

export default WorkPlace
