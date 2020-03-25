import React from 'react';
class ItemDetails extends React.Component {
  deleteButtonHandler = () => {
    this.props.closeHandler(this.props.id);
  }
  render() {
    const tagList = this.props.tags.map((tag, index) => <span key={index}>{tag}</span>);
    return (
      <div className="item">
        <p className="text">{this.props.text}</p>
        <div className="tags">
          {tagList}
        </div>
        <div className="author-details">
          <span className="author-name">{this.props.name},</span>
          <span className="author-age">{this.props.age}</span>
          <span className="author-location">from {this.props.location}</span>
        </div>
        <span className="delete-button" title="Delete Item" onClick={this.deleteButtonHandler}></span>
      </div>
    );
  }
}

export default ItemDetails;