import { useState } from "react";

const ListObj = () => {
  //state storing array of obj
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  
  const handleAddCar = () => {
    const newCar = {year: carYear, make: carMake, model: carModel};
    setCars(c => [...c, newCar]);
    setCarYear(new Date().getFullYear())
    setCarMake("")
    setCarModel("")
  }
  
  const handleRemoveCar = (index) => {  
    setCars(c => c.filter((_, i) => i !== index));
  }
  
  const handleYearChange = (e) => setCarYear(e.target.value)
  const handleMakeChange = (e) => setCarMake(e.target.value)
  const handleModelChange = (e) => setCarModel(e.target.value)
  
  return (
    <div>
      <h2>List of Heading</h2>
      <ul>
        {cars.map((car, index) =>( 
        <li key={index} onClick={() => handleRemoveCar(index)}>
          {car.year} {car.make} {car.model}
        </li>))}
      </ul>
      <input 
        type="number" 
        value={carYear} 
        onChange={handleYearChange} 
      />
      <br />
      <input 
        type="text" 
        value={carMake} 
        onChange={handleMakeChange} 
        placeholder="Enter the car maker"
      />
      <br />
      <input 
        type="text" 
        value={carModel} 
        onChange={handleModelChange} 
        placeholder="Enter the car model"
      /><br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default ListObj;