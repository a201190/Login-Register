import React from 'react';
export default({input, meta: {error, touched}})=>{
  return(
    <div>
     <input type="password" {...input} className="form-control field" />
     <div className="error">
       {touched && error}
     </div>
    </div>
  );
}