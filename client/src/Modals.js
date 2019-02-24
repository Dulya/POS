import React from 'react'
import RetrieveItems from './actions/itemActions';
import addcart from './images/addcart.png';
import { connect } from 'react-redux';

class ItemCartModal extends React.Component {

  componentDidMount() {
    this.props.onRetrieveItems()
      .catch((error) => {
        console.log("Error : ", error);
      });
  }

  render() {
    return (
      <div>
        <div >  
          <button type="button" className="close" aria-label="Close" onClick={this.props.closeModal}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div >
          <div className="card-container">
            {this.props.items.map((item, index) =>

              <div className="card" key={index}>

                <h4><b>{item.item_name}</b></h4>

                <p>Unit Price : Rs. {item.price}</p>
                <input className="input_quantity" placeholder="Enter order Qty" required type="number" min="0" max="100" />
                <button className="toggle-button" for="check"><i className="fa fa-cart-plus" id="addcart-icon"></i></button>
              </div>
            )} </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" onClick={this.props.closeModal}>close</button>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    items: state.items
  }
}

const mapActionsToProps = {
  onRetrieveItems: RetrieveItems,
}
export default connect(mapStateToProps, mapActionsToProps)(ItemCartModal)