import Image from "next/image";
import styles from "./page.module.css";

// export default function Home() {
//   return (
//          <div>

//          </div>
//   )
// }
// {data ? 
// (<div>
//   <p> welcome,{data.user.name}</p>
//   <image src={data.user.image}width={100}height={100} alt="profile picture"/>
// <button onclick={()=> SignOut()}>SignOut</button>
//   </div>
// ):(
//   <div>
//     <link href="api/auth/login">Login</link>
//   </div>)}
//   </div>;
// }
export default function Home() {
    return (
           <div>
               <div>
       
        <nav className="nav">
            <div>
                <h2>Akshar Store</h2>

            </div>
            <ul className="navbar-links">

               
                <li className="home"><a href="Home.html">Home</a></li>

                
                <li className="html">
                     <a href="Product.html" className="html-link">Products </a>
                    <a class="html-link">Products
                        <i class="fa-solid fa-chevron-down html-chevron"> </i>
                    </a>
                    <ul className="html-sub-menu">
                         <li><a href="#">HTML</a></li>
                             <li><a href="#">CSS</a></li> 
                        <li>
                            <a className="html-js-link">
                                Bakery
                                <i class="fa-solid fa-chevron-down"></i>
                            </a>
                            <ul className="html-js-sub-menu">
                                <li><a href="./bakery/bread.html">Bread</a></li>
                                <li><a href="./bakery/khari.html">Khari</a></li>
                                <li><a href="./bakery/tost.html">Tost</a></li>
                                <li><a href="./bakery/cake.html">Cake</a></li>

                            </ul>
                        </li>

                         <li>
                                <a href="./bakery/Bakery.html" className="html-js-link">
                                    Bakery
                                    <i className="fa-solid fa-chevron-down"></i>
                                </a>
                                  <ul className="html-js-sub-menu">
                                    <li><a href="./bakery/bread.html">Bread</a></li>
                                    <li><a href="./bakery/khari.html">Khari</a></li>
                                    <li><a href="./bakery/tost.html">Tost</a></li>
                                    <li><a href="./bakery/cake.html">Cake</a></li>
                                    
                                 </ul>
                            </li> 

                        <li>
                            <a className="html-js-link">
                                Dairy
                                <i class="fa-solid fa-chevron-down"></i>
                            </a>
                            <ul className="html-js-sub-menu">
                                <li><a href="./dairy/milk.html">Milk</a></li>
                                <li><a href="./dairy/yogurt.html">Yogurt</a></li>
                                <li><a href="./dairy/paneer.html">Paneer</a></li>
                                <li><a href="./dairy/cheese.html">Cheese</a></li>

                            </ul>
                        </li>

                        <li><a className="html-js-link">
                                Rise</a>
                                <i className="fa-solid fa-chevron-down"></i>
                                <ul className="html-js-sub-menu">
                                    <li><a href="./rise/basmati.html">Basmati</a></li>
                                    <li><a href="./rise/tilda.html">Tilda</a></li>
                                    <li><a href="./rise/gujarat satter.html ">Gujarat Sattar</a></li>
                                </ul>
                        </li>
                        <li><a className="html-js-link">
                                Daal</a>
                                <i className="fa-solid fa-chevron-down"></i>
                                <ul className="html-js-sub-menu">
                                    <li><a href="./daal/tuverdal.html">Tuver Daal</a></li>
                                    <li><a href="./daal/Mung Daal.html ">Mung Daal</a></li>
                                    <li><a href="./daal/Ulad Daal.html ">Urad Daal</a></li>
                                </ul>
                        </li>
                         <li><a href="./spices/spices.html" class="html-js-link">
                                Spices</a>
                                <i className="fa-solid fa-chevron-down"></i>
                                <ul className="html-js-sub-menu">
                                    <li><a href="./spices/marchu.html">Marchu</a></li>
                                    <li><a href="./spices/huldar.html">Huldar</a></li>
                                    <li><a href="spices/dhanajiru.html">Dhanajiru</a></li>
                                    <li><a href="./spices/salt.html">Salt</a></li>
                                </ul>
                            </li> 
                    </ul>
                </li>
                <li className="about-us">
                    <a href="Flyers & Deals.html">FLyers & Deals</a>
                </li>
                <li className="about-us">
                    <a href="About Us.html">About Us</a>
                </li>
                <li className="contact">
                    <a href="contact.html">Contact</a>
                </li>
            </ul>

            <div className="navbar-search">
                 <a href="search.html">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </a> 
                <a href="Addtocart.html">
                    <i className="fa-solid fa-cart-shopping"></i>
                </a>
                <a href="login.html">
                    <i className="fa-solid fa-user"></i>
                </a>
            </div>
        </nav>

    </div>



   


    <div style="height: 350px;">




    </div>
    <footer>
        <div id="footer">
            <p className="left" style="padding-left: 5px;">

                <a href="#about"> Phone:3062926392</a><br/>
                <a href="#services">Email:bgpnadya14@gmail.com</a><br/>
                <a href="#privacy">Privacy Policy</a>

            </p>
            <p className="right">
                Store Hours: 9:00am - 10:00pm Daily <br />
                &copy; 2024 My Website. All rights reserved.
            </p>
            <p className="centered">
            <div class="image">
                <img src="/Images/baps.PNG" alt="Company Logo"/>  
            </div>
            </p>
        </div>

    </footer>
    </div>
  
           
    )
   }
