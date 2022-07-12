import React, { useState } from 'react'
import {motion} from 'framer-motion'
import {AppWrap, MotionWrap} from '../../wrapper'
import './Work.scss'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('Planning');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1});

  const projects = ['Planning', 'Simulation', 'Analysis', 'Data Collection', 'Operations']
  
  const handleWorkFilter = (item) => {
    setActiveFilter(item)
  }

  return (
		<>
			<h2 className="head-text">
				Current Consulting Services <br /> <span>(2022 Onwards)</span>
			</h2>
			<h2 style={{ marginBottom: '1vh'}}>ARC US offers over 40 years of experience in the following domains:</h2>
			<div className="app__work-filter">
				{projects.map((item, index) => (
					<div
						key={index}
						onClick={() => handleWorkFilter(item)}
						className={`app__work-filter-item app__flex p-text ${
							activeFilter === item ? "item-active" : ""
						}`}
					>
						{item}
					</div>
				))}
			</div>

			<motion.div
				animate={animateCard}
				transition={{ duration: 0.5, delayChildren: 0.5 }}
				className="app__work-portfolio"
			>
				{(() => {
					switch (activeFilter) {
						case "Planning":
							return (
								<div>
									<div className='imageContainer'>
										<img src={require("../../assets/planning.png")} alt=''/>
									</div>
									<p>
										Facility design for terminals, pavement areas for airside,
										and rote structure for vehicle access and parking for
										landside.
									</p>
								</div>
							)
						case "Simulation":
							return (
								<div>
									<div className='imageContainer'>
										<img src={require("../../assets/simulation.png")} alt=''/>
									</div>
									<p>
										Simulation of any subset of the airport or the completely
										integrated airside, terminal and landside to prove the
										design or identify deficiencies.
									</p>
								</div>
							)
						case "Analysis":
							return (
								<div>
									<div className="imageContainer">
										<img src={require("../../assets/analysis.png")} alt=''/>
									</div>
									<p>
										Capacity analysis and determination of airside, landside and
										terminal functions <br />
										Actual determination of dynamic and static capacity of
										various airport facilities in practical terms
									</p>
								</div>
							)
						case "Data Collection":
							return (
								<div>
									<div className="imageContainer">
										<img src={require('../../assets/data-collection.png')} alt=''/>
									</div>
									<p>
										Data associated with passive and non-passive variables such
										as processing times, proportion of passengers choosing one
										or another paths, and the reporting times at the aaieeport
										for departing flights, to name a few variables.
									</p>
								</div>
							)
						case "Operations":
							return (
								<div>
									<div className="imageContainer">
										<img src={require("../../assets/operations.png")} alt=''/>
									</div>
									<p>
										Flight Operations data collection and analysis of terminal
										procedures <br />
										Using judgment and ICAO and FAA regulations and standards, a
										critical assessment of procedures based on appropriate data
										collection.
									</p>
								</div>
							)
					}
				})()}
			</motion.div>

			<div className="description">
				<h1>
					For initiating contact with ARC US for a consulting project, please
					send an email to <br /> <span style={{color: "blue"}}>krsingh@arc-us-ca.com</span>
				</h1>
			</div>
		</>
	)
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  "app__primarybg"
)