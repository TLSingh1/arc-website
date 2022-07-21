import React from "react"
import "./Blog.scss"
import { AppWrap, MotionWrap } from "../../wrapper"

const Blog = () => {
	return (
		<>
			<div className="app__blog-container">
				<h2 className="head-text">
					Track Romi's <span>Bucket List Flight</span>
				</h2>
				<div className="mapList">
					<p>
						1. GNV Gainesville Regional <br />
						2. VLD Valdosta Regional
						<br />
						3. CKF Crisp County Cordele
						<br />
						4. 6A2 Griffin Spalding Co
						<br />
						5. RMG Richard B Russel Regional
						<br />
						6. UOS Franklin County
						<br />
						7. 1M5 Portland Municipal
						<br />
						8. EKX Addington Field
						<br />
						9. SER Freeman Municipal
						<br />
						10. CFJ Crawfordsville Regional
						<br />
						11. IKK Greater Kinkakee
						<br />
						12. DKB Dekalb Taylor
						<br />
						13. RYV Watertown Municipal
						<br />
						14. OSH Oshkosh
						<br />
						15. 82C Mauston New Union Lebanon
						<br />
						16. SSY Rushford Municipal
						<br />
						17. AEL Albert Lea Municipal
						<br />
						18. MJQ Jackson Municipal
						<br />
						19. FSD Sioux Falls Municipal
						<br />
						20. Mitchell Municipal
						<br />
						21. 9V9 Chamberlain Municipal
						<br />
					</p>
					<img src={require("../../assets/trip.png")} />
					<p>
						22. 8F6 Murdo Municipal
						<br />
						23. 6V4 Wall
						<br />
						24. SPF Black Hills Clyde Ice Field
						<br />
						25. GCC NE Wyoming Regional
						<br />
						26. SHR Sheridan County
						<br />
						27. OOU Big Horn County
						<br />
						28. 6S3 Walterman Memorial
						<br />
						29. LVM Mission Field
						<br />
						30. 9S5 Three Forks
						<br />
						31. 38S Deer Lodge City
						<br />
						32. MSO Missoula
						<br />
						33. 9S4 Mineral County
						<br />
						34. S83 Shoshone County
						<br />
						35. COE Coeur d'Alene
						<br />
						36. 33S Pru Field
						<br />
						37. W20 Moses Lake Municipal
						<br />
						38.ELN Ellensburg
						<br />
						39. S93 Cle Elum
						<br />
						40. S43 Harvey Field
						<br />
						41. BLI Bellingham
						<br />
						42. 1RL Point Roberts
						<br />
					</p>
				</div>
				<div className="content">
					<p className="p-text">
						Romi will continue with his love of aviation and flight as a pilot
						by flying an ultralight vehicle, an Aerolite 103, from Deland, FL to
						Point Roberts, WA, via a week at Oshkosh, WI, at AirVenture 2022. He
						will depart Deland on the morning of July 19th and expects to arrive
						in Point Roberts on August 8, 2022, subject to some variation due to
						weather. The stop in Oshkosh is planned from July 25th to July 31st
						when Romi's Aerolite 103 will be on display in the Ultralight area
						in the booth of Dennis Carley, U-Fly-IT Light Sport Aircraft, LLC.
					</p>
					<p className="p-text">
						The Aerolite 103 is a FAR Part 103 vehicle. Romi's vehicle is
						equipped with an AHRS, Trig TT21 Mode C Transponder, Trig TY 91
						Transceiver, an iLevil Autopilot, and a Magnum 660 softpack chute.
						Empty weight of the vehicle is under 274 lbs. As per the Part 103
						regulations, the fuel tank capacity is 5 USG, and the maximum
						cruising air speed is 55 knots. The engine is a MZ 34 which is a
						single cylinder, two stroke cycle engine, requiring premium car gas
						with fuel - oil mixed to 50:1 ratio.
					</p>
					<p className="p-text">
						The vehicle carries a USUA registration with call sign “13ARC” and
						will be using that call sign with all ATC and Air-Ground
						communications as well as a live location update via a SPOT 4 GPS
						Satellite Messenger. You may view the current location of 13ARC by
						going to the website {" "}
						<a
							href="https://maps.findmespot.com/s/5NFW"
							target="_blank"
							rel="noreferrer"
						>
							here
						</a>{" "}
					</p>
					<p className="p-text">
						The bucket list flight covers over 2,680 nm, taking a minimum of 55
						flying hours, with at least 41 stops and 13 hotel nights on the way.
						To avoid convective turbulence, each day the starting time will be 6
						am and last flight of the day will terminate around 11 am.
					</p>
				</div>
				<div>
					<div className="app__blog-footer">
						<h1>Follow the trip in real time from the blog</h1>
						<a href="https://www.romi-blog.live/" target="blank">
							Click Here
						</a>
					</div>
					<div className="app__blog-footer">
						<h1>Or from the in-flight tracker</h1>
						<a href="https://flightaware.com/live/flight/13ARC" target="blank">
							Click Here
						</a>
					</div>
				</div>
			</div>
		</>
	)
}

export default AppWrap(MotionWrap(Blog, "app__blog"), "blog", "app__whitebg")
