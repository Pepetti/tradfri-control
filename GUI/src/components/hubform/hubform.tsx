import React from 'react';

import './hubform.css';

const HubForm: React.FC = () => {
    return (
        <div>
            <div className="hubform-title">
                <h1>Hub Info</h1>
            </div>
            <div className="hubform-p">
                <p>
                    Your account doesn't have a associated preshared key
                    generated, or something went wrong while connecting to the
                    gateway. Please input your information again, and make sure
                    your Ikea gateway is connected to your network.
                </p>
            </div>
            <div className="hubform-container">
                <form className="hubform">
                    <div className="hubform-input-fields">
                        <div className="input-group">
                            <label>Hub IP</label>
                            <input
                                type="text"
                                placeholder="eg. 192.168.1.xxx"
                            />
                        </div>
                        <div className="input-group">
                            <label>Hub Key</label>
                            <input
                                type="text"
                                placeholder="Key on gateway sticker"
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HubForm;
