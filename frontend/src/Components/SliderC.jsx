import React from 'react'
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
// import "normalize.css/normalize.css";
import "./SliderAnimations.css";
import "./Slider.css";


const content = [
    {
      title: "Vulputate Mollis Ultricies Fermentum Parturient",
      description:
        "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.",
      button: "Read More",
      image: "https://c1.staticflickr.com/7/6027/6206812449_275b36b1ae_b.jpg",
     
    },
    {
      title: "Tortor Dapibus Commodo Aenean Quam",
      description:
        "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.",
      button: "Discover",
      image: "https://images.unsplash.com/photo-1608793733118-ee3f16002251?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=493&q=80",
      
    },
    {
      title: "Phasellus volutpat metus",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.",
      button: "Buy now",
      image: "https://images.unsplash.com/photo-1620619767323-b95a89183081?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFuZGljcmFmdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
      
    }
  ];
function SliderC() {
    return (
        <div>
        <Slider className="slider-wrapper">
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>
             
            </div>
          ))}
        </Slider>
      </div>
    )
}

export default SliderC
