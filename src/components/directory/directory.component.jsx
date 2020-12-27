import { useHistory } from 'react-router-dom';

import './directory.styles.scss';

const Directory = ({ imageUrl, title, routeName }) => {
    const history = useHistory();
    return(
        <div className="directory__container">
            <div
                style={{ backgroundImage: `url(${ imageUrl })` }}
                className="directory__image-backgound"
            />
            <div className="directory__tittle-container" onClick={() => history.push(`/categories/${routeName}`)}>
                <h1 className="directory__title">
                    { title }
                </h1>
                <h2 className="directory__subtitle">
                    Shop Now    
                </h2>                     
            </div>
        </div>
    )
}

export default Directory; 