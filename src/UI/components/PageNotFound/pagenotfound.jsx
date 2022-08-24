import React from 'react'
import "./pagenotfound.css"
import Pic from "../../images/not.png"

function Pagenotfound() {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
        {/* <h1>what are you trying to do searching for an invalid page</h1> */}
        <img src={Pic} alt="" width="550px" />
    </div>
  )
}

export default Pagenotfound;