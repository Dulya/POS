import React from 'react'
import RetrieveItems from '../actions/itemActions';
import { connect } from 'react-redux';
import { AddOrderItem } from '../actions/orderitemActions';


class ItemCartModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentTab: 'pizza'
    }
    this.handleAddItem = this.handleAddItem.bind(this);
    this.openTab = this.openTab.bind(this);
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

  openTab(e) {
    this.setState({
      currentTab: e.target.value
    });
  }


  render() {
    console.log("item.category", this.state.currentTab);
    let categories = ['pizza', 'pasta', 'appetizer', 'beverages'];
    let filterdItems = this.props.items.filter(item => item.category.toLowerCase() === this.state.currentTab);

    return (
      <div>
        <div >
          <button type="button" id="close-btn" className="close" aria-label="Close" onClick={this.props.closeModal}> Close
          </button>
        </div>

        <div >
          <div className="outer-wrapper">
            <div className="tab">
              {categories.map((category, index) =>
                <button key={index} value={category} onClick={e => this.openTab(e)} >{category}</button>
              )}
            </div>

            {this.state.currentTab === 'pizza' &&
              <div className="itemlist-wrapper">
                {filterdItems.map((item, index) =>
                  <div className="card-wrapper" key={index}>
                    <div className="card">
                      <div className="card-container">
                        <h5><b>{item.item_name}</b></h5>
                      </div>
                    </div>

                    <div className="detail-panel">
                      <div className="h-row">
                      <label >{item.item_name} </label>
                      </div>
                      <div className="h-row">
                      <label >RS. {item.price} </label>
                      </div>
                      <div className="h-row">
                        <label >Quantity </label>
                        <p> : <input id="data-input" type="number" defaultValue={0} onChange={e => this.handleAddItem(e, item.item_id)}></input></p>
                      </div>

                    </div>
                  </div>
                )}
              </div>}

            {this.state.currentTab === 'pasta' &&
              <div className="itemlist-wrapper">

                {filterdItems.map((item, index) =>
                  <div className="card-wrapper" key={index}>
                    <div className="card">
                      <div className="card-container">
                        <h5><b>{item.item_name}</b></h5>
                      </div>
                    </div>

                    <div className="detail-panel">
                      <div className="h-row">
                      <label >{item.item_name} </label>
                      </div>
                      <div className="h-row">
                      <label >RS. {item.price} </label>
                      </div>
                      <div className="h-row">
                        <label >Quantity </label>
                        <p> : <input id="data-input" type="number" defaultValue={0} onChange={e => this.handleAddItem(e, item.item_id)}></input></p>
                      </div>

                    </div>
                  </div>
                )}
              </div>}

            {this.state.currentTab === 'appetizer' &&
              <div className="itemlist-wrapper">

                {filterdItems.map((item, index) =>
                  <div className="card-wrapper" key={index}>
                    <div className="card">
                      <div className="card-container">
                        <h5><b>{item.item_name}</b></h5>
                      </div>
                    </div>

                    <div className="detail-panel">
                      <div className="h-row">
                      <label >{item.item_name} </label>
                      </div>
                      <div className="h-row">
                      <label >RS. {item.price} </label>
                      </div>
                      <div className="h-row">
                        <label >Quantity </label>
                        <p> : <input id="data-input" type="number" defaultValue={0} onChange={e => this.handleAddItem(e, item.item_id)}></input></p>
                      </div>

                    </div>
                  </div>
                )}
              </div>}


            {this.state.currentTab === 'beverages' &&
              <div className="itemlist-wrapper">

                {filterdItems.map((item, index) =>
                  <div className="card-wrapper" key={index}>
                    <div className="card">
                      <div className="card-container">
                        <h5><b>{item.item_name}</b></h5>
                      </div>
                    </div>

                    <div className="detail-panel">
                      <div className="h-row">
                        <label >{item.item_name} </label>
                      </div>
                      <div className="h-row">
                        <label >RS. {item.price} </label>
                      </div>
                      <div className="h-row">
                        <label >Quantity </label>
                        <p> : <input id="data-input" type="number" defaultValue={0} onChange={e => this.handleAddItem(e, item.item_id)}></input></p>
                      </div>

                    </div>
                  </div>
                )}
              </div>}


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