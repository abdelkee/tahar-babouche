import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setActivePage } from "../redux/reducers/globalReducer";

export default function Expense() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(setActivePage("expense"))
  }, []) 

    return (
      <div>
        <h3>Expense</h3>
      </div>
    )
  }
  