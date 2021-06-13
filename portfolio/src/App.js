import './App.css';
import './App_Mobile.css'
import Skill from './Skill';

import HTMLIcon from './skills/html.svg'
import CSSIcon from './skills/css.svg'
import ReactJSIcon from './skills/react.svg'
import PhotoshopIcon from './skills/Adobe_Photoshop_CC.svg'
import XDIcon from './skills/Adobe_XD.svg'
import CLangIcon from './skills/c-programming.svg'
import PythonIcon from './skills/python.svg'
import CSharpIcon from './skills/c_sharp.svg'
import SQLIcon from './skills/SQL.svg'
import VBIcon from './skills/Visual_Basic.svg'
import BlenderIcon from './skills/blender.svg'
import PremierProIcon from './skills/Adobe_Premiere_Pro.svg'
import JSIcon from './skills/Javascript.svg'
import ElectronIcon from './skills/Electron.svg'

import WhoAmI from './WhoAmI';
import StudentIcon from './WhoAmI/Student.svg'
import WebDevIcon from './WhoAmI/WebDev.svg'
import UIDesignIcon from './WhoAmI/UIDesign.svg'
import GeekIcon from './WhoAmI/Geek.svg'
import AwesomeIcon from './WhoAmI/Awesome.svg'
import { useState } from 'react';
import './fittext'

