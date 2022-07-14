import NavBa from '../../components/bootstrap/NavBa'
import Navs from '../../components/bootstrap/Navs';
import { Fragment } from "react";

import classes from './Header.module.css';

const Header = () => {
    return (
        <Fragment>
            <div className={classes.Header}>
                <NavBa />
                <Navs />
            </div>
        </Fragment>
    )
}

export default Header;