import React from 'react';
import axios from 'axios';

class OrderListView extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const url = '/api/order/user/' + data.user_name;
        axios.get(url)
            .then( (orders) => {
                console.log(orders);
                this.props.history.push("/Orders");
            })
            .catch(function (error) {
                this.props.history.push('./Login');
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
                            <tr>
                                <th scope="col">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="tableDefaultCheck1" />
                                        <label className="custom-control-label" htmlFor="tableDefaultCheck1"> 1</label>
                                    </div>
                                </th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
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

export default OrderListView;