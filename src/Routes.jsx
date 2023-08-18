import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Header = React.lazy(() => import('./components/Header'));
const Hero = React.lazy(() => import('./components/Hero'));
const Trending = React.lazy(() => import('./components/Trending'));
const Latest = React.lazy(() => import('./components/Latest'));
const Discount = React.lazy(() => import('./components/Discount'));
const Popular = React.lazy(() => import('./components/Popular'));
const Blog = React.lazy(() => import('./components/Blog'));
const Others = React.lazy(() => import('./components/Others'));
const Footer = React.lazy(() => import('./components/Footer'));


// const Routes =[
//   {
//     path:'/',
//     component: 
//   }
// ]
// const Routes = () => {
//   return (
//     <Router>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Routes>
//  <Route  path="/" component={Hero} />
//           <Route path="/trending" component={Trending} />
//           <Route path="/latest" component={Latest} />
//           <Route path="/discount" component={Discount} />
//           <Route path="/popular" component={Popular} />
//           <Route path="/blog" component={Blog} />
//           <Route path="/others" component={Others} />
//         </Routes>
         
//       </Suspense>
//     </Router>
//   );
// };

export default Routes;
