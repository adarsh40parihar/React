import React from 'react'
import useFetchData from './useFetchData';

function DataFromCustomHook() {
  const { loading, data, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts/2"
  );
  console.log("data:", data)
  return (
    <>
      <h1>Data from Custom hook</h1>
    </>
  )
}

export default DataFromCustomHook