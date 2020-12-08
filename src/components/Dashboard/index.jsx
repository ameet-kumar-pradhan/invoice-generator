import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import style from './dashboard.scss';
import {
  logOut,
  createNewInvoice,
  deleteInvoice,
} from '../../redux/ActionCreators';

const Dashboard = props => {
  const [invoice, setInvoice] = useState({
    name: 'Samsung TV',
    description: 'TV 4K LED TV',
    units: '5',
    price: '199999',
    discount: '10',
    tax: '18',
  });
  const {
    LoginReducer: {
      profileObj: { email, imageUrl, name },
    },
    InvoiceReducer: { invoices },
    logOut,
    createNewInvoice,
    deleteInvoice,
  } = props;
  const handleLogout = () => {
    logOut();
  };
  const handleCreateInvoice = () => {
    createNewInvoice(invoice);
    setInvoice({
      name: '',
      description: '',
      units: '',
      price: '',
      discount: '',
      tax: '',
    });
  };
  const handleDeleteInvoice = e => {
    deleteInvoice(e);
  };
  //   const handleEditInvoice = e => {
  //     editInvoice(e);
  //   };
  return (
    <div className={style.dashboard}>
      <div className={style.navbar}>
        <div className={style.userInfo}>
          <div className={style.userInfoDetail}>
            <div>{name}</div>
            <div>{email}</div>
          </div>
        </div>
        <div className={style.leftNav}>
          <button
            className={style.logoutBtn}
            onClick={handleLogout}
            type="button"
          >
            Logout
          </button>
          <img
            src={
              imageUrl ||
              'http://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG-Free-Download.png'
            }
            alt="profile Photo"
            className={style.userInfoImg}
          />
        </div>
      </div>
      <div className={style.main}>
        <h4>Welcome {name || email}'s Dashboard</h4>
        <div className={style.invoiceFields}>
          <input
            type="text"
            placeholder="Item Name"
            onChange={e => setInvoice({ ...invoice, name: e.target.value })}
            value={invoice.name}
          />
          <input
            type="text"
            placeholder="Item Description"
            onChange={e =>
              setInvoice({ ...invoice, description: e.target.value })
            }
            value={invoice.description}
          />
          <input
            type="number"
            placeholder="Number of units"
            min="0"
            onChange={e => setInvoice({ ...invoice, units: e.target.value })}
            value={invoice.units}
          />
          <input
            type="number"
            placeholder="Unit Price"
            min="0"
            onChange={e => setInvoice({ ...invoice, price: e.target.value })}
            value={invoice.price}
          />
          <input
            type="number"
            placeholder="Discount %"
            min="0"
            onChange={e => setInvoice({ ...invoice, discount: e.target.value })}
            value={invoice.discount}
          />
          <input
            type="number"
            placeholder="Tax %"
            min="0"
            onChange={e => setInvoice({ ...invoice, tax: e.target.value })}
            value={invoice.tax}
          />
          {/* <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Add notes If any"
          ></textarea> */}
        </div>
        <div className={style.submitBtnDiv}>
          {invoice.name &&
          invoice.description &&
          invoice.units &&
          invoice.price &&
          invoice.discount &&
          invoice.tax ? (
            <button
              onClick={handleCreateInvoice}
              className={style.createBtn}
              type="button"
            >
              Create
            </button>
          ) : (
            <button
              onClick={handleCreateInvoice}
              className={style.createBtn}
              disabled
              type="button"
            >
              Create
            </button>
          )}
        </div>
        <div className={style.invoiceTable}>
          <table>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Item Description</th>
                <th>Number of units</th>
                <th>Unit Price</th>
                <th>Discount %</th>
                <th>Tax %</th>
                {/* <th colSpan="2">Actions</th> */}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => {
                return (
                  <tr key={index}>
                    <td>{invoice.name}</td>
                    <td>{invoice.description}</td>
                    <td>{invoice.price}</td>
                    <td>{invoice.units}</td>
                    <td>{invoice.discount}</td>
                    <td>{invoice.tax}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => handleDeleteInvoice(index)}
                      >
                        Delete
                      </button>
                    </td>
                    {/* <td>
                      <button
                        type="button"
                        onClick={() => handleEditInvoice(index)}
                      >
                        Edit
                      </button>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { logOut, createNewInvoice, deleteInvoice },
    dispatch
  );
}

Dashboard.propTypes = {
  LoginReducer: PropTypes.object,
  createNewInvoice: PropTypes.func,
  deleteInvoice: PropTypes.func,
  InvoiceReducer: PropTypes.object,
  logOut: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
