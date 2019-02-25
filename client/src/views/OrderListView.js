import React from 'react';
import { connect } from 'react-redux';
import RetrieveOrders from '../actions/orderActions';

var dateFormat = require('dateformat');

class OrderListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            rowsPerPage: 5,
        }
        this.handleRowClick = this.handleRowClick.bind(this);
    }


    componentDidMount() {
        const { onRetrieveOrders } = this.props;
        onRetrieveOrders().catch((error) => {
            this.props.history.push('/login');
        });

    }

    handleRowClick(order_id) {
        this.setState({
            showTable: true
        });
        this.props.history.push("/order/"+order_id);
    }


    render() {    
        return (
            <div>
                <div className="orderlist-wrapper">
                    <table className="table table-hover table table-bordered ">
                        <thead className="black white-text">
                            <tr className="table_row">
                                <th className="table_cell" scope="col"></th>
                                <th className="table_cell" scope="col">Order ID</th>
                                <th className="table_cell" scope="col">Creation Date</th>
                                <th className="table_cell" scope="col">Status</th>
                                <th className="table_cell" scope="col">Total Amount</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.props.orders.map((order, index) =>
                                <tr className="table_row" key={index} onClick={() => this.handleRowClick(order.order_id)}>
                                    <th className="table_cell" scope="col">
                                        <div >
                                            <label> {index + 1}</label>
                                        </div>
                                    </th>
                                    <td className="table_cell">{order.order_id}</td>
                                    <td className="table_cell">{dateFormat(order.created_date, "dddd, mmmm dS, yyyy")}</td>
                                    <td className="table_cell">{order.status}</td>
                                    <td className="table_cell">{order.total_amount}</td>
                                </tr>
                            )}
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
    onRetrieveOrders: RetrieveOrders,
}

export default connect(mapStateToProps, mapActionsToProps)(OrderListView);
