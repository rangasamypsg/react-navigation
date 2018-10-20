import React from "react";

const Contact = () => {

    var divStyle = {
        width : '500px'
    };

  return (
    <div class="container" style={divStyle}>
        <form className="demoForm">
        <h2>Contact us</h2>
        <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control"
            name="email" />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control"
            name="password" />
        </div>
        <button type="submit" className="btn btn-primary">
            Sign up
        </button>
        </form>
     </div>
  );
};

export default Contact;