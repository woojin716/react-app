import React, {useState, useEffect} from 'react';
import DashboardHeader from '../../components/DashboardHeader';

import all_txs from '../../constants/transactions';
import {calculateRange, sliceData} from '../../utils/table-pagination';

import '../styles.css';
import DoneIcon from '../../assets/icons/done.svg';
import CancelIcon from '../../assets/icons/cancel.svg';
import RefundedIcon from '../../assets/icons/refunded.svg';

function Transactions () {
    const [search, setSearch] = useState('');
    const [orders, setOrders] = useState(all_txs);
    const [page, setPage] = useState(1);
    const [pagination, setPagination] = useState([]);

    useEffect(() => {
        setPagination(calculateRange(all_txs, 10));
        setOrders(sliceData(all_txs, page, 10));
    }, []);

    // Search
    const __handleSearch = (event) => {
        setSearch(event.target.value);
        if (event.target.value !== ('')) {
            let search_results = orders.filter((item) =>
                item.id.toLowerCase().includes(search.toLowerCase()) ||
                item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                item.product.toLowerCase().includes(search.toLowerCase())
            );
            setOrders(search_results);
        }
        else {
            __handleChangePage(1);
        }
    };

    // Change Page 
    const __handleChangePage = (new_page) => {
        setPage(new_page);
        setOrders(sliceData(all_txs, new_page, 10));
    }

    return(
        <div className='dashboard-content'>
            <DashboardHeader
                btnText="Main" />

            <div className='dashboard-content-container'>
                <div className='dashboard-content-header'>
                    <h2>MEV Transactions</h2>
                    <div className='dashboard-content-search'>
                        <input
                            type='text'
                            value={search}
                            placeholder='Search..'
                            className='dashboard-content-input'
                            onChange={e => __handleSearch(e)} />
                    </div>
                </div>

                <table>
                    <thead>
                        <th>TX HASH</th>
                        <th>BLOCK NUMBER</th>
                        <th>FROM</th>
                        <th>TO</th>
                        <th>MEV AMOUNTS (eth)</th>
                        <th>GAS PRICE</th>
                        <th>TX FEE</th>

                    </thead>

                    {orders.length !== 0 ?
                        <tbody>
                            {orders.map((order, index) => (
                                <tr key={index}>
                                    <td><span>{order.id.slice(0,15)}...</span></td>
                                    <td><span>{order.date}</span></td>
                                    <td>
                                        <div>
                                            {order.status === 'Paid' ?
                                                <img
                                                    src={DoneIcon}
                                                    alt='paid-icon'
                                                    className='dashboard-content-icon' />
                                            : order.status === 'Canceled' ?
                                                <img
                                                    src={CancelIcon}
                                                    alt='canceled-icon'
                                                    className='dashboard-content-icon' />
                                            : order.status === 'Refunded' ?
                                                <img
                                                    src={RefundedIcon}
                                                    alt='refunded-icon'
                                                    className='dashboard-content-icon' />
                                            : null}
                                            <span>{order.status}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span>{order.first_name} {order.last_name}</span>
                                        </div>
                                    </td>
                                    <td><span>{order.product}</span></td>
                                </tr>
                            ))}
                        </tbody>
                    : null}
                </table>

                {orders.length !== 0 ?
                    <div className='dashboard-content-footer'>
                        {pagination.map((item, index) => (
                            <span 
                                key={index} 
                                className={item === page ? 'active-pagination' : 'pagination'}
                                onClick={() => __handleChangePage(item)}>
                                    {item}
                            </span>
                        ))}
                    </div>
                : 
                    <div className='dashboard-content-footer'>
                        <span className='empty-table'>No data</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default Transactions;