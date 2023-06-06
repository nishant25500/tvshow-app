import React from 'react';
import './MovieTicketBooking.css';

const MovieTicketBooking = () => {
  return (
    <div>
    <h1 className='head-top'>Book the Show</h1>
    <div className="form-container">     
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Movie Name</label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Language</label>
            <input type="text" className="form-control" id="inputPassword4" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Name</label>
          <input type="text" className="form-control" id="inputAddress" />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Number of tickets</label>
          <input type="number" className="form-control" id="inputAddress2" />
        </div>
        <button type="submit" className="btn btn-primary">Buy</button>
      </form>
    </div>
    </div>
  );
};

export default MovieTicketBooking;