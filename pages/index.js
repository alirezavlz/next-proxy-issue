import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(() => []);
  
  useEffect(() => {
    axios.get('/api/json/api2/items')
      .then((response) => {
        setData(response.data.result);
      });
  },[])
  
  const onClick = useCallback(() => {
    const data = {
      email: 'xx@xxx,com',
      password: 'xxxxx'
    }
    
    axios({
      url: '/api/json/api2/login',
      method: 'POST',
      data: JSON.stringify(data)
    })
    .then((response) => {
      alert(JSON.stringify(response.data))
    })
    .catch(() => {
      alert('failed....')
    });

  }, [])
  
  return (
    <div>
      <button onClick={onClick}>
        click me
      </button>
      <div>
        {data.map(item => {
          return (
            <h4 key={item.title}>
              {item.title}
            </h4>
          )
        })}
      </div>
    </div>     
  )
}
