import './category.styles.scss';

const Category = ({ imageUrl, title }) => (
    <div className="category__container">
        <div
            style={{ backgroundImage: `url(${ imageUrl })` }}
            className="category__image-backgound"
        />
        <div className="category__tittle-container">
            <h1 className="category__title">
                { title }
            </h1>
            <h2 className="category__subtitle">
                Shop Now    
            </h2>                     
        </div>
    </div>
)

export default Category; 