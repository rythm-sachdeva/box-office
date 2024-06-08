

const Cast = ({cast}) => {
  return (
    <div>
        {cast.map((item)=>
        <div key={item.person.id}>
            <div>
                <img src={item.person.image?.medium || '/not-found-image.png'} alt={item.person.name}/>
                
            </div>
            <div>
                {item.person.name} as {item.character.name} {item.person.voice && '| Voiceover'}
            </div>

        </div>)}
    </div>
  )
}

export default Cast