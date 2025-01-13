import { Link } from "react-router-dom";
import cart from "./../../images/cart.png"

const Carticon = ()=>{
    return(
        <>
        <Link to="/cart">
        <div className=" h-16 w-16 bg-gray-100 rounded-full p-2 hover:shadow-lg cursor-pointer  right-16 bottom-10 fixed">
            <img src={cart} alt="" />
        </div>
        </Link>
        </>
    );
}
export default Carticon;