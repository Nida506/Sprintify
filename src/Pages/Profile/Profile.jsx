import { BASE_URL } from "../../utils/constants";
import { addUser } from "../../Redux/UserSlice/userSlice";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Profile = () => {
  const user = useSelector((store) => store.user);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [photoUrl, setPhotoUrl] = useState("images/profileImg.png");
  const [age, setAge] = useState("24");
  const [about, setAbout] = useState("I am a user of Sprintify");

  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  //editProfile handler
  const editProfileHandler = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { firstName, lastName },
        { withCredentials: true }
      );
      
      dispatch(addUser(res.data.data));

      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {/* for toast : show for message */}

      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success bg-[#28c433] font-normal text-white">
            <span>Profile Saved Successfully</span>
          </div>
        </div>
      )}

      <div className="flex justify-center pb-12 pt-12 ">
        {/* edit profile */}
        <div
          className={`card bg-white pb-4 border-darkBlue border-2   mx-4 shadow-xl rounded-none `}
        >
          <div className="card-body pt-5 pb-3">
            <h2 className="card-title text-darkBlue font-bold text-3xl mb-2 flex justify-center">
              Edit Your Profile
            </h2>
            {/* for first Name */}
            <label className="form-control w-full max-w-xs">
              <input
                type="text"
                value={firstName}
                placeholder="Enter Your First Name ..."
                onChange={(e) => setFirstName(e.target.value)}
                className={`input input-bordered text-base placeholder-stone-300   text-black w-full max-w-xs`}
              />
            </label>
            {/* for last name */}
            <label className="form-control w-full max-w-xs">
              <input
                type="text"
                value={lastName}
                placeholder="Enter Last Name ..."
                onChange={(e) => setLastName(e.target.value)}
                className={`input input-bordered text-base placeholder-stone-300  text-black  w-full max-w-xs`}
              />
            </label>

            {/* for photoUrl */}
            <label className="form-control w-full max-w-xs">
              <input
                type="text"
                value={photoUrl}
                placeholder="Enter Photo Url ..."
                onChange={(e) => setPhotoUrl(e.target.value)}
                className={`input input-bordered text-base placeholder-stone-300  text-black  w-full max-w-xs`}
              />
            </label>

            {/* for age */}
            <label className="form-control w-full max-w-xs">
              <input
                type="text"
                value={age}
                placeholder="Enter Age ..."
                onChange={(e) => setAge(e.target.value)}
                className={`input input-bordered text-base placeholder-stone-300  text-black  w-full max-w-xs`}
              />
            </label>

            {/* about */}
            <label className="form-control w-full max-w-xs">
              <textarea
                type="text"
                value={about}
                placeholder="Enter something About You ..."
                onChange={(e) => setAbout(e.target.value)}
                className={`textarea textarea-bordered text-base  placeholder-stone-300  text-black  w-full max-w-xs`}
              />
            </label>

            {/* for save profile button */}
            <div className="card-actions flex justify-center  mt-4">
              <button
                onClick={editProfileHandler}
                className={` px-8 py-2 rounded-full border-2 bg-darkBlue text-white font-semibold`}
              >
                Save Profile
              </button>
            </div>

            {/* for error show */}
            {/* {error && <p className="text-red-400">{error}</p>} */}
          </div>
        </div>

        {/* user own profile */}

        <div
          className={`card bg-white text-stone-950  border-darkBlue border-2  text-base font-normal  mx-4 shadow-xl rounded-none `}
        >
          <figure>
            <img src={photoUrl} alt="photo" className={`w-72 h-96`} />
          </figure>
          <div className="mt-4 mb-4 ms-4 text-base font-semibold">
            <p>{firstName + " " + lastName}</p>
            <p> {about}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
