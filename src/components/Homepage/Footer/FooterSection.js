import React from 'react'

const FooterSection = ({ links, heading }) => {
    return (
        <div><h4>
           {heading}
        </h4>
            <ul>
               
                    {
                        links.map((link, index) => (
                            <li>
                            <a key={index} className='footer-link' href="#">
                                {link}
                            </a>
                            </li>
                        ))
                    }
                    {/* <a className='footer-link' href="#">
                        European Union Administration Correos No 77 Plaça de la Font, 12 08880 Cubelles Barcelona
                    </a> */}
               
            </ul></div>
    )
}

export default FooterSection