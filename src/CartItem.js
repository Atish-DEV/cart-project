import React from 'react';
class CartItem extends React.Component{
    increaseQty=()=>{
       // console.log(this);
       //setState form 1
    //    this.setState({
    //     qty:this.state.qty+1
    //    });
     //setState form 2
       this.setState((prevState)=>{
        return({
            qty:prevState.qty+1
        });
       });
    }
    decreaseQty=()=>{
        if(this.state.qty>0){
              // console.log(this);
        //setState form 1
     //    this.setState({
     //     qty:this.state.qty-1
     //    });
      //setState form 2
        this.setState((prevState)=>{
            return({
                qty:prevState.qty-1
            });
           });
        }
     }
    render(){
        //console.log(this.props);
        //let {title,price,qty}=this.state;
        let {title,price,qty,img}=this.props.product;
        let {product,
          onIncQty,
          onDecQty,
          onDelete
        }=this.props;
        return(
            <div className="cart-item">
        <div className="left-block">
          <img src={img} style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price}</div>
          <div style={ { color: '#777' } }>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img src='https://cdn-icons-png.flaticon.com/512/992/992651.png'
            className='action-icons' alt='plus' onClick={()=>{onIncQty(product)}}/>
            <img src='https://cdn-icons-png.flaticon.com/512/992/992683.png' className='action-icons' alt='minus' onClick={()=>{onDecQty(product)}}/>
            <img src='https://cdn-icons-png.flaticon.com/512/1214/1214428.png'
            className='action-icons' onClick={()=>{onDelete(product.id)}} alt='delete'/>
          </div>
        </div>
      </div>
        );
    }
}
const styles = {
    image: {
      height: 100,
      width: 100,
      borderRadius: 4,
      background: '#ccc'
    }
  }
export default CartItem;