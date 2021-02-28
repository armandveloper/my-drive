import React, { useState } from 'react';

const initialState = {
	username: '',
	password: '',
};

function LoginScreen() {
	const [credentials, setCredentials] = useState(initialState);
	const [errors, setErrors] = useState({
		usernameErr: false,
		pwdErr: false,
	});

	const { username, password } = credentials;
	const { usernameErr, pwdErr } = errors;

	const handleLogin = (e) => {
		e.preventDefault();
		// TODO Validar
		let usrError = false,
			pwdError = false;
		console.log(username, password);
		if (!username.trim()) {
			usrError = true;
		}
		if (!password.trim()) {
			pwdError = true;
		}
		setErrors({ usernameErr: usrError, pwdErr: pwdError });

		if (usrError || pwdError) {
			return;
		}
		// TODO Autenticar

		// fetch(url)

		// TODO Limpiar estado
		// setCredentials(initialState);
	};

	const handleChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};

	return (
		<div className="login">
			<div className="login__container">
				<h1 className="login__title">Welcome Back</h1>
				<form className="form form--login" onSubmit={handleLogin}>
					<div className="form__group form__group--login">
						<input
							type="text"
							className="form__control form__control--login"
							aria-label="Username"
							placeholder="Username"
							value={username}
							onChange={handleChange}
							name="username"
						/>
						{usernameErr && (
							<span className="form__msg form__msg--error">
								Enter your username
							</span>
						)}
					</div>
					<div className="form__group form__group--login">
						<input
							type="password"
							className="form__control form__control--login"
							aria-label="Password"
							placeholder="Password"
							value={password}
							onChange={handleChange}
							name="password"
						/>
						{pwdErr && (
							<span className="form__msg form__msg--error">
								Enter your password
							</span>
						)}
					</div>
					<button type="submit" className="btn btn--orange btn--full">
						Login
					</button>
				</form>
			</div>
		</div>
	);
}

export default LoginScreen;
