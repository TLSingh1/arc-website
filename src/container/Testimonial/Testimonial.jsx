import React, { useState  } from "react"
import "./Testimonial.scss"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { AppWrap, MotionWrap } from "../../wrapper"

const Testimonial = () => {
  const [pointer, setPointer] = useState(0);

	const handleLeft = () => {
    if (pointer === 3) { setPointer(2)}
    else if (pointer === 2) { setPointer(1) }
    else if (pointer === 1) { setPointer(0) }
	}

  const handleRight = () => {
    if (pointer === 0) { setPointer(1)}
    else if (pointer === 1) { setPointer(2) }
    else if (pointer === 2) { setPointer(3) }
  }

	return (
		<>
			<h2 className='head-text'>Fundraising for <span style={{color:"blue"}}>Charities</span></h2>
				<>
					<div className="app__testimonial-item app__flex">
						<div className="app__testimonial-content">
							{(() => {
								switch (pointer) {
									default:
										return (
											<p>
												ARC US is committed to several causes. Among these are
												the Civil Air Patrol (CAP) and the American Heart
												Association (AHA) and the American Stroke Association.
											</p>
										)
									case 0:
										return (
											<p>
												ARC US is committed to several causes. Among these are
												the Civil Air Patrol (CAP) and the American Heart
												Association (AHA) and the American Stroke Association.
											</p>
										)
									case 1:
										return (
											<p>
												ARC US provides annual scholarships to teenagers who are
												members of the Civil Air Patrol through the Bellingham
												Squadron of the Civil Air Patrol towards their pilot
												training.
											</p>
										)
									case 2:
										return (
											<p>
												In July 2022, the president of ARC US, Romi Singh, will
												raise funds for the American Heart Association by flying
												an ultralight vehicle, featured on the home page of this
												website, from Deland, Florida to Point Roberts,
												Washington. View an article written on Romi Singh by the
												AHA <a href="https://www.heart.org/en/news/2022/03/24/with-a-heart-attack-and-stroke-behind-him-pilot-plans-transcontinental-adventure">here</a>.
											</p>
										)
									case 3:
										return (
											<p>
												You may contribute directly to the American Heart
												Association by going to {" "}
												<a
													href="https://raiseyourwayforaha.funraise.org/fundraiser/kamal-singh"
													target="_blank"
													rel="noreferrer"
												>
													https://raiseyourwayforaha.funraise.org/fundraiser/kamal-singh
												</a>{" "}
												or by mailing cheque to American Heart Association 601
												Union St., Ste 2420, Seattle, WA 98101 with Check Memo:
												WSA 3rd Party Contribution Kamal Singh Bucket List
												Adventure
											</p>
										)
								}
							})()}
						</div>
					</div>

					<div className="app__testimonial-btns app__flex">
						<div className="app__flex" onClick={handleLeft}>
							<HiChevronLeft />
						</div>
						<div className="app__flex" onClick={handleRight}>
							<HiChevronRight />
						</div>
					</div>
				</>
		</>
	)
}

export default AppWrap(
	MotionWrap(Testimonial, "app__testimonial"),
	"charity",
	"app__primarybg"
)
