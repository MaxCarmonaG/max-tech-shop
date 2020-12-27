import './custom-button.styles.scss';

const CustomButton = ({ children, ...props }) => (
    <button {...props} className="custon-button__container">
        {children}
    </button>
);

export default CustomButton;