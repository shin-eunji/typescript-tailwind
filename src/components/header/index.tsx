import React from 'react';

import Logo from "./Logo";
import Form from "./Form";
import Nav from "./Nav";

function Header () {

	return (
		<div className="flex flex-nowrap items-center justify-start p-3">
			<Logo />
			<Form />
			<Nav />
		</div>
	)
}

export default Header;
