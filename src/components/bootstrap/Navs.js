import { Nav } from "react-bootstrap";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navs = () => {
    return (
        <Fragment>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link as={NavLink} to='/single/life'>日常生活</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"  as={NavLink} to='/single/knowledge'>知識筆記</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"  as={NavLink} to='/single/sports'>運動紀錄</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" as={NavLink} to='/single/journey'>旅行紀念</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5" as={NavLink} to='/single/photo'>攝影作品</Nav.Link>
                </Nav.Item>
            </Nav>
        </Fragment >
    )
}

export default Navs;