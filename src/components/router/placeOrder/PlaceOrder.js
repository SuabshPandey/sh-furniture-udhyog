import axios from "axios";
import React, { useState , useEffect } from "react";
import baseUrl from "../../Constant";

const PlaceOrder = ({ match }) => {
  console.log(match);

  const [selectproduct, setProduct] = useState([]);

  const [order, setOrder] = useState({
    companyName: "",
    companyLocation: "",
    companyNumber: "",
    companyEmail: "",
    desiredDeliveryDate: "",
    product: "",
    qty: "",
  });

  const handleInputs = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setOrder({ ...order, [name]: value });
  };

  // const productMatchedId = match.params.id;
  const handleOrders = async (e) => {
    e.preventDefault();

    const {
      companyName,
      companyLocation,
      companyNumber,
      companyEmail,
      desiredDeliveryDate,
      product,
      qty,
    } = order;
    const response = await fetch(`${baseUrl}/order/`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        companyName,
        companyLocation,
        companyNumber,
        companyEmail,
        desiredDeliveryDate,
        product,
        qty,
      }),
    });

    const responseData = await response.json();
    console.log(responseData);

    if (response.status === 201) {
      setOrder({
        companyName: "",
        companyLocation: "",
        companyNumber: "",
        companyEmail: "",
        desiredDeliveryDate: "",
        product: "",
        qty: "",
      });
      alert("Order Received Successfully . Thank You");
    } else {
      alert(
        "Order cannot receive. !!!! Please fill the required information correctly!!!"
      );
    }
  };

  useEffect(() => {
    axios.get(`${baseUrl}/product/`).then((res) => {
      console.log("Response Data",res)
      setProduct(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])




  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form encType="multipart/form-data">
            <div className="form-group">
              <label>Product Name</label>
              {/* <input
                className="form-control"
                type="text"
                onChange={handleInputs}
                value={order.product}
                name="product"
              /> */}

              <select
                className="form-control interest_location ma_b"
                name="product"
                onChange={handleInputs}
                value={order.product}
              >

              {selectproduct.map((items) => {
                return(
                <option key={items.id} value={items.name}>{items.name}</option>

                )
              })}
                
              </select>




            </div>
            <div className="form-group">
              <label>Company Name</label>
              <input
                className="form-control"
                type="text"
                name="companyName"
                onChange={handleInputs}
                value={order.companyName}
                placeholder="Company Name"
              />
            </div>
            <div className="form-group">
              <label>Company Location</label>
              <input
                className="form-control"
                type="text"
                name="companyLocation"
                onChange={handleInputs}
                value={order.companyLocation}
                placeholder="Company Location"
              />
            </div>
            <div className="form-group">
              <label>Company Number</label>
              <input
                className="form-control"
                type="number"
                name="companyNumber"
                onChange={handleInputs}
                value={order.companyNumber}
                placeholder="Company Number"
              />
            </div>
            <div className="form-group">
              <label>Company Email</label>
              <input
                className="form-control"
                type="email"
                name="companyEmail"
                onChange={handleInputs}
                value={order.companyEmail}
                placeholder="Company Email"
              />
            </div>
            <div className="form-group">
              <label>Desired Delivery Date</label>
              <input
                className="form-control"
                type="date"
                name="desiredDeliveryDate"
                onChange={handleInputs}
                value={order.desiredDeliveryDate}
                placeholder="Desired Delivery Date"
              />
            </div>
            <div className="form-group">
              <label>Quantity</label>
              <input
                className="form-control"
                type="number"
                name="qty"
                onChange={handleInputs}
                value={order.qty}
                placeholder="Quantity"
              />
            </div>
          </form>
        </div>
        <div className="col-lg-6 tc my-5">
          <h1 className="checkout_title tc">Proceed to checkout</h1>
          <p>Please make sure that the provided informations are valid.</p>
          <button className="btn btn-outline-dark" onClick={handleOrders}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
