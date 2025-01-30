'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'

const Dashboard = () => {
const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
      });

      if (!res.ok) {
        setError(true);
      }
      const data = await res.json()

      setData(data)
      setIsLoading(false)
    };
    getData()
  },[]);

  console.log(data);

  return (
    <div>Dashboard</div>
  )
}

export default Dashboard