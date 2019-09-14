import React from 'react'
import ReactDOM from 'react-dom'


const withAdminWarning = (WrappedComponent) => {

  return (props) => (
    <div>
      {props.isAdmin && <p>This private info, please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  )
}

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.details} </p>
    </div>
  )
}

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : "please Login"}
    </div>
  )
}

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} details="It is one secret" />,
  document.getElementById('app'))

// ReactDOM.render(<AdminInfo isAdmin={true} details="There are the details" />, 
//         document.getElementById('app'))

export default Info
