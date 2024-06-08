
const ShowMainData = ({image,name,rating,geners,summary}) => {
  return (
    <div>
        <img src={image ? image.original : '/not-found-image.png'} alt={name}/>
        <div>
            <h1>{name}</h1>
            <div>{rating.average|| 'N/A'}</div>
            <div dangerouslySetInnerHTML={{__html: summary}}></div>
            <div>
                Generas
                <div>
                    {geners.map((item)=><span key={item}>{item}</span>)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowMainData