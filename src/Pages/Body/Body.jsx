import MainNavBar from "@/components/MainNavBar/MainNavBar";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BASE_URL } from "../../utils/constants";
import { addUser } from "../../utils/userSlice";
// import { BASE_URL } from "@/utils/constants";
// import { addUser } from "@/utils/userSlice";

function Body() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store) => store.user);

  // for fetch logged in user details
  const fetchUser = async () => {
    try {
      if (userData) return;
      else {
        const res = await axios.get(BASE_URL + "/profile/view", {
          withCredentials: true,
        });

        dispatch(addUser(res.data));
      }
    } catch (err) {
      //token not valid
      if (err.status === 401) navigate("/");
      //other code errror
      console.error(err);
    }
  };

  //run only on first render as [] is empty
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <MainNavBar />
      <Outlet />
    </div>
  );
}

export default Body;
