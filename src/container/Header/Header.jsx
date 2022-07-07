import React, { useState } from "react"
import "./Header.scss"
import { AppWrap } from "../../wrapper"

const scaleVariants = {
	whileInView: {
		scale: [0, 1],
		opacity: [0, 1],
		transition: {
			duration: 1,
			ease: "easeInOut",
		},
	},
}

const Header = () => {
	const [pointer, setPointer] = useState(0)

	const scrollLeft = () => {
		switch (pointer) {
			case 0:
				return setPointer(5)
			case 1:
				return setPointer(0)
			case 2:
				return setPointer(1)
			case 3:
				return setPointer(2)
			case 4:
				return setPointer(3)
			case 5:
				return setPointer(4)
		}
	}
	const scrollRight = () => {
		switch (pointer) {
			case 0:
				return setPointer(1)
			case 1:
				return setPointer(2)
			case 2:
				return setPointer(3)
			case 3:
				return setPointer(4)
			case 4:
				return setPointer(5)
			case 5:
				return setPointer(0)
		}
	}

	return (
		<div className="app__header app__flex">
			<button onClick={scrollLeft}>{`<`}</button>
			<div>
				{(() => {
					switch (pointer) {
						case 0:
							return <img src={require("../../assets/png0.png")} />
						case 1:
							return <img src={require("../../assets/jpg2.jpg")} />
						case 2:
							return <img src={require("../../assets/png2.png")} />
						case 3:
							return <img src={require("../../assets/jpg0.jpg")} />
						case 4:
							return <img src={require("../../assets/jpg1.jpg")} />
						case 5:
							return <img src={require("../../assets/png1.png")} />
					}
				})()}
			</div>
			<button onClick={scrollRight}>{`>`}</button>
		</div>
	)
}

export default AppWrap(Header, "home")
