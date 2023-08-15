import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <header className="header"/>
     <div className="wrapper">
         <div className="header_wrapper">
             <div className="header__logo">
                 <a href="/" className="header__logo-link">
                     Contact Me
                 </a>
             </div>
         </div>
         <div className="title_wrapper">
             <div className="main_title">
                 <h1>
     Let me know if you want to talk 
     about a potential collaboration.
     I'm available for freelance work.
                 </h1>
             </div>
             <div className="infome">
                 <a href="/" >
                     info@gmail.com
                 </a>
             </div>
         </div>
         <div className="form">
             <div className="form-area">
                 <div className="container">
                     <div className="row single-form g-0">
                         <div className="col-sm-12 col-lg-6">
                             <div className="left">
                                 <h2><span>Contact Us for</span> <br/>Business Enquies</h2>
                             </div>
                         </div>
                         <div className="col-sm-12 col-lg-6">
                             <div className="right">
                                <i className="fa fa-caret-left"></i>
                                 <form>
                                   <div className="mb-3">
                                     <label for="exampleInputEmail1" className="form-label">Your Name</label>
                                     <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                                   </div>
                                   <div className="mb-3">
                                     <label for="exampleInputEmail1" className="form-label">Email address</label>
                                     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
                                   </div>
                                   <div className="mb-3">
                                     <label for="exampleInputPassword1" className="form-label">Message</label>
                                       <textarea type="password" className="form-control" id="exampleInputPassword1" required></textarea>
                                   </div>
                                   <button type="submit" className="btn btn-primary">Submit</button>
                                 </form>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             <form/>
         </div>
         <div className="space">
 
         </div>
         <div className="friends">
             <h1>Let`s be Friends</h1>
         </div>
         <div className="insta">
             <a href="https://www.youtube.com/watch?v=2y56wHAw_FQ">
                 <img src="/images/neon-leuchtendes-instagram-logo-auf-schwarzem-hintergrund_181020-4651.avif" alt="Insta" width="150" height="350" className="center" />
               </a>
         </div>
     </div>
    <header/>
 </div>
  );
}

export default App;
