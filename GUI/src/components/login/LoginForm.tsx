import React, {FormEvent} from 'react';

import {updateFormField} from './index';

interface FormProps {
    userName: string;
    password: string;
    login: (e: FormEvent) => void;
    updateUser: (event: updateFormField) => void;
    updatePass: (event: updateFormField) => void;
}

const LoginForm: React.FC<FormProps> = ({
    updateUser,
    updatePass,
    login,
    userName,
    password,
}) => {
    return (
        <div>
            <div className="login-form-title">
                <h1>Login</h1>
            </div>
            <div className="login-form-container">
                <form className="login-form" onSubmit={e => login(e)}>
                    <div className="login-form-input-fields">
                        <input
                            type="text"
                            value={userName}
                            onChange={updateUser}
                            placeholder="Username"
                            autoFocus
                            required
                        />
                        <input
                            type="password"
                            value={password}
                            onChange={updatePass}
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="login-form-submit-button">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
