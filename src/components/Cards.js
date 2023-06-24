import React from 'react'
import imagen1 from '../assets/js.png'
import imagen2 from '../assets/angular.png'
import imagen3 from '../assets/C.png'
import Card from './Card'
const cards = [
    {
        id:1,
        title: 'JavaScript',
        image: imagen1,
        texto: "Texto Alternativo",
        url:"https://developer.mozilla.org/es/docs/Web/JavaScript"
    },
    {
        id:2,
        title: 'Angular',
        image: imagen2,
        texto: "Texto Alternativo",
        url:"https://angular.io/"
    },
    {
        id:3,
        title : 'C#',
        image: imagen3,
        texto: "Texto Alternativo",
        url:"https://learn.microsoft.com/en-us/dotnet/csharp/"
    }
 
]
export default function Cards() {
    const divs = cards.map((data, index) =>
    // <div key={index} className={data.class} sample={data.sample}  id={data.id}>
    
    <div key={index} className='card col-3 mx-2'>
        <div>
            <img src={data.image} width='200'  alt={data.title} />
            <h4 className='my-3'>{data.title}</h4>
            <p> { data.texto }</p>

            <button className='mb-3'>
                <a href={data.url} target='_blank' className='p-2'>Ver más...</a>
            </button>
      
        </div>
      
    </div>
  );

  return (
    <div className='container'>
        <div className='d-flex justify-content-around'>
            {divs}
           
        </div>
    </div>
  )
}