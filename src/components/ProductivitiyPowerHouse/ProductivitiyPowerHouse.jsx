function ProductivitiyPowerHouse() {
  return (
    <div className=" p-5 flex justify-center w-full overflow-x-hidden">
      <div className=" xl:w-[80%]">
        <h1 className="text-center  text-2xl min-[1500px]:text-4xl font-bold ">A productivity powerhouse</h1>
        <div className="flex gap-7 min-[843px]:justify-around  p-5 max-[843px]:flex-col max-[843px]:items-center">
          <div className="max-[843px]:min-w-[300px] max-[843px]:max-w-[400px] max-[843px]:flex-col min-[843px]:w-1/3 shadow-2xl p-3 py-5 ml-0 overflow-x-hidden" data-aos="fade-right" data-aos-duration="500">
            <h1 className="font-bold text-xl  min-[1500px]:text-3xl text-center ">Boards</h1>
            <p className=" 2xl:text-3xl w-full">
              Trello Boards Keep tasks organized and work moving forward.In a
              glance, see every thing from "things to do" to "aww yeah", we did
              it.
            </p>
          </div>
          <div className="max-[843px]:min-w-[300px] max-[843px]:max-w-[400px] 2xl:w-[400px] min-[843px]:w-1/3 shadow-2xl p-3  py-5 overflow-x-hidden" data-aos="fade-down" data-aos-duration="500" >
            <h1 className="font-bold text-xl  min-[1500px]:text-3xl text-center">Lists</h1>
            <p className="2xl:text-3xl w-full">
              The different stages of a task. Start as simple as To Do, Doing,
              or Done—or build a workflow custom fit to your team’s needs.
              There’s no wrong way to Trello.
            </p>
          </div>
          <div className="max-[843px]:min-w-[300px]  max-[843px]:max-w-[400px] 2xl:w-[400px] min-[843px]:w-1/3 shadow-2xl p-3  py-5 overflow-x-hidden" data-aos="fade-left" data-aos-duration="500">
            <h1 className="font-bold text-xl  min-[1500px]:text-3xl text-center">Cards</h1>
            <p className="2xl:text-3xl w-full">
              Cards represent tasks and ideas and hold all the information to
              get the job done. As you make progress, move cards across lists to
              show their status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductivitiyPowerHouse;
