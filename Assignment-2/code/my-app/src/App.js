import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employees, title}=props;
    
return(
  <div className="container App" >
  {
    employees.filter(item=>item.bloodGroup==='B+').map()((employee,index)=>(

   <div className="profile-details" key={index}>
      <div className="profile-image-container">
      <img className="profile" src={employee.profileImg} width="100" height="100" alt="profile image sample">
      </img>
    </div>
  <div className="title">
    <h1>{employee.name}</h1>
  </div>
  <div className="profile-info">
    <label>Location</label>
    <strong>{employee.location}</strong>
  </div>
  <div className="profile-info">
    <label>BloodGroup</label>
    <strong>{employee.bloodGroup}</strong>
  </div>
  
  <div className="profile-info">
    <label>Age</label>
    <strong>{employee.age}</strong>
  </div>
  </div>
))
  }

</div>
)
}



export default App;
