/* 
Composant Tags
Création d'une liste de tags avec un style defini
Props:
tags: tags sous forme de liste
*/

import './tags.css';

function Tags({ tags }) {
    return (
        <div className="tags">
            {tags.map((tag) => (
                <span key={tag} className="tag">
                    {tag}
                </span>
            ))}
        </div>
    );
}

export default Tags;
