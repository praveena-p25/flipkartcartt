import React from 'react';
import baby from "./assets/baby.jpg";
import greenbaby from "./assets/greenbaby.jpeg";
import redbaby from "./assets/redbaby.jpeg";
import blue from "./assets/blue.jpeg";
import blueee from "./assets/blueee.jpeg";
import bluecat from "./assets/bluecat.jpeg";
import cucu from "./assets/cucu.jpeg";
import fklogo from "./assets/fklogo.png";
import bluemicky from "./assets/bluemicky.jpeg";
// import staring from "./assets/staring.svg";



function Header (){
    return( 

        <div  class="main"> 
    
            <div className="flipkart" >
                <div className="flipkart1">
                    
                </div>    
                <img src={baby} alt="baby" class="babyimage"/>
                
            </div>

            <div className="first">
             
              <p className="lastt1">RS</p>
              
              <p className="two">Dungaree For Boys Casual Embroidered Denim  (Blue, Pack of 1)</p>

              <p className="special">Special price</p>

         
              <p className="three">₹369  </p>
              

              {/* <img src={staring} alt="staring" class="staringimage"/> */}
              <p className="four">1,701 ratings and 190 reviews <img src={fklogo} alt="fklogo" class="fklogoimage"/></p>

              <p className="five">Available offers </p>

              <p className="sp">Special PriceGet extra 8% off (price inclusive of discount) T&C</p>

              <p className="six">Bank Offer5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</p>

              <p className="seven">Bank Offer10% Off on Bank of Baroda Mastercard debit card first time transaction, Terms and Condition applyT&C
</p>
        
              <p className="eight">Buy Now, Get Extra 5% Off On Home & Kitchen Appliances T&C</p>

              <p className="nine">No Cost EMI on Flipkart Axis Bank Credit Card T&C</p>

              <p className="ten">Deliver to</p>

              <p className="eleven">Enter delivery pincode </p>

              <p className="twelve">Usually delivered in3 days?</p>

              <p className="twe1">Enter pincode for exact delivery dates/charges</p>

              <p className="thirteen">View Details</p>

              <p className="fourteen">Color</p>
                
               <div className="WGR" >
              <img src={greenbaby} alt="greenbaby" class="greenbabyimage"/>
              <img src={redbaby} alt="redbaby" class="redbabyimage"/>
               <img src={baby} alt="baby" class="wbabyimage"/> 
               </div>

               <p className="age">Size (Age Group)</p>

               <div className="sizebutton">
                   <button className="kids">6 - 12 Months</button>
                   <button className="men">1 - 2 Years</button>
                   <button className="leg">2 - 3 Years</button>
                   <button className="ultra">3 - 4 Years</button>
               </div>


               <p className="sell">Seller</p>


               <p className="an">Anjali collection</p>

               <p className="return">30 Day Return Policy?</p>

               <p className="viewmore">View more sellers starting from ₹310</p><hr className="ho1"></hr>

               <p className="prodet">Product Details</p><hr className="ho2"></hr>

               <p className="rating">Ratings & Reviews</p>

               <p className="images">Images uploaded by customers:</p>

               <div className="customer" >
              <img src={blue} alt="blue" class="blueimage"/>
              <img src={blueee} alt="blueee" class="blueeeimage"/>
               <img src={bluecat} alt="bluecat" class="bluecatimage"/> 
               <img src={cucu} alt="cucu" class="cucuimage"/> 
               </div>

               <p className="review">it's ossam for the baby very comfort and design well for kids</p>

               <p className="cusname">Satyendra Mishra Dec, 2019</p>
               <p className="cusrat">Certified Buyer, Kolkata</p><hr className="ho3"></hr>





               <p className="review1">Quality not good</p>
               <div className="customer1" >
              <img src={bluemicky} alt="bluemicky" class="bluemickyimage"/>
              </div>
                <p className="cusname1">Mallappa H 1month ago </p>
               <p className="cusrat1">Certified Buyer, Sedam</p><hr className="ho3"></hr>


             <p className="last">


</p>
            
        </div>

        <div className="buttons">
            <button className="addtocart">ADD TO CART</button>
            <button className="buynow">BUY NOW</button>
        </div>







        {/* <img src={sellerstorys} alt="sellerstory" class="image"/>
        <img src={sellerstoryss} alt="sellerstory" class="image"/>
        <img src={sellerstoryss} alt="sellerstory" class="image"/>
        
        <div class="wrapper">
         
        </div>
        <img src={Covid199} alt="covid19" class="image" style={{ padding: 10 }}/>
        <div class="wrapper">
         
        </div>
        
        
        <img src={rewinds} alt="rewind" class="image"/>
        
        
        <img src={discovers} alt="discover" class="image"/>
        <img src={discoverss} alt="discover" class="image"/>
        <hr/> */}
        
       
        
       
        </div>
    )
}

export default Header;