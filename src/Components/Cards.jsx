import React from 'react'
import CardsChild from './CardsChild'
const Cards = (props) => {

  
  const arr = [
  {
    header1: "Under ₹499",
    header2: "Deals on skincare",
    header3: "Free Delivery\nOn first 3 orders*",
    header4: "Latest Trends",
    bgImage: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=1200&auto=format&fit=crop"
  },
  {
    header1: "Exciting Offers",
    header2: "iPhone 16",
    header3: "Up to ₹10,000 Off*",
    header4: "No Cost EMI",
    bgImage: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=1200&auto=format&fit=crop"
  },
  {
    header1: "GET WHITE TEETH",
    header2: "When purple cancels yellow",
    header3: "Free Delivery",
    header4: "Easy Return",
    bgImage: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&auto=format&fit=crop"
  },
  {
    header1: "Diwali Special",
    header2: "Home & Kitchen Deals",
    header3: "Up to 60% Off*",
    header4: "Flat 10% Cashback",
    bgImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=1200&auto=format&fit=crop"
  },
  {
    header1: "Fitness Essentials",
    header2: "Build a Healthier You",
    header3: "Up to 50% Off",
    header4: "Free Delivery",
    bgImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&auto=format&fit=crop"
  },
  {
    header1: "Study Tech",
    header2: "Laptops, Tablets & More",
    header3: "Up to 40% Off",
    header4: "Exchange Offer",
    bgImage: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200&auto=format&fit=crop"
  },
  {
    header1: "Monsoon Care",
    header2: "Stay Fresh & Skin Healthy",
    header3: "Up to 35% Off",
    header4: "Free Delivery",
    bgImage: "https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&auto=format&fit=crop"
  }
];



  return (
   <div className='flex  align-middle overflow-x-auto scrollbar-none '>
      
      
      {arr.map((ele,idx)=>{
        console.log(idx);
        
        
        return (<CardsChild key={idx} header1={ele.header1} header2={ele.header2} header3={ele.header3} header4={ele.header4} bgImage={ele.bgImage} />)
      })}
      
     
    
   </div>
  )
}

export default Cards
