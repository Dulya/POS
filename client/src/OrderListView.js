import React from 'react';
import { connect } from 'react-redux';
import RetrieveOrders from './actions/orderActions';


class OrderListView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { onRetrieveOrders } = this.props;
        onRetrieveOrders()
            .catch((error) => {
                this.props.history.push('/login');
            });
    }


    render() {
        return (
            <div>
                <div className="orderlist-wrapper">
                    <table className="table table-hover table table-bordered">
                        <thead className="black white-text">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Order ID</th>
                                <th scope="col">Creation Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody >
                            { this.props.orders.map((order, index) => 
                                <tr key={index}> 
                                    <th scope="col">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="tableDefaultCheck1" />
                                            <label className="custom-control-label" htmlFor="tableDefaultCheck1"> 1</label>
                                        </div>
                                    </th>
                                    <td>{order.order_id}</td>
                                    <td>{order.user_name}</td>
                                    <td>{order.status}</td>
                                    <td>{order.created_date}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="orderdetail-wrapper">
                    <table className="table table-hover table table-bordered">
                        <thead className="black white-text">
                            <tr>
                                <th scope="col">Item Id</th>
                                <th scope="col">Item Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Unit Price</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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