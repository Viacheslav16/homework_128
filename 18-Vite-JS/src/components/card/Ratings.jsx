import '../assets/scss/progress.scss'

export default function Ratings(props){

    const RatingBar = ({item}) =>{
        let width = 0
        if (item.Sourse==="Internet Movie Database"){
            width = item.Value.split('/')[0] * 10
        }
        if (item.Sourse==="Rotten Tomatoes"){
            width = parseInt(item.Value)
        }
        if (item.Sourse==="Metacritic"){
            width = item.Value.split('/')[0] 
        }
        width = 100 - width
        return <div className="progress">
                <div className="progress-bar" role="progressbar" style={{width:`${width}%`}} aria-valuenow={width} aria-valuemin="0" aria-valuemax="100"></div>
        </div>
    }

    return <ul>
        {props.ratings.map((item, index)=>{
            return <li key={index}>
                <b>{item.Sourse}:</b>{item.Value}
                <RatingBar item={item} />
            </li>
        })}
    </ul>
}