import './category-item.styles.scss';

const CategoryItem = ({ name, description, imageUrl, price, ...props }) => {
    
    return(
        <div { ...props } className="category-item__container">
            <div className="category-item__image-container">
                <img src={imageUrl} alt={name} className="category-item__image"/>
            </div>
            <div className="category-item__description-container">
                <div className="category-item__info">
                    <span className="category-item__name">{name}</span>
                    <span className="category-item__description">{description}</span>
                </div>
                <div className="category-item__price">$ {price}</div>
            </div>
        </div>
    );
};

export default CategoryItem; 