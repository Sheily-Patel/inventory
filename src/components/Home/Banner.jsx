import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../Data/data";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    image: {
        width: "100%",
        height: "100%",
        marginTop: "5%"
    }
})
const Banner = () => {
    const classes = useStyle();
    return (
        <Carousel 
            autoPlay={true}
            indicators={false}
            navButtonsAlwaysVisible={true}
        >
            {
                bannerData.map(image => (
                    <img src={image} className={classes.image}/>
                ))
            }
        </Carousel>
    );  
};

export default Banner;