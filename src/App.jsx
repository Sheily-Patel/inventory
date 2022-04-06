import Home from "./components/Home/Home";
import SignUp from "./components/User/SignUp";
import Category from "./components/Category/Category";
import AddCategory from "./components/Admin/AddCategory";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Admin/Dashboard";
import LogIn from "./components/User/Login";
import Login from "./components/Admin/login";
import User from "./components/Admin/Users";
import Cart from "./components/Cart/Cart";
import Orders from "./components/Admin/Orders";
import AddInventory from "./components/Admin/AddInventory";
import Inventory from "./components/Inventory/Inventory";
import ForgotPassword from "./components/User/ForgotPassword";
import Checkout from "./components/Checkout/Checkout";
import Wishlist from "./components/Wishlist/Wishlist";

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LogIn/>}/>
            <Route exact path="/adminl" element={<Login/>}/>
            <Route exact path="/admins" element={<User/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
            <Route exact path="/signup" element={<SignUp/>}/>
            <Route exact path="/category" element={<Category/>}/>
            <Route exact path="/addinventory" element={<AddInventory/>}/>
            <Route exact path="/inventory" element={<Inventory/>}/>
            <Route exact path="/addcategory" element={<AddCategory/>}/>
            <Route exact path="/password" element={<ForgotPassword/>}/>
            <Route exact path="/checkout" element={<Checkout/>}/>
            <Route exact path="/orders" element={<Orders/>}/>
            <Route exact path="/cart" element={<Cart/>}/>
            <Route exact path="/wishlist" element={<Wishlist/>}/>
          </Routes>
    </BrowserRouter>
  );
};

export default App;
