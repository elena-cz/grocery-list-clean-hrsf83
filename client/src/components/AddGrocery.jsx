import React from 'react';

class AddGrocery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  render () {
    return (
      <div>
        <div className="formFields">
          <label>Item</label>
          <input type="text" name="description" />
          <label>Quantity</label>
          <input type="text" name="quantity" />
          <button type="submit">Add</button>
        </div>
        <div className="formFields">
        </div>
      </div>
    );
  }
}

export default AddGrocery;

