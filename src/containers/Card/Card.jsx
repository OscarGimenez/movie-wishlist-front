// import React, { Component } from "react";

// import Loader from "../../components/UI/WishlistLoader/WishlistLoader";

// import { connect } from "react-redux";

// class Card extends Component {
//   shouldComponentUpdate(nextProps, nextState) {  //TODO:
//     // if (nextProps.uniqueKey === this.props.uniqueKey) return false;

//     // return true;
//   }

//   render() {
//     let button = <Loader />;
//   if (!this.props.isLoading) {
//     button = <button
//     onClick={this.props.addToWishlist}
//     className="btn btn-xs btn-danger"
//   >
//     <i className="fas fa-heart" /> Add to my wishlist
//   </button>;
//   }
//   let footer = null;
//   if (this.props.isAuthenticated) {
//     footer = (
//       <div className="card-footer">
//         {button}
//       </div>
//     );
//   }

//   return (
//     <div className="card">
//       <img className="card-img-top" src={this.props.poster} alt={this.props.title} />
//       <div className="card-body">
//         <h5 className="card-title">{this.props.title}</h5>
//         <p className="card-text">{this.props.description}</p>
//       </div>
//       <div className="card-footer">
//         <small className="text-muted">Release year: {this.props.year}</small>
//       </div>
//       {footer}
//     </div>
//   );
//   }
// }

// const mapStateToProps = (state, ownProps) => ({
//   // item: getItemByKey(ownProps.uniqueKey)
// });

// export default connect(mapStateToProps)(Card);
