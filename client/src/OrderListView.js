import React from 'react';
import { connect } from 'react-redux';
import RetrieveOrders from './actions/orderActions';
import axios from 'axios';

class OrderListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTable: false,
            orderitems: []
        }
        this.handleRowClick = this.handleRowClick.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
    }

    componentDidMount() {
        const { onRetrieveOrders } = this.props;
        onRetrieveOrders().catch((error) => {
            this.props.history.push('/login');
        });

    }
    updateQuantity(e) {

    }

    handleRowClick(order_id) {
        const url = "/api/orderitem/" + order_id;
        axios.get(url)
            .then(res => {
                this.setState({ showTable: true });
                this.state.orderitems = res.data;

            })

    }

    renderTable() {

    }

    render() {
        return (
            <div>
                <div className="orderlist-wrapper">
                    <table className="table table-hover table table-bordered">
                        <thead className="black white-text">
                            <tr>
                                <th className="table_cell" scope="col"></th>
                                <th className="table_cell" scope="col">Order ID</th>
                                <th className="table_cell" scope="col">Creation Date</th>
                                <th className="table_cell" scope="col">Status</th>
                                <th className="table_cell" scope="col">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.props.orders.map((order, index) =>
                                <tr key={index} onClick={() => this.handleRowClick(order.order_id)}>
                                    <th scope="col">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id={index + 1} />
                                            <label className="custom-control-label" htmlFor={index + 1}> {index + 1}</label>
                                        </div>
                                    </th>
                                    <td className="table_cell">{order.order_id}</td>
                                    <td className="table_cell">{order.created_date}</td>
                                    <td className="table_cell">{order.status}</td>
                                    <td className="table_cell">{order.total_amount}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {this.state.showTable &&
                    <div>
                        <div className="orderdetail-header">
                            <button className="add_cart_btn"><i className="fa fa-cart-plus"></i> Add to Cart</button>
                        </div>
                        <div className="orderdetail-wrapper">
                            <table className="table table-hover table table-bordered">
                                <thead className="black white-text">
                                    <tr>
                                        <th className="table_cell" scope="col">Order Item Id</th>
                                        <th className="table_cell" scope="col">Item Name</th>
                                        <th className="table_cell" scope="col">Quantity</th>
                                        <th className="table_cell" scope="col">Unit Price</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {this.state.orderitems.map((orderitem, index) =>
                                        <tr key={index}>
                                            <td className="table_cell">{orderitem.orderitem_id}</td>
                                            <td className="table_cell">{orderitem.item_name}</td>
                                            <td className="table_cell"><input className="input_spinner" placeholder="Enter a number" required type="number" value={orderitem.quantity} min="0" max="100" onChange={e => this.updateQuantity(e)} /><button className="remove_btn"><i className="fa fa-edit"></i> </button></td>
                                            <td className="table_cell">{orderitem.price}</td>
                                            <td className="table_cell"><button className="remove_btn"><i className="fa fa-trash"></i> </button></td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                }

            </div>
        );

    }

}

const mapStateToProps = state => {
    return {
        user: state.user,
        orders: state.orders
    }
}

const mapActionsToProps = {
    onRetrieveOrders: RetrieveOrders
}

export default connect(mapStateToProps, mapActionsToProps)(OrderListView);
