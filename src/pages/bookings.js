import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

const bookings = ({ bookingsText }) => (
    <Layout>
        <div className="bookings-background">
            <li id="bookings-text">Bookings Page</li>
        </div>
  </Layout>
)

bookings.propTypes = {
  bookingsText: PropTypes.string
}

export default bookings
