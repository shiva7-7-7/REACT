import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card';

function App() {
  const PAGE_SIZE=12;
  const [products,setProducts]=useState([]);
  const [currentPage,setCurrentPage]=useState(0);
  const fetchProducts=async ()=>{
    try {
      const response=await fetch('https://dummyjson.com/products?limit=200&select=id,title,thumbnail');
      const data=await response.json();
      setProducts(data.products);

    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(()=>{
    fetchProducts();
  },[])
  const totalProducts=products.length;
  const noPages=Math.ceil(totalProducts/PAGE_SIZE);

  const start=currentPage*PAGE_SIZE;
  const end=start+PAGE_SIZE;
  const pageChange=(e)=>{
    if(e.currentTarget.name==='left'){
      setCurrentPage((prev)=>{
        if(prev>0){
          return prev-1;
        }
        return prev;
      })
    }else{
      setCurrentPage((prev)=>{
        if(prev<noPages-1){
          return prev+1;
        }
        return prev;
      })
    }
  }
  return (
    <div className='container'>
        <h1>Paggination</h1>
        <div className='buttons'>
          <button style={{ border: "none", background: "none" }} name='left' onClick={pageChange}>◀️</button>
          {[...Array(noPages).keys()].map((page)=>{
            return <button key={page} onClick={()=>setCurrentPage(page)} className={`${page===currentPage?"active":""}`}>
              {page+1}
            </button>
          })}
          <button style={{ border: "none", background: "none" }} name='right' onClick={pageChange}>▶️</button>
        </div>
        {products?.length==0?<h3>No products found</h3>:<div className='grid'>
          {products.slice(start,end).map((product,index)=>{
            return <Card title={product.title} image={product.thumbnail} key={index}/>
          })}
        </div>}
    </div>
  )
}

export default App
