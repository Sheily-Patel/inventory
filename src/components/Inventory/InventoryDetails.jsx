import { makeStyles } from "@material-ui/styles";
import { useEffect, useState } from "react";

const InventoryDetails = () => {
    const useStyle = makeStyles({

    });

    const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8800/api/products/").then(response => response.json()).then(inventory=>{setDetails(details)});
  }, []);
  
  const classes = useStyle();
    return(
        
    )
};

export default InventoryDetails;