import './directory.styles.scss';

const Directory = ({ collections }) => (
    <div className="directory__container">
        <div className="directory__grid">
            {
                collections.map(collection => (
                    <div
                        key={ collection.id }
                        className="directory__category-container"
                    >
                        <div
                            style={{ backgroundImage: `url(${ collection.imageUrl })` }}
                            className="directory__image-backgound"
                        />
                        <div className="directory__tittle-container">
                            <h1 className="directory__title">
                                { collection.title }
                            </h1>
                            <h2 className="directory__subtitle">
                                Shop Now    
                            </h2>                     
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
);

export default Directory;