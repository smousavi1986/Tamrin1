import React, { Component } from 'react';
import img1 from '../images/img1.png';
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";
import Product from './Product';
class Tamrin1  extends Component {
    constructor(props){
        super(props)
        this.state={isopen:false}

    }



     changeopenflag = () => {
      

      this.setState({ isopen: !this.state.isopen });

         
    }
   
  
   

     

render() {
    const { isopen } = this.state;
    return (
        <div className="accordion-wrapper">
            {/* هدر آکاردئون - کلاس آن به صورت پویا تغییر می‌کند */}
            <div 
                className={`accordion-header ${isopen ? 'open' : 'closed'}`} 
                onClick={this.changeopenflag}
            >
                <span>Digital products</span>
                {/* این آیکون است که می‌چرخد */}
                <span className="arrow-icon">^</span> 
            </div>

            {/* محتوای آکاردئون */}
            {isopen && (
                <div className="product-container">
                    <Product title="product_1" img={food1} price="230$" desc="توضیحات محصول ۱" />
                    <Product title="product_2" img={food2} price="410$" desc="توضیحات محصول ۲" />
                    <Product title="product_3" img={food3} price="32$" desc="توضیحات محصول ۳" />
                    <Product title="product_4" img={food4} price="75$" desc="توضیحات محصول ۴" />
                </div>
            )}
        </div>
    );
}
 

}

  export default Tamrin1 ;


