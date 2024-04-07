import './App.css';

import {useState} from 'react';

export default function App() {
  const initialState = [
    {id: 1, name: 'Alice', country: 'Austria'},
    {id: 2, name: 'Bobby Hadz', country: 'Belgium'},
  ];

  const [employees, setEmployees] = useState(initialState);

  const removeSecond = () => {
    setEmployees(current =>
      current.filter(employee => {
        // 👇️ remove object that has id equal to 2
        return employee.id !== 2;
      }),
    );
  };

  return (
    <div>
      <button onClick={removeSecond}>Remove second</button>

      {employees.map(({id, name, country}) => {
        return (
          <div key={id}>
            <h2>name: {name}</h2>
            <h2>country: {country}</h2>

            <hr />
          </div>
        );
      })}
    </div>
  );
}
