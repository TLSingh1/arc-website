import React, { useState } from "react"
import { motion } from "framer-motion"
import ReactTooltip from "react-tooltip"

import { AppWrap, MotionWrap } from "../../wrapper"
import "./Skills.scss"

const Skills = () => {
	const [activeFilter, setActiveFilter] = useState("Analysis/Engineering")

	const teachings = [
		{
			date: "2021 - Date",
			title: "Professor (Aviation Department)",
			company: "Central Washington University",
		},
		{
			date: "2012 - Date",
			title: "Lecturer",
			company:
				"University of Information Technology and Management, Rzeszow, Poland",
		},
		{
			date: "2002 - 2002",
			title: "Lecturer",
			company:
				"University of British Columbia, Statistic and Faculty of Commerce",
		},
		{
			date: "2001 - 2002",
			title: "Information Systems Management, MBA Program",
			company: "University of Dallas",
		},
		{
			date: "1991 - 1992",
			title: "Seminar Instructor (Consulting and Diagnosing in Management)",
			company: "Tianjin University",
		},
		{
			date: "1991 - 1992",
			title: "Lecturer (Strategic Aircraft Selection, and Flight Scheduling)",
			company: "Civil Aviation Administration of China Management Institute",
		},
		{
			date: "1990 - 1992",
			title: "Instructor (867 Squadron, lle Parrot)",
			company: "Royal Canadian Air Cadets",
		},
		{
			date: "1988 - 1989",
			title: "Flight Instructor (DC-9 Aircraft)",
			company: "Air Canada",
		},
		{
			date: "1987 - 1995",
			title:
				"Part-time Faculty (Operations Research/Probability and Statistics)",
			company: "McGill University",
		},
		{
			date: "1987 - 1995",
			title: "Part Time Faculty (Production and Operations Management, and MIS",
			company: "Concordia University",
		},
		{
			date: "1985 - 1986",
			title:
				"Sessional Instructor (Opearations/Management Information Systems)",
			company: "University of Calgary",
		},
		{
			date: "1977 - 1984",
			title: "Part-Time Lecturer (Research/Management Science)",
			company: "Concordia University",
		},
		{
			date: "1972 - 1973",
			title: "Instructor",
			company: "Royal Canadian Air Cadets",
		},
		{
			date: "1967 - 1969",
			title: "Flight Instructor",
			company: "Winnipeg Flying Club",
		},
	]

	const works = [
		{
			date: "2021 - Date",
			title: "Lecturer",
			company: "Central Washington University",
			tooltip: "Professor and Instructor",
		},
		{
			date: "2016-2019",
			title: "Product Director - ArcPORT",
			company: "Transoft Solutions Inc.",
			tooltip: "Independent contractor",
		},
		{
			date: "2001 - Date",
			title: "President",
			company: "Aviation Research Corporation",
			tooltip:
				"Principal architect of ARC products and resource to the technical development team  Responsible for the marketing and training associated with the new generation of Decision  Support Systems produced by the company. Currently, focus on consulting.",
		},
		{
			date: "1996 - 2001",
			title: "Senior Director",
			company: "SABRE Inc.",
			tooltip:
				"Responsible for airportt and air traffic control decision and information technology tools' development and marketing worldwide, application to consulting studies, as well as supervision of the development and consulting teams. Areas of information technology within responsibility:\nTerminal Building simulation\nEnvironmental management (noise)\nAirside operations management\nFlight operations management",
		},
		{
			date: "1991 - 1996",
			title: "President",
			company: "Aviation Research Corporation",
			tooltip:
				"Founded the company. Undertook various airport, airline, and air traffic control studies for the first two years and then developed software products for airports, air traffic control and airlines. Responsible for the overall management, business development, and professional activity of the firm as well as serving as a resource to the professionals.",
		},
		{
			date: "1990 - 1991",
			title: "Executive Vice President",
			company: "Aviation Planning Services Ltd.",
			tooltip:
				"Responsible for overall marketing, project management, and professional activity in addition to serving as a resource to the professionals. Successfully undertook the growth of the company and secured several new contracts within the term of office for the company.",
		},
		{
			date: "1987 - 1990",
			title: "Vice President, Operations Analysis & Planning",
			company: "Aviation Planning Services",
			tooltip:
				"Responsible for marketing, project management and professional activity encompassing activities similar to those described below.",
		},
		{
			date: "1976 - 1987",
			title: "Various positions and companies",
			company: "",
			tooltip: "See below for details.",
		},
	]

	const education = [
		{
			date: "1993",
			content:
				"Loughborough University of Technology, U.K., Airport Planning courses towards Ph.D.",
		},
		{
			date: "1987",
			content: "University of Calgary, Canada, M.Sc. (Computer Science)",
		},
		{
			date: "1980",
			content:
				"Concordia University, Canada, Studies toward Ph.D. (Operations Research)",
		},
		{
			date: "1976",
			content: "Concordia  University, Canada, MBA",
		},
		{
			date: "1969",
			content: "University of Manitoba, B.Sc. (Mechanical Engineering)",
		},
	]

	const fields = [
		"Analysis/Engineering",
		"Operations Research/Computer Science",
		"Airport and Airspace Planning",
		"Organization and Management",
	]

	const papers = [
		{
			date: '2016',
			content: 'Various articles on airport simulation and data collection in Passenger Terminal World Magazine',
		},
		{
			date: '1991',
			content: 'Designer Airports, Aviation and Aerospace, Canada\'s International Journal'
		},
		{
			date: '1989',
			content: 'A strategy for exploiting the full potential of MLS based terminal procedures in Canada. Carious Transport Canada publications related to projects undertaken on behalf of Transportation Development Centre.'
		},
		{
			date: '1988',
			content: 'AI applications in Commercial Flight Operations, CASI Symposium on Aerospace Montreal'
		},
		{
			date: '1987',
			content: 'A semi automated process for the location of runways in mountainous terrain. (University of Calgary, M.Sc. Thesis)'
		}
	]

	const handleWorkFilter = (item) => {
		setActiveFilter(item)
	}

	return (
		<>
			<h2 className="head-text">
				My <span>Resume</span>
			</h2>
			<div className="education" style={{ marginTop: "2vh", marginBottom: "10vh" }}>
				<h1 className="grow" style={{ marginRight: "6vw"}}>Education</h1>
				<div>
					<ul>
						{education.map((obj, index) => (
							<motion.div className="app__skills-exp-item" key={index}>
								<div className="app__skills-exp-year year">
									<p className="bold-text">{obj.date}</p>
								</div>
								<motion.div className="app__skills-exp-works">
									<motion.div
										whileInView={{ opacity: [0, 1] }}
										transition={{ duration: 0.5 }}
										className="app__skills-exp-work"
									>
										<p className="bold-text">{obj.content}</p>
									</motion.div>
								</motion.div>
							</motion.div>
						))}
					</ul>
				</div>
			</div>
			<div className="app__skills-container">
				<motion.div className="app__skills-exp">
					<h2 className="grow">Teaching Expirience</h2>
					{teachings.map((work, index) => (
						<motion.div className="app__skills-exp-item" key={index}>
							<div className="app__skills-exp-year">
								<p className="bold-text">{work.date}</p>
							</div>
							<motion.div className="app__skills-exp-works">
								<motion.div
									whileInView={{ opacity: [0, 1] }}
									transition={{ duration: 0.5 }}
									className="app__skills-exp-work"
								>
									<h4 className="bold-text">{work.title}</h4>
									<p className="p-text">{work.company}</p>
								</motion.div>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
				<motion.div className="app__skills-exp">
					<h2 className="grow">Work Expirience</h2>
					{works.map((work, index) => (
						<motion.div className="app__skills-exp-item" key={index}>
							<div className="app__skills-exp-year">
								<p className="bold-text">{work.date}</p>
							</div>
							<motion.div className="app__skills-exp-works">
								<motion.div
									whileInView={{ opacity: [0, 1] }}
									transition={{ duration: 0.5 }}
									className="app__skills-exp-work"
									data-tip
									data-for={index.toString()}
								>
									<h4 className="bold-text">{work.title}</h4>
									<p className="p-text">{work.company}</p>
								</motion.div>
								<ReactTooltip
									className="skills-tooltip"
									id={index.toString()}
									effect="solid"
									arrowColor="#fff"
									place="right"
								>
									<span>{work.tooltip}</span>
								</ReactTooltip>
							</motion.div>
						</motion.div>
					))}
					<h2 className="grow" style={{ marginTop: "3vh"}}>Papers and Thesis</h2>
					{papers.map((paper, index) => (
						<motion.div style={{ marginTop: "1.5vh" }} className="app__skills-exp-item" key={index}>
							<div className="app__skills-exp-year">
								<p className="bold-text">{paper.date}</p>
							</div>
							<motion.div className="app__skills-exp-works">
								<motion.div
									whileInView={{ opacity: [0, 1] }}
									transition={{ duration: 0.5 }}
									className="app__skills-exp-work"
								>
									<p className="bold-text">{paper.content}</p>
								</motion.div>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>

			<div className="app__work-filter">
				{fields.map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkFilter(item)}
						className={`app__work-filter-item outline app__flex p-text ${
							activeFilter === item ? "item-active" : ""
						}`}
					>
						{item}
					</div>
				))}
			</div>
			<div>
				{(() => {
					switch (activeFilter) {
						case "Analysis/Engineering":
							return (
								<div className="content">
									<p>
										Analysis pertaining to organization and operation of
										existing and potential Carriers/Flight Departments. (Alcan,
										Iron Ore Company of Canada, Angus Aviation, Foster
										Research). <br />
										<br /> Development of operating plans, including
										organizational design, implementation and control
										procedures. (Alcan, Eldorado Mining, Transport Canada).{" "}
										<br />
										<br />
										Technical and Economic evaluation of aircraft, support
										systems and other related equipment for specific roles.
										Development of optimization criteria and selection. (CN,
										Canadair, de Havilland Aircraft, Donahue Inc., Iron Ore
										Company of Canada, Federal Express, Transport Canada).{" "}
										<br />
										<br />
										Market Research and Analysis related to other aerospace
										products and services. (Canadair, Dept. of Industry, Trade
										and Commerce, de Havilland Aircraft of Canada Ltd.).
									</p>
								</div>
							)
						case "Operations Research/Computer Science":
							return (
								<div className="content">
									<p>
										Development and application of mathematical models to assist
										in the identification and optimal solution of problems
										(PERT/CPM, scheduling, mathematical programming, resource
										allocation, simulation and statistical models). (Filmore and
										Riley, Asbestos Corporation, Government of Alberta,
										Government of Manitoba, International Civil Aviation
										Organization, Canadair Inc.).
										<br />
										<br /> Development of computer algorithms and codes to
										assist in the definition and/or solution of problems.
										(Alcan, CP, PWA Wardair consortium, Filmore &amp; Riley,
										Canadair, Transport Canada). <br />
										<br /> Production software for route analysis and economic
										analysis of Canadair RJ in service with numerous potential
										airlines. Program used for DHC-8, F-100, ATR-42 and DC-9.
									</p>
								</div>
							)
						case "Airport and Airspace Planning":
							return (
								<div className="content">
									<p>
										Simulation studies of Airports and airspace using SIMMOD
										(Ottawa International Airport, Pearson International
										Airport, Dorval Airport, and Transport Canada) and
										proprietary software (High Level Airspace Simulator). <br />
										<br />
										MLS based site selection in mountainous terrain (Transport
										Canada, Pelorus Aviation) using PANOPS and TERPS. <br />
										<br />
										Risk Analysis of IFR operations in constrained airports
										(Pemberton, Transport Development Centre). <br />
										<br />
										Development of high-level airspace simulation model.
										(Canadair). <br />
										<br />
										Airport design, site selection and localization of
										facilities for airport systems (ICAO,Transport Canada,
										Lesotho, Saudi Arabia, Peru, Grenada, Pakistan). Use of
										advancedcomputer techniques for airport site selection and
										runway localization in conformance with PANOPS. <br />
										<br />
										Design of terminal navigation and flight procedures
										(Internationally). (ICAO, Peru, Madeira, Transport Canada,
										Canadian Marconi Co., Pelorus Aviation Supply Co.) Using
										PANOPS and TERPS. <br />
										<br />
										National Airspace Planning (aircraft flows network models).
										(Transport Canada, ICAO, Canadair)
									</p>
								</div>
							)
						case "Organization and Management":
							return (
								<div className="content">
									<p>
										Surveys of personnel attributes including salaries
										(confidential client). <br />
										<br />
										Evaluation and policy formulation. (Government of Canada,
										Alcan, Government of Manitoba). <br /> <br />
										Development of organizational formats and related job
										description for corporate department. (Alcan) <br />
										<br />
										Development of personnel training programs. (Alcan, Winnipeg
										Flying Club, Association of South Pacific Airlines, Aviation
										Planning Services Ltd.) <br />
										<br />
										Behavioural Research in Industry. (Transport Canada, Alcan,
										Eldorado Mining, Trans Turbo North Airways).
									</p>
								</div>
							)
					}
				})()}
			</div>
			<div className="languages">
				<h2>Fluent in English and French</h2>
				<p className="p-text">USA and Canadian Citizenship</p>
			</div>
		</>
	)
}

export default AppWrap(
	MotionWrap(Skills, "app__skills"),
	"resume",
	"app__whitebg"
)
