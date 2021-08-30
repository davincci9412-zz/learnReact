import React, { Fragment } from 'react' 

const Membre = ({name, age, hideNam, membr}) => {

return (
<Fragment>

<h2 key={membr} style={{backgroundColor : age > 23 ? 'blue' : 'green', transition: '1s'}}> {name.toUpperCase()} is {age}  </h2>

<button onClick={() => hideNam(membr)}>X</button>

</Fragment>

)
}

export default Membre