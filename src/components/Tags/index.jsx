import '../../styles/Tags.css'

function Tags(props) {
   
    return (
        <div className="tags">
            {props.tags.map((tag) => (
                   <span key={tag} className="tag">{tag}</span> 
                ))}
        </div>
        
    )
}

export default Tags
