import React from "react";
import  ReactDOM  from "react-dom";


const books = [
  {
    id: 1,
    image:"https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320",
    title:"Beauty Of Nature",
    price:"$ 17.25",

  },
  {
    id: 2,
    image:"https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80",
    title:"Humble of Nature",
    price:"5.69",

  },
  {
    id: 3,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0MNvCn4zEObmiSUcT9K5HfXlDHuCmvSXwmm-Z2mjP&s",
    title:"Peace in the World",
    price:"8.98",

  },
  {
    id: 4,
    image:"https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg",
    title:"Game Of Thrones",
    price:"10.52",

  },
]

const BookList = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        {books.map ((loop)=>{
          return (
            <div className="col-lg-3">
              <Book 
              image={loop.image}
              title={loop.title}
              price={loop.price}
              />
            </div>
          )
        })}

          
    
        </div>
      </div>
    
    </>
  )
}

const Book =(props) => {
  return (
    <>
    <div 
    style={{
      height:"400px",
      borderRadius:"10px",
      border:"2px dotted gray"
    
    
    }} className=" text-center shadow p-3">
      <div className="book-image">
        <img style={{
          height:"200px",
          width: "200px",
          objectFit:"cover",
          borderRadius:"10px"
        }} 
         src={props.image} alt="" />
      </div>
      <div className="book-title my-3">
        <h3>{props.title}</h3>
      </div>
      <div className="book-price">
        <h6>{props.price}</h6>
      </div>
    </div>
    
    </>
  )
}

ReactDOM.render(<BookList/>,document.getElementById('root'))