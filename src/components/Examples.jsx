import React from 'react'
import Button from './Button'
import { useState } from 'react'

function Examples({data}) {
console.log(data)

const [selctedValue, setSelectedValue] = useState('')
  

 const handleClick = (selectedButton)=>{
    setSelectedValue(selectedButton)

 }
let  content = <p>click a button</p>;
if(selctedValue){
  content = <>
<p>{data[selctedValue].title}</p>
<p>{data[selctedValue].description}</p>
<pre>
  <code>
    {data[selctedValue].code}
  </code>
</pre>
</>

}

  return (
    <div className='ex-container'>
      <div className="sub-container">

      <h2>Examples</h2>
      <Button className={ selctedValue === 'mvt'&& 'active'} 
      onClick={()=>handleClick('mvt')} >MVT</Button>
      <Button className={ selctedValue === 'admin'&& 'active'}
      onClick={()=>handleClick('admin')}>Admin</Button>
      <Button className={ selctedValue === 'drf'&& 'active'}
       onClick={()=>handleClick('drf')}>DRF</Button>
      <Button  className={ selctedValue === 'orm'&& 'active'}
       onClick={()=>handleClick('orm')} >ORM</Button>
    
    <div className='box' >

      {content}

    </div>
      </div>

    </div>
  )
}

export default Examples