import React from "react";
import ReactDOM from "react-dom/client";



// Header - logo, nav- item
// Body - container - img, name, starts, cuisine 
// footer

const Header = () =>{
        return (
            <div className = "header">
                <div className = "logo">
            <img src="https://media.istockphoto.com/id/1218437637/vector/food-point-logo-design.jpg?s=612x612&w=0&k=20&c=NnQqEp2mmyQDen41Gqa9uUXUx_Z13iF5T0apW-E2W7c="></img>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>Cart</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
           
            </div>
            </div>
        );
};

const RestaurantCard = () =>{
return(
    <h4>Meghna foods</h4>
)
};

const Body = () =>{
    return(
        <div className = "body">
            <div classNmae= "search-bar">Search</div>
            <div className = "res-container">
                <RestaurantCard/>

            </div>
        </div>
    )

};

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return  <div className = "App">
    <Header/>
  </div>
}
  

root.render(<AppLayout/>);