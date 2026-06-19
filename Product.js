import React, { Component } from 'react';
import '../styles/main.scss'
class Product extends Component {
    // constructor(props){
    //     super(props)
    //     this.props={
    //         title:props.title,
    //         price:props.price,
    //         img:props.img,
    //         desc:props.desc
    //     }
    // }
    
    render() { 
         const{title,price,img,desc}=this.props
        return (
           

<div className="product-card">
    <img className="product-img" src={img} alt={title} />
    <h3>{title}</h3>
    <span className="price-badge">{price}</span>
    <p>{desc}</p>
    <div className="heart-icon">♡</div>
</div>

        );
    }
}
 
export default Product ;
