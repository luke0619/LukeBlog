import { Nav } from "react-bootstrap";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Navs = () => {
    return (
        <Fragment>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home" as={NavLink} to='/life'>日常生活</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"  as={NavLink} to='/life'>知識筆記</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2"  as={NavLink} to='/sports'>運動紀錄</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" as={NavLink} to='/journey'>旅行紀念</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4" as={NavLink} to='/box'>開箱分享</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-5" as={NavLink} to='/photo'>攝影作品</Nav.Link>
                </Nav.Item>
            </Nav>
        </Fragment >
    )
}

export default Navs;