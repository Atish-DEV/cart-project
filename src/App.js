import React from 'react';
import Cart from './Cart';
import NavBar from './NavBar';
import firebase from './firebase';
class App extends React.Component{
  constructor(){
    super();
    this.state={
        products:[],
        loading:true
    }
    this.db=firebase.firestore();
  }
  componentDidMount=()=>{
    // firebase
    // .firestore()
    // .collection('products')
    // .get()
    // .then((snap)=>{
    //   console.log(snap);
    //   snap.docs.map((doc)=>{
    //     console.log(doc.data());
    //   })
    // const products=snap.docs.map((doc)=>{
    //   const data=doc.data();
    //   data['id']=doc.id;
    //   return(data);
    // })
    // this.setState({
    //   products:products,
    //   loading:false
    // })
    // });
    firebase
    .firestore()
    .collection('products')
    // .where('price','<=',99)
    // .where('title','==','Airpods')
    // .orderBy('price','desc')
    .onSnapshot((snap)=>{
      console.log(snap);
      snap.docs.map((doc)=>{
        console.log(doc.data());
      })
    const products=snap.docs.map((doc)=>{
      const data=doc.data();
      data['id']=doc.id;
      return(data);
    })
    this.setState({
      products:products,
      loading:false
    })
    });
  }
  handleIncQty=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    // products[index].qty+=1;
    // this.setState({
    //     products:products
    // });
    const docRef=this.db.collection('products').doc(products[index].id);
    docRef
    .update({
      qty:products[index].qty+1
    }).then(()=>{
      console.log('Product increased');
    }).catch((err)=>{
      console.log(err);
    })
}
handleDecQty=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    if(products[index].qty==0){
        return;
    }else{
      const docRef=this.db.collection('products').doc(products[index].id);
      docRef
      .update({
        qty:products[index].qty-1
      }).then(()=>{
        console.log('Product decreased');
      }).catch((err)=>{
        console.log(err);
      })
    }
}
handleDelete=(id)=>{
    const {products}=this.state;
    // const items=products.filter((item)=>item.id!==id);
    // this.setState({
    //     products:items
    // })
    const docRef=this.db.collection('products').doc(id);
    docRef
    .delete()
    .then(()=>{
      console.log('product deleted');
    })
    .catch((err)=>{
      console.log(err);
    })
}
countQty=()=>{
  const {products}=this.state;
  let count=0;
  products.forEach((item)=>{
    count+=item.qty;
  });
  return count;
}
getTotal=()=>{
  const {products}=this.state;
  let total=0;
  products.forEach((item)=>{
    total+=item.price*item.qty;
  });
  return total;
}
addPoduct=()=>{
  this.db
  .collection('products')
  .add({
    img:'',
    price:900,
    qty:1,
    title:'HomePod'
  })
  .then((docref)=>{
    console.log('product added',docref);
  })
  .catch((err)=>{
    console.log(err);
  })
}
  render(){
    const {products,loading}=this.state;
    return (
    <div className="App">
    <NavBar count={this.countQty()}/>
      {loading && <h1> Loading products</h1>}
      <button onClick={this.addPoduct}>Add another product</button>
    <Cart
      products={products}
      onIncQty={this.handleIncQty}
      onDecQty={this.handleDecQty}
      onDelete={this.handleDelete}
      />
    <h3>Total:{this.getTotal()}</h3>
    </div>
  );
  }
}

export default App;
