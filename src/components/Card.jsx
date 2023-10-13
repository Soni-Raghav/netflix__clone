import React from 'react'




export default function Card(props){
    return(
        <>
            
                <div className="card" id={props.id}>
                    <img src={props.imgsrc} alt={props.title} className='card__img'/>
                    <div className="card__info">
                    <span className="card_category">{props.category}</span>
                    <h3 className="card__title">{props.title}</h3>
                    <a href={props.slink} target="_blank" >
                        <button>Watch Now</button>
                    </a>

                    </div>
                </div>
            
        </>
    );
}