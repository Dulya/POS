import React from 'react';
import { connect } from 'react-redux';
import RetrieveOrders from './actions/orderActions';
import RetrievOrderItems from './actions/orderitemActions';
import ModalContainer from './ModalContainer';
import { OpenModal, HideModal } from './actions/modalActions'

var dateFormat = require('dateformat');

class OrderListView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showTable: false,
            currentPage: 1,
            rowsPerPage: 5,
            show:false
        }
        this.handleRowClick = this.handleRowClick.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

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
        this.setState({ showTable: true })
        const { onRetrievOrderItems } = this.props;
        onRetrievOrderItems(order_id).catch((error) => {
            console.log("Error : ", error);
        });
    }

    handlePagination(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    closeModal() {
        HideModal();
    }

    handleOpenModal(event) {
        this.setState({
            show:true
        });
        const { onOpenModal } = this.props;
        onOpenModal({
          open: true,
          title: 'Alert Modal',
          message: MESSAGE,
          closeModal: this.closeModal
        }, 'alert')
    }

    render() {
        const { currentPage, rowsPerPage } = this.state;
        const orderitems = this.props.orderitems;

        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        const currentRows = orderitems.slice(indexOfFirstRow, indexOfLastRow);

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(orderitems.length / rowsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handlePagination}
                >
                    {number}
                </li>
            );
        });



        return (
            <div>

                <ul className="nav nav-tabs" id="tab_menu">
                    <li className="active"><a href="">All Orders</a>

                    </li>
                    <li><a href="">Open Orders</a></li>
                </ul>
                
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
                {this.state.showTable &&
                    <div>
                        <div className="orderdetail-header">
                            <button className="add_cart_btn" onClick={this.handleOpenModal}><i className="fa fa-cart-plus" ></i> Add to Order</button>
                        </div>
                        <div className="orderdetail-wrapper">

                            <table className="table table-hover table table-bordered ">
                                <thead className="black white-text">
                                    <tr className="table_row">
                                        <th className="table_cell" scope="col"></th>
                                        <th className="table_cell" scope="col">Order Item Id</th>
                                        <th className="table_cell" scope="col">Item Name</th>
                                        <th className="table_cell" scope="col">Quantity</th>
                                        <th className="table_cell" scope="col">Unit Price</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {currentRows.map((orderitem, index) =>
                                        <tr className="table_row" key={index}>
                                            <th className="table_cell" scope="col">
                                                <div >
                                                    <label> {indexOfFirstRow + index + 1}</label>
                                                </div>
                                            </th>
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
                        <ul id="page-numbers">
                            {renderPageNumbers}
                        </ul>
                    </div>
                }
                {this.state.show && <ModalContainer/>}
            </div>
        );

    }

}

const MESSAGE = "A redux modal component.";
const mapStateToProps = state => {
    return {
        user: state.user,
        orders: state.orders,
        orderitems: state.orderitems,
    }
}

const mapActionsToProps = {
    onRetrieveOrders: RetrieveOrders,
    onRetrievOrderItems: RetrievOrderItems,
    hideModal: HideModal,
    onOpenModal: OpenModal
}

export default connect(mapStateToProps, mapActionsToProps)(OrderListView);
