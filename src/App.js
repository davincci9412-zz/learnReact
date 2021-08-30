import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'
import Button from './components/button'

import react, {Component} from 'react'
import { useState } from 'react'


const Users = {
  user1:{
    name: 'Ya',
    age: 23

  },
  user2:{
    name: 'JAH',
    age: 23
  },
  user3:{
    name: 'Olokok',
    age: 26
  }
}

function App(state) {
   state = {
  Users,
  isShown: false
  }
  const [name, setName] = useState(state.Users.user1.name)
  const [age, setAge] = useState(state.Users.user1.age)
  // const [newState, setState] = useState(state.isShown)
  // const [list, setList] = useState(Users)


const handleName = (e) => {
  const name = e.target.value
    setName(name)
}
const handleAge = (e) => {
  const age = e.target.value
    setAge(age)
}
  const handleClick = (num) =>{

state.Users.user1.age += num
setAge(state.Users.user1.age)

}



let description = null

// if(newState){
//   description = <h3>Bienvenue Yanis ! Tu vas le faire !</h3> 
// }
const listeKeys = Object.keys(Users)

const hideName = id => {

  Users[id].name = "New name";
  setName(...Users);
}

const membres = listeKeys.map(membr =>(

<Membre 
  key = {membr}
  hideNam ={() => hideName(membr)}
 age={Users[membr].age}
  name={Users[membr].name}
/>)


    
)


  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
           
   
        { membres }






 {/* <div>{description} 
        </div> */}

       {/* <button onClick={() => setState(!newState)}> Button </button> */}
        {/* <input type="text" value={name} onChange={handleName}/>
        <input type="text" value={age} onChange={handleAge}/> */}
{/*   
        <button
        onClick={() => handleClick(2)}
        > Vieillir</button> */}


    </div>
  );
}


// const cmb = 8;

// class App extends Component{
//   state = {
//       Users,
//       isShown: false
//       }
//        handleClick = num =>{
//     const users = {...this.state.Users}
//     users.user1.age += num
//     this.setState({ users })
//        }

//        handleChange = event =>{
//          const users = {...this.state.Users}
//       const age = event.target.value
//       users.user1.age = age
//       this.setState({age})
//            }
//            handleName = event => {
//              const nom = event.target.value;
//              this.state.Users.user1.name = nom
//              this.setState({nom})
//            }
//            handleHide = () =>{
//             const shown = !this.state.isShown 
//             this.setState({shown})
//            }

//   render(){
//     const { Users } = this.state
//     return(
//       <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
        
//         <p>
//          Edit <code>src/App.js</code> and save to reload.
//              </p>

//          <div>
//            <h2>{
//    this.state.isShown ? "Bienvenue Yanis ! Tu vas le faire !" : null        
//   }
//            </h2>
//            </div>
//                    <button onClick={() => this.handleHide()}>Cacher</button>   

//    <input value={Users.user1.age} onChange={this.handleChange} type="text"/>
        
//         <input value={Users.user1.name} onChange={this.handleName} type="text"/>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
      
//         </a>
//         <Membre 
//         age={Users.user1.age}
//         nom={Users.user1.name}/>
//           <Membre 
//                   age={Users.user2.age}
//           nom={Users.user2.name}/>
//           <Membre 
//                   age={Users.user3.age}
//           nom={Users.user3.name}>

//             J'adore
//             </Membre>
//    <Button vieillir={() => this.handleClick(cmb)} 
//    cmb={cmb}/>


//       </header>
//     </div>
//     )
//   }
// }
export default App;
