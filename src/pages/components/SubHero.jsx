import "./comp_css/SubHero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import support from "../../img/support.jpg";
import operator from "../../img/operator.jpg";
import doctor from "../../img/doctor.jpg";
import { UseMediaQuery } from "./UseMediaQuery";

function SubHero() {
	const [select, setSelect] = useState(0);

	const picArray = [support, operator, doctor];
	const smallResSupport = UseMediaQuery('screen and (max-width: 575px)');

	useEffect(() => {
		document
			.querySelectorAll(".feature-point li > div:last-child").forEach(ele =>
				ele.style.setProperty("display", "none"));
		
		smallResSupport && document
			.querySelector(`.feature-point li:nth-child(${select + 1}) > div:last-child`)
			.classList.add('height-change');
		
		document
			.querySelector(`.feature-point li:nth-child(${select + 1}) > div:last-child`)
			.style.setProperty('--height-change', '0');

		smallResSupport && document
			.querySelector(`.feature-point li:nth-child(${select + 1}) > div:last-child`)
			.style.setProperty("display", "block");
		
		setTimeout(() => document
			.querySelector(`.feature-point li:nth-child(${select + 1}) > div:last-child`)
			.style.setProperty('--height-change', '500px'), 10);
		
		return () => {
			window.removeEventListener('resize', resizeListener);
		}
	});

	const resizeListener = useCallback(
		() => {
			var newWidth = window.innerWidth;
			const element = document.querySelectorAll(".feature-point li > div:last-child");
			if (newWidth > 575) {
				element.forEach(each => each.style.display = "none");
			} else {
				element.forEach((each, idx) => idx!==select? each.style.display = "none": each.style.display = "block" );
			}
		});

	window.addEventListener('resize', resizeListener);

	return (
		<div className='sub-hero'>
			<div className='grid-item'>
				<div className='feature-point'>
					<ul>
						<li>
							<div className='feature'>
								<button
									onClick={() => {
										setSelect(0);
									}}>
									<FontAwesomeIcon
										icon={faCoffee}
										size='xl'
										className='faIcon'
									/>
								</button>
								<h3>Some coffee would be nice</h3>
								<p>
									Yea people really like their coffee, keep their mind active,
									and the mouth sweet.
								</p>
							</div>
							<div className='description1'>
								<div className='image'>
									<img src={picArray[select]} alt='Features' />
								</div>
							</div>
						</li>
						<li>
							<div className='feature'>
								<button
									onClick={() => {
										setSelect(1);
									}}>
									<FontAwesomeIcon
										size='xl'
										icon={faCoffee}
										className='faIcon'
									/>
								</button>
								<h3>Some coffee would be nice</h3>
								<p>
									Yea people really like their coffee, keep their mind active,
									and the mouth sweet.
								</p>
							</div>
							<div className='description2'>
								<div className='image'>
									<img src={picArray[select]} alt='Features' />
								</div>
							</div>
						</li>
						<li>
							<div className='feature'>
								<button
									onClick={() => {
										setSelect(2);
									}}>
									<FontAwesomeIcon
										icon={faCoffee}
										size='xl'
										className='faIcon'
									/>
								</button>
								<h3>Some coffee would be nice</h3>
								<p>
									Yea people really like their coffee, keep their mind active,
									and the mouth sweet.
								</p>
							</div>
							<div className='description3'>
								<div className='image'>
									<img src={picArray[select]} alt='Features' />
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className='description'>
					<div className='image'>
						<img src={picArray[select]} alt='Features' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SubHero;
