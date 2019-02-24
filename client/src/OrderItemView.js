import React from 'react';
import { connect } from 'react-redux';
import RetrievOrderItems from './actions/orderitemActions';
import ModalContainer from './ModalContainer';
import { OpenModal, HideModal } from './actions/modalActions';

var dateFormat = require('dateformat');

class OrderItemView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            rowsPerPage: 10,
        }
        this.handleRowClick = this.handleRowClick.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);

    }

    componentDidMount() {
        this.props.onRetrievOrderItems(this.props.match.params.id)
            .catch((error) => {
                console.log("Error : ", error);
            });
    }

    updateQuantity(e) {

    }

    handleRowClick(order_id) {
        this.setState({
            showTable: true
        });
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

    handleOpenModal(event) {
        this.props.onOpenModal('itemCart', 'ItemCart Modal', this.props.items);
    }

    render() {
        const { currentPage, rowsPerPage } = this.state;
        const items = this.props.orderitems.items;
        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;
        const currentRows = items.slice(indexOfFirstRow, indexOfLastRow);

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(items.length / rowsPerPage); i++) {
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
                <ModalContainer />
                <div>
                    <div className="orderlist-wrapper">
                        <table className="table table-hover table table-bordered ">
                            <thead className="black white-text">
                                <tr className="table_row">
                                    <th className="table_cell" scope="col">Order ID</th>
                                    <th className="table_cell" scope="col">Creation Date</th>
                                    <th className="table_cell" scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr className="table_row" >
                                    <td className="table_cell">{this.props.orderitems.order_id}</td>
                                    <td className="table_cell">{dateFormat(this.props.orderitems.created_date, "dddd, mmmm dS, yyyy")}</td>
                                    <td className="table_cell">{this.props.orderitems.status}</td>
                                    <td className="table_cell">{this.props.orderitems.quantity}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
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
            </div>
        );

    }

}

const mapStateToProps = state => {
    return {
        orderitems: state.orderitems,
        modal: state.modal,
        items: state.items
    }
}

const mapActionsToProps = {
    onRetrievOrderItems: RetrievOrderItems,
    hideModal: HideModal,
    onOpenModal: OpenModal
}

export default connect(mapStateToProps, mapActionsToProps)(OrderItemView);