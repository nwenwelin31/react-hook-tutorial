
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useMemo, useRef, useState } from 'react';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     errorElement: <Error />,
//     // loader: rootLoader,
//     children: [
//       {
//         path: 'contacts/:contactId',
//         element: <Contact />,
//       }
//     ]
//   },
 
// ])


function App() {
  //use State practice
  const [fruit, setFruit] = useState('Orange');
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const ref = useRef();
  const [inputValue, setInputValue] = useState();
  const submit = (e) =>{
    e.preventDefault();
    console.log(ref.current.value);
    setInputValue(ref.current.value);
  }
  const numberCount1 = () => {
    setCount1((prevcount) => prevcount + 1);
    
  }
  const numberCount2 = () => {
    setCount2((prevcount) => prevcount + 1); 
  }
  const isEven = useMemo(() => {
    return count1 % 2 === 0;
  },[count1]);
  
  useEffect(() => {
    console.log('render');
  },[])
  return (
    <>
    <div className="App">
      {/* <RouterProvider router={router}></RouterProvider> */}
      <p>{fruit}</p>
      <button className='btn btn-dark' onClick={() => fruit === 'Apple' ? setFruit('Orange'):setFruit('Apple')}>change fruit</button>
    </div>
    <div className='App'>
        
      <p>Count 1 = {count1} {isEven ? "Even": "Odd"}</p>
      <button className='btn btn-dark' onClick={numberCount1}>count1</button>
      <p>Count 2 = {count2}</p>
      <button className='btn btn-dark' onClick={numberCount2}>count2</button>
    </div>
    <form>
      <input type='text' ref={ref} />
      <button type='submit' onClick={submit}>submit</button>
      <p>{inputValue}</p>
    </form>
    </>
  );
}

export default App;
