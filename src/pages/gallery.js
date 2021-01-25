import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

const gallery = ({ galleryText }) => (
    <Layout>
        <div className="gallery-background">
            <li id="gallery-text">Gallery Page</li>
        </div>
    </Layout>
)

gallery.propTypes = {
  galleryText: PropTypes.string
}

export default gallery
