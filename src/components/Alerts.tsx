import * as React from "react";
import Alert from "react-bootstrap/Alert";


function Alerts(props) {
    let children = props.children;
    return (
        <>
            {
                ['primary',
                'secondary',
                'success',
                'danger',
                'warning',
                'info',
                'light',
                'dark',
                ].map((variant) => (
                    <Alert key={variant} variant={variant}>
                        This is a {variant} alert—check it out!<br/>
                    </Alert>
                ))
            }

            {
                React.Children.map(children, (child, index) => {
                    if (index < 1) {
                        return child;
                    }
                })
            }

            {
                <div>
                    <b><i>Alerts have '{React.Children.count(children)}' children element!</i></b>
                </div>
            }
        </>
    );
}

export default Alerts;