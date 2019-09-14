import React from 'react'
import { Link } from 'react-router-dom'


const iStyle = {
  color: "white",
  background: "gray",
  height: "30px",
  width: "500px",
  display: "flex",
  justifyContent: "space-between",
  padding: "0 5px",
  alignItems: "center",
  margin: "5px",
};

const descStyle = {
  width: "250px"
}

export const ExpenseListItem = ({ id, num, description, amount, createdAt }) => {
  return (
    <div style={iStyle}>
      <span>{num}</span>
      <span style={descStyle}><Link to={`/edit/${id}`} >{description}</Link></span>
      <span>{amount}</span>
      <span>{createdAt}</span>
    </div>
  )
}
export default ExpenseListItem;
