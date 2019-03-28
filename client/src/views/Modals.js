import React from "react";
import RetrieveItems from "../actions/itemActions";
import { connect } from "react-redux";
import { AddOrderItem } from "../actions/orderitemActions";

class ItemCartModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: "pizza",
      itemsInOrder: []
    };
    this.handleAddItem = this.handleAddItem.bind(this);
    this.openTab = this.openTab.bind(this);
    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
  }

  componentDidMount() {
    this.props.onRetrieveItems().catch(error => {
      console.log("Error : ", error);
    });
    this.setState({
      itemsInOrder: this.props.orderitems.items.map(item => item.item_id)
    });
  }

  handleAddItem(e, item_id) {
    console.log("here adding an item");
    this.props.onAddOrderItem(
      this.props.orderitems.order_id,
      item_id,
      e.target.value
    );
  }

  openTab(e) {
    this.setState({
      currentTab: e.target.value
    });
  }

  capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1, text.length);
  }

  render() {
    let categories = ["pizza", "pasta", "appetizer", "beverages"];
    //let category_img_source=['3225463','3543612','2234763','3128357'];
    let itemsInOrder = this.state.itemsInOrder;
    let filterdItems = this.props.items.filter(
      item => item.category.toLowerCase() === this.state.currentTab
    );

    return (
      <div>
        <div>
          <button
            type="button"
            id="close-btn"
            className="close"
            aria-label="Close"
            onClick={this.props.closeModal}
          >
            {" "}
            Close
          </button>
        </div>
        <div id="container">
          <div id="tabs">
            {categories.map((category, index) => (
              <button
                id="tabButton"
                key={index}
                value={category}
                onClick={e => this.openTab(e)}
              >
                {this.capitalizeFirstLetter(category)}
              </button>
            ))}
          </div>
          <div id="content">
            <div className="itemlist-wrapper">
              {filterdItems.map((item, index) => (
                <div className="card-wrapper" key={index}>
                  <div className="card">
                    <div className="card-container">
                      <h5>
                        <b>{item.item_name}</b>
                      </h5>
                      <img
                        src="https://source.unsplash.com/collection/3225463/200x100"
                        alt="food-logo"
                      />
                    </div>
                  </div>

                  <div className="detail-panel">
                    <div className="h-row">
                      <label>{item.item_name} </label>
                    </div>
                    <div className="h-row">
                      <label>RS. {item.price} </label>
                    </div>
                    <div className="h-row">
                      {itemsInOrder.indexOf(item.item_id) > -1 ? (
                        "Already added"
                      ) : (
                        <div>
                          <p>
                            {" "}
                            <input
                              id="data-input"
                              type="number"
                              defaultValue={1}
                              onChange={e =>
                                this.handleAddItem(e, item.item_id)
                              }
                            min="1"/>
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items.data,
    orderitems: state.orderitems
  };
};

const mapActionsToProps = {
  onRetrieveItems: RetrieveItems,
  onAddOrderItem: AddOrderItem
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(ItemCartModal);

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
