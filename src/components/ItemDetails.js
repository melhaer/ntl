import React from 'react';

import DeleteButton from './DeleteButton';

class ItemDetails extends React.Component {
  render() {
    return (
      <div className="item">
        <p className="text">{this.props.text}</p>
        <div className="tags">
          <span>{this.props.tags}</span>
        </div>
        <div className="author-details">
          <span className="author-name">{this.props.name},</span>
          <span className="author-age">{this.props.age}</span>
          <span className="author-location">from {this.props.location}</span>
        </div>
        <DeleteButton />
      </div>
    );
  }
}

export default ItemDetails;