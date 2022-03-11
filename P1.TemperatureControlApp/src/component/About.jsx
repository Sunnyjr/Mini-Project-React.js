// import React from "react";

// const  About = (props) => {

//     console.log("inner component",props.data);
//     return(
//             <div> 
//                  <h1>home component</h1>
//             </div>
//     )
// };

// export default About;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function About() {
//     fetch("")
//     .then(response => response.json())
//     .then(data => console.log(data));
    
//     return(
//         <div>
        
//             <h1> hi axios api</h1>
//         </div>
//     )

// }

//     const [post, setPost] = useState();
//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//             .then(resp => {
//                 console.log(resp.data);
//                 setPost(resp.data);
//             },
//     (error) => {
//     console.log(error);
// })
//     }, []);
//     return (
//         <div>{
//             !post ? ("no data found") : ( //create header
//                 <table>
//                     <thead>
//                         <tr>
//                             <th>Id</th>
//                             <th>User ID</th>
//                             <th>Title</th>
//                             <th>Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {
//                             post.map((posts, index) => (
//                                 <tr key={index}>
//                                     <td>{post.id}</td>
//                                     <td>{post.userId}</td>
//                                     <td>{post.title}</td>
//                                     <td>
//                                         <p
//                                             className={post.completed ? "btn btn-success" : "btn btn-danger"
//                                             }>
//                                             {post.completed ? "completed" : "pending"}
//                                         </p>
//                                     </td>
//                                 </tr>
//                             ))
//                         }
//                     </tbody>
//                 </table>
//             )}
//             <nav className='d-flex justify-content-center'>
//                 <ul className="pagination">
//                     <li className="page-item"><a className="page-link" href="#">Previous</a></li>
//                     <li className="page-item"><a className="page-link" href="#">1</a></li>
//                     <li className="page-item"><a className="page-link" href="#">2</a></li>
                   
//                 </ul>
//             </nav>
            
//         </div>
//     )
// };











// // import {firstname, lastname} from "./App";

// // const About =() => {
// //     const fname = useContext(firstname);
// //     const lname = useContext(lastname);
// //     return (
// //         <h1>
// //             my name is {fname} {lname} ;
// //         </h1>
// //     );
// // };

