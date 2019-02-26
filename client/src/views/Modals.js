import React from 'react'
import RetrieveItems from '../actions/itemActions';
import { connect } from 'react-redux';
import { AddOrderItem } from '../actions/orderitemActions';


class ItemCartModal extends React.Component {

  constructor(props) {
    super(props);
    this.handleAddItem = this.handleAddItem.bind(this);
  }

  componentDidMount() {
    this.props.onRetrieveItems()
      .catch((error) => {
        console.log("Error : ", error);
      });
  }

  handleAddItem(e, item_id) {
    this.props.onAddOrderItem(this.props.orderitems.order_id, item_id, e.target.value);
  }


  render() {
    return (
      <div>
        <div >
          <button type="button" id="close-btn" className="close" aria-label="Close" onClick={this.props.closeModal}> Close
    
          </button>
        </div>
        <div >
          <div className="outer-wrapper">
            <div className="itemlist-wrapper">

              {this.props.items.map((item, index) =>
                <div className="card-wrapper" key={index}>
                  <div className="card" onClick={e => this.onSelectItem(e, item)}>
                    <div className="card-container">
                      <h3><b>{item.item_name}</b></h3>
                    </div>
                  </div>

                  <div className="detail-panel">
                    <div className="h-row">
                      <label >Item Name </label>
                      <p> : {item.item_name}</p>
                    </div>
                    <div className="h-row">
                      <label >Unit Price </label>
                      <p> : {item.price}</p>
                    </div>
                    <div className="h-row">
                      <label >Quantity </label>
                      <p> : <input id="data-input" type="number" defaultValue={0} onChange={e => this.handleAddItem(e, item.item_id)}></input></p>
                    </div>

                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    items: state.items,
    orderitems: state.orderitems
  }
}

const mapActionsToProps = {
  onRetrieveItems: RetrieveItems,
  onAddOrderItem: AddOrderItem
}
export default connect(mapStateToProps, mapActionsToProps)(ItemCartModal)

//<input className="input_quantity" placeholder="Enter order Qty" required type="number" min="0" max="100" defaultValue={1} />
//<button className="toggle-button" htmlFor="check"><i className="fa fa-cart-plus" id="addcart-icon"></i></button>

/*<div className="detail-footer">
                <button className="add_item_btn"><i className="fa fa-cart-plus" ></i></button>
              </div>*/

/*
<div className="add-item-panel" style={this.state.isClicked ?{ visibility: 'visible' } :{visibility:'hidden'} }>
            <div className="item-image">
              <img alt="item-image" />
            </div>
            <div id="container">
              <div id="label-div">Item Id : </div>
              <div id="data-div">{this.state.clicked_item.item_id}</div>
            </div>
            <div id="container">
              <div id="label-div">Item Name : </div>
              <div id="data-div">{this.state.clicked_item.item_name}</div>
            </div>

            <div id="container">
              <div id="label-div">Unit Price : </div>
              <div id="data-div">{this.state.clicked_item.price}</div>
            </div>

            <div id="container">
              <div id="label-div">Quantity : </div>
              <input id="data-input" type="number" defaultValue={0} onChange={e=>this.handleAddItem(e,this.state.clicked_item.item_id)}></input>
            </div>
          </div> */