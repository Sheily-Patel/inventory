import { Card } from "@mui/material";
import { data } from "../../Data/data";

const InventoryDetails = () => {
    return(
     <Card key={data.image}>
         {data.map((data) => (
         <img src={`${data.image}`} alt={data.name}/>
         ))}
    </Card>
)};

export default InventoryDetails;