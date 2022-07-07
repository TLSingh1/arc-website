import React from "react"

const NavigationDots = ({ active }) => {
	const navbarElements = [
		"home",
		"about",
		"work",
		"charity",
		"contact",
		"blog",
	]

	return (
		<div className="app__navigation">
			{navbarElements.map((item, index) => (
				<a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? {backgroundColor: '#313BAC'} : {}}
        />
			))}
		</div>
	)
}

export default NavigationDots
