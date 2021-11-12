import React from 'react'
import "./Product.css";


function Product() {
   
    return (
		
		
		<div class="card">
			<img src="https://images.unsplash.com/photo-1616756141603-6d37d5cde2a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c2FyZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="" class="card__img"/> 

			
				 <div class="card__data">
					 <h1 class="card__title">Nike Air Jordan</h1>
					 <span class="card__preci">$99</span>
					 <p class="card__description">Nike Air Jordan Footwear basketball sneakers.</p>
					 <a href="#" class="card__button">Buy Now</a>
				 </div>
			
		</div>
		
      
    )
}

export default Product