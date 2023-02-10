import React from 'react'
import Page1 from 'D:/sdy/ISS/iss/pages/page1'
import { Route,} from 'react-router-dom'
function Routers() {
    return (
      <Route path='/page/1' element={<Page1/>}/>
    )
  }
  export default Routers