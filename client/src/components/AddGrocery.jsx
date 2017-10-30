import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { 
      description: '',
      quantity: '',
      id: 5
    };

    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  onDescriptionChange(e) {
    this.setState({
      description: e.target.value
    });
  }

  onQuantityChange(e) {
   this.setState({
    quantity: e.target.value
   }); 
  }

  handleSubmit(e) {

    e.preventDefault();
    
    var newItem = {
      id: this.state.id,
      quantity: this.state.quantity,
      description: this.state.description
    };

    this.props.addItem(newItem);

    this.setState({
      description: '',
      quantity: '',
      id: this.state.id + 1
    })


  }


  render () {
    return (
        <form className="formFields" onSubmit={this.handleSubmit} >
          <label>Item</label>
          <input type="text" name="description" value={this.state.description} onChange={this.onDescriptionChange}  />
          <label>Quantity</label>
          <input type="text" name="quantity" value={this.state.quantity} onChange={this.onQuantityChange} />
          <button type="submit">Add</button>
      </form>
    );
  }
}

export default AddGrocery;

