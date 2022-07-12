import React, { useState } from "react"
import "./Navbar.scss"
import { images } from "../../constants"
import { HiMenuAlt4, HiX } from "react-icons/hi"
import { motion } from "framer-motion"

const Navbar = () => {
	const [toggle, setToggle] = useState(false)

	const navbarElements = ["home", "about", "work", "resume","charity", "contact", "blog"]

	return (
		<nav className="app__navbar">
			<div className="app__navbar-logo">
				<img src={require("../../assets/arc-logo-proper.png")} />
			</div>
			<ul className="app__navbar-links">
				{navbarElements.map((item) => (
					<li className="app__flex p-text" key={`link-${item}`}>
						<div />
						<a href={`#${item}`}>{item}</a>
					</li>
				))}
			</ul>
			<div className="app__navbar-logo hideDisplay">
				<img src={require("../../assets/arc-logo-proper.png")} />
			</div>

			<div className="app__navbar-menu">
				<HiMenuAlt4 cursor="pointer" onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: "easeOut" }}
					>
						<HiX cursor="pointer" onClick={() => setToggle(false)} />
						<ul>
							{navbarElements.map((item) => (
								<li key={item}>
									<a href={`#${item}`} onClick={() => setToggle(false)}>
										{item}{" "}
									</a>
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
