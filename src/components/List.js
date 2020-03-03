import React, { Component } from "react";
// import CreateFormContainer from "./CreateFormContainer";
// import LoginFormContainer from "./LoginFormContainer";
// import SignupFormContainer from "./SignupFormContainer";

export default function List(props) {
  return (
    <div className="singleListComp">
      <h3>{props.title}</h3>
      <img src={props.url} alt="img" />
    </div>
  );
}
// export default class List extends Component {
//   displayImages = () => {
//     return this.props.images.length > 0 ? (
//       <div>
//         <div>
//           {!this.props.loggedIn ? (
//             <div>
//               Log in: <LoginFormContainer></LoginFormContainer>
//               Sign up : <SignupFormContainer></SignupFormContainer>
//             </div>
//           ) : (
//             <div>
//               {" "}
//               You are logged in<br></br> Post a new image:
//               <CreateFormContainer></CreateFormContainer>
//               {this.props.images.map(image => {
//                 return (
//                   <div key={image.id}>
//                     <h3>{image.title}</h3>
//                     <img src={image.url}></img>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     ) : (
//       <div>Loading . . .</div>
//     );
//   };
//   render() {
//     return this.displayImages();
//   }
// }

// class List extends React.Component
//   render() {
//     {
//       console.log(this.props.user, "test");
//     }
//     return this.props.user.length === 0 ? (
//       <div>Login to display images</div>
//     ) : this.props.images.length === 0 ? (
//       <div>No images to display</div>
//     ) : (
//       <div>
//         {this.props.images.map((image, index) => {
//           return <img key={index} src={image.url} alt={image.title}></img>;
//         })}
//       </div>
//     );
//   }
// }

// export default List;
