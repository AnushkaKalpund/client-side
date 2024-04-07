import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protectedroute = ({auth, component:Component, ...rest}) => {
    return auth ? <Outlet /> : <Navigate to="/login" />;
}

export default Protectedroute


// import React from 'react';
// import { Route } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
// const Protectedroute = ({auth, component:Component, ...rest}) => {
//     return (
//         <div>
//             <Route {...rest} render={(props)=>{
//             if(auth)return <Component {...props}/>
//             if(!auth)return <Navigate to={{path : '/', state : {from :
//             props.location}}}/>
//         }}/>
//         </div>
//     )
// }
// export default Protectedroute
