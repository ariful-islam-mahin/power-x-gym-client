import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// import { faFacebookF } from '@fortawesome/free-solid-svg-icons';

// library.add(fab, faFacebookF)

const Footer = () => {
    return (
        <footer className="py-5 mt-5 footer">
            <div className="row container text-white mx-auto">
                <div className="col-md-3">
                    <h3 className="font-weight-bold">POWER <span className="text-brand">X</span></h3>
                </div>
                <div className="col-md-2">
                    <p className="font-weight-bold">Need Help?</p>
                    <p><a href="/helpCenter">Help Center</a></p>
                    <p><a href="/support">Email support</a></p>
                    <p><a href="/chat">Live Chat</a></p>
                    <p><a href="/gift">Gift Certificates</a></p>
                    <p><a href="/feedback">Send Us Feedback</a></p>
                </div>
                <div className="col-md-2">
                    <p className="font-weight-bold">Digital Resources</p>
                    <p><a href="/articles">Articles</a></p>
                    <p><a href="/eBooks">E-books</a></p>
                </div>
                <div className="col-md-2">
                    <p className="font-weight-bold">Connect with Us</p>
                    <p>
                        <a href=""><FontAwesomeIcon icon={faYoutube} className="icon"/></a>
                        <a href=""><FontAwesomeIcon icon={faFacebookF} className="icon"/></a>
                        <a href=""><FontAwesomeIcon icon={faInstagram} className="icon"/></a>
                        <a href=""><FontAwesomeIcon icon={faTwitter} className="icon"/></a>
                        <a href=""><FontAwesomeIcon icon={faWhatsapp} className="icon"/></a>
                    </p>
                    <p><a href="/forum">Forum</a></p>
                </div>
                <div className="col-md-3">
                    <p className="font-weight-bold">Join Our Newsletter</p>
                    <p>Get exclusive news, features, and updates from The Shredder Weight Loss Academy.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;