import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './components/GroceryList.jsx';
import AddGrocery from './components/AddGrocery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {id: 1, quantity: 5, description: "frozen pizza"},
        {id: 2, quantity: 10, description: "greek yogurt"},
        {id: 3, quantity: 2, description: "wine"},
        {id: 4, quantity: 1, description: "iced coffee"}
      ]
    }
  }

  addItem() {
    
  }

  
  render () {
    return (
      <div>
       <AddGrocery />
        <GroceryList groceries={this.state.list} />
      </div>
    )
  }
};




// class GroceryList extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <div className="groceries">
//         {this.props.list.map(item => (
//            <GroceryItem item={item} />
//          ))}
//       </div>
//     );
//   }
// };





// class AddGrocery extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//     }
//   }

//   render () {
//     <div>
//       {this.props.item}
//     </div>
//   }
// }



// const GroceryItem = (props) => (
//   <div></div>
// )



ReactDOM.render(<App />, document.getElementById('app'));