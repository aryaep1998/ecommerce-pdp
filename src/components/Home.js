import React from 'react'
import bread from '../assets/bread.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import img3 from '../assets/img3.png'
import img4 from '../assets/img4.png'
import './Home.css'

function Home() {
  return (
    <div> 
    <div className="h3">
        <h6>The Essential Baking Company Sunny Seedded White-Sunny Seedded White-Case of 6-14 oz</h6>
    <img className="h1" src={bread}></img>
      <div >
           <h5 className="h3">Product Description</h5>
           <p className="h2">The Essential Company Sunny Seeded White Bread gives your sandwitch a robust natural taste packed with rich sunflower and.Made with all-natural ingrediants,this delicious bread works well for a signature bit or club sandwitch.Prepared to deliver a nourishing and satisfying experience,this scrumptious white bread elevates a simple sandwich into a gourmet master piece.Each bag holds 14oz of sunny seeded white bread</p>
       </div>
       <div>
           <h5 className="h3">Product Details</h5>
           <h6 className="h3">Ingrediants</h6>
          
           <div className="h4">
           <p className="h2">Bamboo Fiber,Calcium Sulphate, Egg, Egg white,Enzyme, Filtered water ,Granulated sugar,Green pea protein, High oleic saflower oil, invert sugar,Modified cellulose,Sunflower seeds,Whole egg, Yeast</p>
           </div>
       </div>
      
       <div className="row">
       <h5 className="h6">More form Essential Baking Company</h5>

           <div className="col-3"  >
            <img src={img1}></img>
            <p>Essential Baking Company-Bread Loaf Ancient Grain</p>
           </div>
          
           
           
           <div className="col-3"  >
            <img src={img2}></img>
            <p>Essential Baking Company-Loaf-Brown Rice-Yeast-Free</p>
           </div>
          
           
          
            <div className="col-3"  >
            <img src={img3}></img>
            <p>Essential Baking Company-Loaf-White Rice - 16 oz</p>
           </div>
          
           
          
           <div className="col-3"  >
           <img src={img4}></img>
           <p>Essential Baking Company-Rye-Whole</p>
          </div>
         
          
         
       </div>
      
 </div>
 </div>    
  )

  }
  
export default Home