// import logo from './logo.svg';
// import './App.css';
// import Bookstore from './chapter_03/Bookstore';
// import NotificationList from './chapter_06/NotificationList';
// import Timer from './chapter_06/Timer';
// import Counter from './chapter_06/Counter';
// import Counter2 from './chapter_06/Counter2';
// import SFC from './chapter_06/SFC';
// import Child from './chapter_06/Child';
// import React, {useState} from 'react';
// function App() {
//   const [count,setCount] = useState(0);
//   return (
//     <div className="App">
//       {(count<5)&&<Child count={count}/>} {/*조건이 true면 다음 명령을 수행, false면 수행하지 않음.*/}
//       <button onClick={()=>setCount(count + 1)}>count 증가</button>
//     </div>
//   );
// }
import React, {useState, useMemo} from 'react';

const App = (props) => {
    const [status, setStatus] = useState(0);
    const fetchData = () => {
        let num;
        for (let i = 0; i < 50000; i++) {
            for (let j = 0; j < 10000; j++) {
                num = Math.floor(Math.random() * 10)
            }
        }
        return {data: num};
    };
    const fetchedData = useMemo(() => {
        return fetchData();
    }, [status]);
    return (
      <div>
        <button onClick={() => {
          setStatus(status+(Math.floor(Math.random * 2)));
        }}>
          데이터 받아오기
          </button>
          <br/>
          {fetchedData.data}
      </div>
    );
};
export default App;
