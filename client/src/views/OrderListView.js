import React from 'react';
import { connect } from 'react-redux';
import RetrieveOrdersByUserName from '../actions/orderActions';

var dateFormat = require('dateformat');

class OrderListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            rowsPerPage: 5,
            isFilter:false,
            clickedFilter:'all'
        }
        this.handleRowClick = this.handleRowClick.bind(this);
        this.handleFilterOrders = this.handleFilterOrders.bind(this);
    }


    componentDidMount() {
        const { onRetrieveOrders } = this.props;
        onRetrieveOrders().catch((error) => {
            this.props.history.push('/login');
        });

    }

    handleFilterOrders(e){
        this.setState({
            isFilter:true,
            clickedFilter:e.target.value
        });
    }

    handleRowClick(order_id) {
        this.setState({
            showTable: true
        });
        this.props.history.push("/order/" + order_id);
        
    }


    render() {
        let filterdOrders=this.props.orders;
        if(this.state.isFilter){
            if(this.state.clickedFilter==='all'){
                filterdOrders=this.props.orders;
            }else{
                filterdOrders=this.props.orders.filter(order=>order.status===this.state.clickedFilter);
            }
            
        }
        return (
            <div>        
                <div className="orderlist-wrapper">
                <select  className="order-filter" onChange={e=>this.handleFilterOrders(e)}>
                    <option value="">Filter order by status</option>
                    <option value="all">All</option>
                    <option value="open">Open</option>
                    <option value="close">Closed</option>
                </select>
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
                            {filterdOrders.map((order, index) =>
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
    onRetrieveOrders: RetrieveOrdersByUserName,
}

export default connect(mapStateToProps, mapActionsToProps)(OrderListView);
