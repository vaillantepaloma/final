import React, {useState, useEffect} from 'react'
import Load from '../../components/LoadingPage/load';

function Home() {
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[]);
  return (
      (loading ? <Load/>: (
    <div>home</div>
    ))
  )
}

export default Home;