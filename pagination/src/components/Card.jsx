export default function Card({title,image}){
    return(<div className="card">
            <img src={image} alt={title} />
            <h4>{title}</h4>
    </div>)
}