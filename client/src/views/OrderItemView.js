import React from 'react';
import { connect } from 'react-redux';
import RetrieveItemsByOrderId from '../actions/orderitemActions';
import ModalContainer from './ModalContainer';
import { OpenModal, HideModal } from '../actions/modalActions';
import { UpdateOrderItem, DeleteOrderItem } from '../actions/orderitemActions';
import { Link } from 'react-router-dom';


var dateFormat = require('dateformat');

class OrderItemView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            rowsPerPage: 10,
            updateValue: 0,

        }
        this.updateQuantity = this.updateQuantity.bind(this);
        this.deleteCartItem = this.deleteCartItem.bind(this);
        this.handlePagination = this.handlePagination.bind(this);
        this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    componentDidMount() {
        this.props.onRetrievOrderItems(this.props.match.params.id)
            .catch((error) => {
                console.log("Error : ", error);
            });
    }

    updateQuantity(e, id) {
        this.setState({
            [e.target.name]: [e.target.value]
        });
        this.props.orderitems.items.map((item, index) => {
            if (item.orderitem_id === id) {
                this.props.orderitems.items[index].quantity = e.target.value;
                this.props.onUpdateOrderItem(this.props.orderitems.items[index])
                    .catch(err => {
                        console.log("Error : ", err);
                    });
            }
        });
    }

    deleteCartItem(e, id) {
        this.props.orderitems.items.map((item, index) => {
            this.props.onDeleteOrderItem(id)
                .then(res => {
                    this.render();
                })
                .catch(err => {
                    console.log("Error : ", err);
                });
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
                    <div className="breadcrumbPanel">
                        <Link to="/orders">Orders </Link><span className="glyphicon glyphicon-play" style={{color:'#007bff'}}></span> <Link to="/order/:id">Order Details</Link>
                    </div>
                    <div className="order-wrapper">
                        <table id="table-order" className="table table-default ">
                            <thead className="black white-text">
                                <tr className="table_row">
                                    <th className="table_cell" scope="col"><label className="th-label">Order ID</label> </th>
                                    <th className="table_cell" scope="col"><label className="th-label">Creation Date </label> </th>
                                    <th className="table_cell" scope="col"><label className="th-label">Status </label></th>
                                    <th className="table_cell" scope="col"><label className="th-label">Total Amount </label></th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr className="table_row" >
                                    <td className="table_cell">{this.props.orderitems.order_id}</td>
                                    <td className="table_cell">{dateFormat(this.props.orderitems.created_date, "dddd, mmmm dS, yyyy")}</td>
                                    <td className="table_cell">{this.props.orderitems.status}</td>
                                    <td className="table_cell">{this.props.orderitems.total_amount}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div className="orderdetail-wrapper">
                        <div className="orderdetail-header">
                            <button className="add_cart_btn" onClick={this.handleOpenModal}><i className="fa fa-cart-plus" ></i> Add to Order</button>
                        </div>

                        <table id="table-cart" className="table table-hover table table-bordered">
                            <thead className="black white-text">
                                <tr className="table_row">
                                    <th className="table_cell" scope="col"></th>
                                    <th className="table_cell" scope="col">Item Name</th>
                                    <th className="table_cell" scope="col">Quantity</th>
                                    <th className="table_cell" scope="col">Unit Price</th>
                                </tr>
                            </thead>
                            <tbody >
                                {currentRows.map((orderitem, index) =>
                                    <tr className="table_row" key={index}>
                                        <td className="table_cell">{index + 1}</td>
                                        <td className="table_cell">{orderitem.item_name}</td>
                                        <td className="table_cell"><input className="input_spinner" name={'input' + orderitem.orderitem_id} placeholder="Enter a number" value={orderitem.quantity} required type="number" min="1" max="100" onChange={e => this.updateQuantity(e, orderitem.orderitem_id)} /></td>
                                        <td className="table_cell">{orderitem.price}</td>
                                        <td className="table_cell"><button className="remove_btn" onClick={e => this.deleteCartItem(e, orderitem.orderitem_id)}><i className="fa fa-trash"></i> </button></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <ul id="page-numbers">
                            {renderPageNumbers}
                        </ul>
                    </div>
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
    onRetrievOrderItems: RetrieveItemsByOrderId,
    hideModal: HideModal,
    onOpenModal: OpenModal,
    onUpdateOrderItem: UpdateOrderItem,
    onDeleteOrderItem: DeleteOrderItem
}

export default connect(mapStateToProps, mapActionsToProps)(OrderItemView);
