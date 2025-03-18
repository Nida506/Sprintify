import { CarouselPlugin } from "../../components/ShadcnComponents/carousal";
import MainFooter from "@/components/MainFooter/MainFooter";

const LandingPage = () => {
  console.log("hello");

  console.log("first");
  return (
    <div className=" font-trebuchet">
      {/* Main display section*/}
      <div className="flex max-[1125px]:justify-center lg:justify-between bg-cover  bg-[url('/images/landingPgBg.png')] h-[520px] bg-no-repeat border-b-2 border-gray-100">
        <div className="text-white  max-[1140px]:w-[100%]  w-[60%] max-[600px]:px-10 px-20 pt-16">
          <div className="ps-5">
            <h1 className=" pb-6  font-semibold max-[1140px]:text-3xl max-[640px]:text-2xl text-5xl">
              Sprintify brings all your tasks, teammates, and tools together
            </h1>
            <h4 className="text-2xl max-[600px]:text-xl mb-3 pb-4">
              Keep everything in the same place-even if your team isn't.
            </h4>
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6  mb-4 rounded-sm me-4 py-2 placeholder:text-black border-none text-black outline-none"
            />
            <button className="px-3 py-2   bg-blue-600 rounded-sm">
              Sign up - it's free!
            </button>
          </div>
        </div>
        <div className="text-white  max-[1140px]:w-[0px] max-[1140px]:pe-0  w-[40%] pe-20">
          <img
            src="/images/landingPgImg.png"
            className="h-[30rem] max-[1140px]:h-[25rem]"
            alt="img"
          />
        </div>
      </div>

      {/* card part  */}

      <div className="flex  justify-around  border-b-2 border-gray-100">
        <div className="min-[440px]:ps-0 lg:ps-8  w-[90%]">
          <h1 className="mt-14 mb-5 text-xl max-[1025px]:text-center">
            Sprintify IN ACTION
          </h1>
          <h1 className="mt-5 mb-7 font-bold max-[640px]:text-2xl text-3xl max-[1025px]:text-center">
            Workflows for any project, big or small
          </h1>

          <div className="flex justify-center">
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {/* Ist card */}
              <div className="h-60 bg-base-100 w-96 max-[1330px]:w-72 shadow-lg hover:border-2 hover:border-babyPink cursor-pointer">
                <div className="h-16 bg-babyPink "></div>
                <div className="card-body">
                  <h2 className="card-title">Project Management</h2>
                  <p className="line-clamp-3">
                    Keep tasks in order, deadlines on track, and team members
                    aligned with Sprintify.
                  </p>
                </div>
              </div>

              {/* second card */}

              <div className=" h-60  bg-base-100 w-96 max-[1330px]:w-72 shadow-lg hover:border-2 hover: border-lightPurple  cursor-pointer">
                <div className="h-16 bg-lightPurple "></div>
                <div className="card-body">
                  <h2 className="card-title">Meetings</h2>
                  <p className="line-clamp-3">
                    Empower your team meetings to be more productive, empowering
                    and, dare we say-fun.
                  </p>
                </div>
              </div>

              {/* 3rd card  */}

              <div className=" h-60  bg-base-100  max-[1330px]:w-72 shadow-lg hover:border-2 hover: border-lightBlue  cursor-pointer">
                <div className="h-16 bg-lightBlue "></div>
                <div className="card-body">
                  <h2 className="card-title">Onboarding</h2>
                  <p className="line-clamp-3">
                    On boarding to a new company or project is a snap with
                    Sprintify's visual layout of to-do's, resources, and
                    progress tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-12 mb-14 text-xl max-[634px]:text-sm max-[1025px]:text-center">
            No need to start from scratch. Jump-start your workflow with a
            proven playbook designed for different teams. Customize it to make
            it yours.
          </p>
        </div>
      </div>

      {/* Boards , Lists , Cards section */}

      <div className="bg-lightSky pb-12  border-b-2 border-gray-100">
        <h1 className=" max-[650px]:text-center max-[650px]:text-2xl text-3xl font-bold lg:ps-[6.5rem] pt-12 pb-5 sm:text-center md:text-center lg:text-start">
          A productivity powerhouse
        </h1>
        <div className="flex max-[1125px]:justify-center justify-between  h-[520px] ">
          <div className="max-[1140px]:w-[100%] w-[50%] max-[600px]:px-5 px-20 pb-10">
            <div className="ps-5 ">
              {/* board */}
              <div className="my-5 border-l-[5px] border-lightBlue  bg-base-100 px-5 py-3 shadow-md shadow-gray-500">
                <h1 className="text-2xl font-bold">Boards</h1>
                <p className="mt-2 text-justify line-clamp-3">
                  Sprintify boards keep task organized and work moving forward.
                  In a glance, see everything from "things to do" to "aww yeah,
                  we did it!"{" "}
                </p>
              </div>
              {/* list */}
              <div className="my-5 bg-base-100 px-5 py-3 shadow-md shadow-gray-500">
                <h1 className="text-2xl font-bold">Lists</h1>
                <p className="mt-2 text-justify line-clamp-3">
                  The different stages of a task. Start as simple as To Do,
                  Doing or Done-or build a workflow custom fit to your team's
                  needs. There's no wrong way to Sprintify.
                </p>
              </div>

              {/* card */}
              <div className="my-5 bg-base-100 px-5 py-3 shadow-md shadow-gray-500">
                <h1 className="text-2xl font-bold">Cards</h1>
                <p className="mt-2 text-justify line-clamp-3">
                  Cards represent task and ideas and hold all the information to
                  get the job done. As you make progress, move cards across
                  lists to show their status.
                </p>
              </div>
            </div>
          </div>
          <div className="text-white flex min-[1139px]:ps-24 justify-around items-center max-[1140px]:w-[0px] max-[1140px]:pe-0  pe-20">
            <div className=" ">
              <img
                src="/images/dashboard.png"
                className="h-[22rem] max-[1140px]:h-[25rem] rounded-sm"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Do more section */}

      <div className="bg-lightGray py-16">
        <h1 className="text-center py-2">POWERFUL WAYS TO GROW</h1>
        <h1 className="text-center  font-bold text-3xl ">
          Do more with Sprintify
        </h1>
        <h1 className="text-center max-[600px]:text-sm pt-2 pb-7 px-5">
          Sprintify's intuitive features give any team the ability to quickly
          set up and customize workflows for just about anything.
        </h1>

        {/* card */}
        <div className="flex justify-around ">
          {" "}
          {/* integration card */}
          <div className=" grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="card bg-gradient-to-b  from-white via-[#ffffff6e] to-[#8eb2de] w-[22rem] rounded-none shadow-sm shadow-black p-8">
              <div className="flex justify-center">
                <img
                  src="/images/integration.png"
                  alt="Integration"
                  className="w-12 h-12 "
                />
              </div>

              <div className="">
                <h2 className="card-title flex justify-center py-2 text-xl font-bold">
                  Integrations
                </h2>
                <p className="text-center text-bold">
                  Connect the apps your team already your team already uses into
                  your Sprintify workflow or add a Power-Up to fine-tune your
                  specific needs.
                </p>
              </div>
            </div>

            {/* enterprise card */}
            <div className="card bg-gradient-to-b from-white via-[#ffffff6e] to-[#8eb2de] w-[22rem] rounded-none shadow-sm shadow-black p-8">
              <div className="flex justify-center">
                <img
                  src="/images/enterprise.png"
                  alt="Enterprise"
                  className="w-12 h-12 "
                />
              </div>

              <div className="">
                <h2 className="card-title flex justify-center py-2 text-xl font-bold">
                  Sprintify Enterprise
                </h2>
                <p className="text-center text-bold">
                  The productivity tool teams love, paired with the features and
                  security needed for scale.
                </p>
              </div>
            </div>

            {/* automation card */}
            <div className="card bg-gradient-to-b from-white via-[#ffffff6e] to-[#8eb2de] w-[22rem] rounded-none shadow-sm shadow-black p-8">
              <div className="flex justify-center">
                <img
                  src="/images/automation.png"
                  alt="Automation"
                  className="w-12 h-12 "
                />
              </div>

              <div className="">
                <h2 className="card-title flex justify-center py-2 text-xl font-bold">
                  Butler Automation
                </h2>
                <p className="text-center text-bold">
                  No-code automation is built into every Sprintify board. Focus
                  on the work that matters most and let the robots do the rest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer satisfaction section*/}
      <div className="bg-lightBluish text-white py-16 ">
        <h1 className="font-extrabold max-[600px]:text-xl text-3xl text-center py-3">
          Customer Satisfaction Stats
        </h1>

        <div className="flex justify-center">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 mb-14">
            {" "}
            <div className="border-2 border-gray-400 py-3 pe-20 rounded-md ps-5 w-60">
              <p className="text-2xl">100+</p>
              <p className="text-gray-400">Client Served</p>
            </div>
            <div className="border-2 border-gray-400 py-3 pe-20 rounded-md ps-5 w-60">
              <p className="text-2xl">90%</p>
              <p className="text-gray-400">Retention Rate</p>
            </div>
            <div className="border-2 border-gray-400 py-3 pe-20 rounded-md ps-5 w-60">
              <p className="text-2xl">100%</p>
              <p className="text-gray-400">Resolution Time</p>
            </div>
            <div className="border-2 border-gray-400 py-3 pe-20 rounded-md ps-5 w-60">
              <p className="text-2xl">1000</p>
              <p className="text-gray-400">Reviews</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          {" "}
          <button className="bg-white py-3 max-[600px]:px-3 px-12 rounded-md  text-blueish font-bold text-xl max-[600px]:text-sm">
            Get Started with Sprintify
          </button>
        </div>
      </div>

      {/* Caurosal */}

      <div className="py-20">
        <h1 className="text-3xl font-bold text-center mb-10 max-[400px]:text-xl max-[600px]:text-2xl">
          Valuable Words From Customers
        </h1>
        <div className="flex justify-around">
          {" "}
          <CarouselPlugin />
        </div>
      </div>

      {/* Footer */}
      <MainFooter />
    </div>
  );
};

export default LandingPage;
