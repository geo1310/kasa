import '../../styles/tags.css';

/**
 * @component Tags
 * @description  Génère une liste de tags avec un style prédéfini
 * @param {Array} tags liste des tags à afficher
 * @returns {JSX}
 */
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
