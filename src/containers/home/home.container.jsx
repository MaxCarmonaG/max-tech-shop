import { useContext } from 'react';

import Directory from '../../components/directory/directory.component';
import Spinner from '../../components/spinner/spinner.component';

import { StoreContext } from '../../providers/store.provider';

import './home.styles.scss';

const Home = () => {
    
    const { data } = useContext(StoreContext);

    return (
        data.length ?
        <div className="item-list__container">
            <div className="item-list__grid">
                {
                    data.map(({ id, ...props }) => (
                        <Directory key={ id } { ...props }/>
                    ))
                }
            </div>
        </div>
        :
        <Spinner/>
    )
};

export default Home;