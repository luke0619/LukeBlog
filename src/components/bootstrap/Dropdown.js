import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from 'react-router-dom';
import classes from './Dropdowns.module.css';

const Dropdowns = () => {
    return (
        <DropdownButton id="dropdown-basic-button" title="文章管理" as='div' className={classes.Dropdown}>
            <Dropdown.Item to="/" as={Link}>回到首頁</Dropdown.Item>
            <Dropdown.Item to="/manager" as={Link}>文章管理介面</Dropdown.Item>
            <Dropdown.Item to="/new-form" as={Link}>新增文章</Dropdown.Item>
        </DropdownButton>
    )
}

export default Dropdowns;