function App() {
	const vh = document.documentElement.clientHeight
	const vw = document.documentElement.clientWidth

	const desc = [{
		Value: "a Student.",
		Icon: StudentIcon
	},
	{
		Value: "a Web Developer.",
		Icon: WebDevIcon
	},
	{
		Value: "a UI Designer.",
		Icon: UIDesignIcon
	},
	{
		Value: "a Geek.",
		Icon: GeekIcon
	},
	{
		Value: "Skilled.",
		Icon: AwesomeIcon
	}]

	const skills = [
		{
			title: 'C',
			Icon: CLangIcon
		},
		{
			title: 'Visual Basic',
			Icon: VBIcon
		},
		{
			title: 'C#',
			Icon: CSharpIcon
		},
		{
			title: 'Python',
			Icon: PythonIcon
		},
		{
			title: 'SQL',
			Icon: SQLIcon
		},
		{
			title: 'HTML',
			Icon: HTMLIcon
		},
		{
			title: 'CSS',
			Icon: CSSIcon
		},
		{
			title: 'Javascript',
			Icon: JSIcon
		},
		{
			title: 'ReactJS',
			Icon: ReactJSIcon
		},
		{
			title: 'Electron JS',
			Icon: ElectronIcon
		},
		{
			title: 'Adobe Photoshop',
			Icon: PhotoshopIcon
		},
		{
			title: 'Adobe XD',
			Icon: XDIcon
		},
		{
			title: 'Adobe Premiere Pro',
			Icon: PremierProIcon
		},
		{
			title: 'Blender',
			Icon: BlenderIcon
		}
	]

	const [selectedSkill, setSelectedSkill] = useState(skills[0].title)
	const [selectedSkillIndex, setSelectedSkillIndex] = useState(0)

	function handleScroll(e) {
		if (e.target.scrollTop === 0) {
			document.getElementById('section1ChildrenWrapper').scrollTop = 0
		}
		if (e.target.scrollTop >= 0 && e.target.scrollTop <= vh) {
			document.getElementById('circleWhite').style.transform = 'scale(' + (1.25 + (5.3 * e.target.scrollTop / vh)) + ')'
			document.getElementById('section1').style.opacity = e.target.scrollTop / vh
		}

		if ((e.target.scrollTop <= 2 * vh) && e.target.scrollTop > vh) {
			document.getElementById('section2Wrapper').opacity = (e.target.scrollTop / vh) - 1
		}
		if (e.target.scrollTop === 2 * vh) {
			document.getElementById('section1ChildrenWrapper').scrollTop = 0
		}
		if (e.target.scrollTop === 3 * vh) {
			document.getElementById('awesomeSkills').scrollTop = 0
		}
	}

	function handleSkillsClick(e) {
		e.preventDefault()
		const vh = document.documentElement.clientHeight
		const skillListElement = document.getElementById('home')
		skillListElement.scrollTo({
			top: 2 * vh,
			behavior: 'smooth'
		})
	}

	function goBackSkill() {
		const vw = document.documentElement.clientWidth
		const skillListElement = document.getElementById('awesomeSkills')
		if (skillListElement.scrollLeft === 0) {
			//(skillListElement.scrollWidth - skillListElement.offsetWidth)
			skillListElement.scrollTo({
				left: skillListElement.scrollWidth - skillListElement.offsetWidth,
				behavior: 'smooth'
			})
		}
		else {
			skillListElement.scrollTo({
				left: skillListElement.scrollLeft - vw,
				behavior: 'smooth'
			})
		}
	}

	function goForwardSkill() {
		const vw = document.documentElement.clientWidth
		const skillListElement = document.getElementById('awesomeSkills')
		if (Math.round(skillListElement.scrollLeft) === (skillListElement.scrollWidth - skillListElement.offsetWidth)) {
			skillListElement.scrollTo({
				left: 0,
				behavior: 'smooth'
			})
		}
		else {
			skillListElement.scrollTo({
				left: skillListElement.scrollLeft + vw,
				behavior: 'smooth'
			})
		}
	}

	function handleSkillsScroll(e) {
		if (document.getElementById('button1').style.display != 'none') {
			const val = e.target.scrollLeft
			var ind = Math.floor(val / (document.documentElement.clientWidth))
			document.getElementById('selectSkillSpan').style.opacity = 0
			setTimeout(() => {
				setSelectedSkill(skills[ind].title)
				setTimeout(() => {
					document.getElementById('selectSkillSpan').style.opacity = 1
				}, 750)
			}, 100)
		}
	}

	return (
		<div className="App" onScroll={handleScroll} id="home">
			<div id="circleWhite">
			</div>
			<div className="App-header" id='homeHeader'>
				<div id="section0" className="scrollSnap">
					<header>
						<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/sai-raveendra-kandregula-269457199/">LinkedIn</a>
						<a target="_blank" rel="noreferrer" href="mailto:sairaveendrakandregula@gmail.com">Email</a>
						<a target="_blank" rel="noreferrer" href="tel:+918919823114">Mobile</a>
						<a onClick={handleSkillsClick}>Skills
						<svg x="0px" y="0px" height="0.9em" viewBox="0 0 512 512" fill='white' style={{ marginLeft: '7.5px', marginBottom: '-2px' }}>
								<g>
									<path stroke='white' d="M509.121,125.966c-3.838-3.838-10.055-3.838-13.893,0L256.005,365.194L16.771,125.966c-3.838-3.838-10.055-3.838-13.893,0
										c-3.838,3.838-3.838,10.055,0,13.893l246.18,246.175c1.842,1.842,4.337,2.878,6.947,2.878c2.61,0,5.104-1.036,6.946-2.878
										l246.17-246.175C512.959,136.021,512.959,129.804,509.121,125.966z"/>
								</g>
							</svg>
						</a>
					</header>
					<span id="nameMain">
						Sai Raveendra<br />
						Kandregula
					</span>
				</div>
				<div id="section1" className="scrollSnap">
					<div id="section1ChildrenWrapper">
						<span id="IamA">I am </span>
						<div id="section1-0">
							{
								desc.map((descitem) => {
									return <WhoAmI Value={descitem.Value} Icon={descitem.Icon} />
								})
							}
						</div>
					</div>
				</div>
				<div id="section2" className="scrollSnap">
					<div id="section2Wrapper">
						<div id="info">
							I am fluent with:<br /><br />
							<div id="awesomeSkills" onScroll={handleSkillsScroll}>
								{
									skills.map((skillItem) => {
										return <Skill Icon={skillItem.Icon} title={skillItem.title} />
									})
								}
							</div>
							<button className="chevronButton" id="button1" onClick={goBackSkill}>
								&#8249;
                    			</button>
							<button className="chevronButton" id="button2" onClick={goForwardSkill}>
								&#8250;
                    			</button>
							<span id="selectSkillSpan">{selectedSkill}</span>
						</div>
					</div>
				</div>
				<div id="section3" className="scrollSnap">
					<div id="section3-2">
						<div id="endResume">
							<strong>Sai Raveendra Kandregula</strong><br /><br />
							<span>
								Computer Science Undergraduate Student, IIT Bhilai.<br />
								General Secretary of Media and Cultural Affairs, IIT Bhilai.<br />
								Former Secretary, DesignX, IIT Bhilai.<br />
								Tech Lead (Web), Datalake, IIT Bhilai.<br />
								Photography Team, Meraz-2019.<br />
								Content Creator, Meraz-2019.<br />
							</span>
						</div>
					</div>
					<div id="section3-1">
						<div id="thankYou">Thank you for Visiting!</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
