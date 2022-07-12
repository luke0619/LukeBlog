import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Dropdowns = () => {
    return (
        <DropdownButton id="dropdown-basic-button" title="文章管理">
            <Dropdown.Item to="/" as={Link}>回到首頁</Dropdown.Item>
            <Dropdown.Item to="/manager" as={Link}>文章管理介面</Dropdown.Item>
            <Dropdown.Item to="/new-form" as={Link}>新增文章</Dropdown.Item>

        </DropdownButton>
    )
}

export default Dropdowns;