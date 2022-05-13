import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActivePage } from "../redux/reducers/globalReducer";

export default function Settings() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setActivePage("settings"))
  }, [dispatch]) 

    return (
      <div>
        <h3>Settings</h3>
      </div>
    )
  }
  