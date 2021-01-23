import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../../Archetypes/ProductCard/ProductCard';
import PageTitle from '../../Archetypes/PageTitle/PageTitle';
import Button from '../../Archetypes/Button/Button';
import './UpcomingWorkshops.css'

const UpcomingWorkshops = () => (
  <div className="upcoming-workshops">
    <div className="workshop-title">
        <h1 id="workshops-area-heading">Upcoming Workshops</h1>
    </div>

    <div className="workshop-item-wrapper">
        <div className="workshop-item">
            <div className="item-heading-area">
              <h3 className="item-heading">Swedish Massage</h3>
              <h3>Wed 9am - 11am</h3>
            </div>
            <div>
              <p className="workshop-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Duis aute irure dolor in
              </p>
            </div>
            <div>
              <div className="info-button">
                <div id="info-button-text">Info</div>
              </div>
            </div>
        </div>
        <div className="workshop-item">
            <div className="item-heading-area">
              <h3 className="item-heading">Swedish Massage</h3>
              <h3>Wed 9am - 11am</h3>
            </div>
            <div>
              <p className="workshop-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in Duis aute irure dolor in
              </p>
            </div>
            <div>
              <div className="info-button">
                <div id="info-button-text">Info</div>
              </div>
            </div>
        </div>
    </div>
  </div>
)



export default UpcomingWorkshops
