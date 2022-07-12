import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter bgColor='primary' className='text-center text-lg-left'>
            <div className='text-center p-3' style={{ color: 'white' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}

                <a className='text-light' href='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </a>
            </div>
        </MDBFooter >
    );
}