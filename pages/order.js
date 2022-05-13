import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { setActivePage } from "../redux/reducers/globalReducer";

export default function Order() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setActivePage("order"))
  }, [dispatch])  
  
    return (
      <div>
        <h3>Order</h3>
      </div>
    )
  }
  