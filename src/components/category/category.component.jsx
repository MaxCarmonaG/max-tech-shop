import ItemCount from '../item-count/item-count.component';
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
        <ItemCount title={title}/>
    </div>
)

export default Category; 