import React from 'react';
export default({input, meta: {error, touched}})=>{
  return(
    <div>
     <input type="text"  maxLength="10" {...input} className="form-control field" />
     <div className="error">
       {touched && error}
     </div>
    </div>
  );
}