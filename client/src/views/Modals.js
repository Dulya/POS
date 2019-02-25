import React from 'react'
import RetrieveItems from '../actions/itemActions';
import { connect } from 'react-redux';
import itemLogo from '../images/addcart3.png';

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
          <div className="itemlist-wrapper">
            <div className="inner-wrapper">
              <table id="table-item" className="table table-hover table table-bordered">
                <thead className="black white-text">
                  <tr className="table_row">
                    <th className="table_cell" scope="col"></th>
                    <th className="table_cell" scope="col"><label className="th-label">Item Name</label> </th>
                    <th className="table_cell" scope="col"><label className="th-label">Unit Price </label> </th>
                  </tr>
                </thead>
                <tbody >
                  {this.props.items.map((item, index) =>
                    <tr key={index}>
                      <th className="table_cell" scope="col">
                        <div >
                          <label> {index + 1}</label>
                        </div>
                      </th>
                      <td className="table_cell">{item.item_name}</td>
                      <td className="table_cell">{item.price}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

          </div>

        </div>
        <div className="item-detail-panel">
          <div className="card">

            <img src={itemLogo} width={100} height={100} alt="item-logo" />


          </div>
          <div>
            <label>Quantity</label>
            <input className="input_quantity" placeholder="Enter order Qty" required type="number" min="0" max="100" defaultValue={1} />
            <button className="toggle-button" htmlFor="check"><i className="fa fa-cart-plus" id="addcart-icon"></i></button>
          </div>

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

//<input className="input_quantity" placeholder="Enter order Qty" required type="number" min="0" max="100" defaultValue={1}/>
//<button className="toggle-button" htmlFor="check"><i className="fa fa-cart-plus" id="addcart-icon"></i></button>