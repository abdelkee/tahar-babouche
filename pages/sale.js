import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActivePage } from "../redux/reducers/globalReducer";

export default function Sale() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setActivePage("sale"))
  }, []) 

    return (
      <div>
        <h3>Sale</h3>
      </div>
    )
  }
  