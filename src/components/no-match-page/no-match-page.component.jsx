import { withRouter } from 'react-router-dom';
import './no-match-page.styles.scss';

const NoMatchPage = ({ history }) => (
    <div className="no-match__container">
        <div className="no-match__redirect" onClick={()=>history.push('/')}>
            <h1>SORRY</h1>
            <h2>We couldn't find that page or product.</h2>
            <h3>Please go back to home page.</h3>
        </div>
    </div>
);

export default withRouter(NoMatchPage);