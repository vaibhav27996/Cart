import { reject } from 'lodash';
import React from 'react';

const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
  }

 
  class CartItem extends React.Component {
    constructor () {
      super();
      this.state = {
          qty: 1,
          price: 999,
          title: 'Mobile',
        
          img: ''
      }

      //this.testing();
    }

    incrementQty=()=>{
    
      // this.setState({
      //   qty:this.state.qty+1
      // })


      this.setState((prevstate)=>{
        return {
          qty : prevstate.qty + 1
        }
      })
    }

    decrementQty=()=>{

      let {qty}=this.state;

      if(qty=== 0){
        return ;
      }

      this.setState((prevstate)=>{
        return{
          qty:prevstate.qty - 1
        }
      })


    }

    // testing(){

    //   const promise=new Promise((resolve,reject)=>{

    //     setTimeout(()=>{
    //       resolve('done');

    //     },5000)
    //   })

    //   promise.then(()=>{
      //this is  a sychronous function
    //     this.setState({qty:this.state.qty+2});
    //     this.setState({qty:this.state.qty+2});

    //     console.log('this.state',this.state);
    //   });
        
    // }

 

  render () {
    const { price, title, qty } = this.state;
   

    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={ { fontSize: 25 } }>{title}</div>
          <div style={ { color: '#777' } }>Rs {price} </div>
          <div style={ { color: '#777' } }>Qty: {qty} </div>
          <div className="cart-item-actions">
            {/* Buttons */}
            <img alt="add" className="action-icons" onClick={this.incrementQty} src="https://cdn-icons-png.flaticon.com/128/992/992651.png" />
            <img alt="decrease" className="action-icons" onClick={this.decrementQty} src="https://cdn-icons-png.flaticon.com/128/1828/1828899.png" />
            <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png" />
          </div>

            {/* <div>
              <button onClick={showAlert}>Show  Alert</button>

              <input onChange={showText} />
            </div> */}

                  </div>
              </div>
    );
  }
}



export default CartItem;