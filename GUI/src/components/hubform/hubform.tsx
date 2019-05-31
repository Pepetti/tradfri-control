import React, {FormEvent} from 'react';

import {updateFormField} from '../index';

import './hubform.css';

interface HubFormProps {
    hubip: string;
    hubkey: string;
    connectHub: (e: FormEvent) => void;
    updateIp: (event: updateFormField) => void;
    updateKey: (event: updateFormField) => void;
}

const HubForm: React.FC<HubFormProps> = ({
    hubip,
    hubkey,
    connectHub,
    updateIp,
    updateKey,
}) => {
    return (
        <div>
            <div className="hubform-title">
                <h1>Hub Info</h1>
            </div>
            <div className="hubform-p">
                <p>
                    Your account doesn't have a associated preshared key
                    generated, or something went wrong while connecting to the
                    gateway. Please input your information and make sure your
                    Ikea gateway is connected to your network.
                </p>
            </div>
            <div className="hubform-container">
                <form className="hubform" onSubmit={e => connectHub(e)}>
                    <div className="hubform-input-fields">
                        <div className="hubform-group">
                            <input
                                className="form-control"
                                type="text"
                                name="hubip"
                                value={hubip}
                                onChange={updateIp}
                                required
                            />
                            <label
                                className="form-control-placeholder"
                                htmlFor="hubip">
                                Hub IP
                            </label>
                        </div>
                        <div className="hubform-group">
                            <input
                                className="form-control"
                                type="text"
                                name="hubKey"
                                value={hubkey}
                                onChange={updateKey}
                                required
                            />
                            <label
                                className="form-control-placeholder"
                                htmlFor="hubKey">
                                Hub Key
                            </label>
                        </div>
                        <div className="hubform-group">
                            <button type="submit">Connect</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default HubForm;
