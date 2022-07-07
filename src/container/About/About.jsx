import React from 'react'
import './About.scss'
import { AppWrap, MotionWrap } from '../../wrapper'

const About = () => {
  const data = [
    {
      year: '1991',
      content: 'ARC US, with Headquarters in Point Roberts, Washington, was founded in 1991 in Montreal, Canada to develop information systems for airports and air traffic control, based on over thirty years of cumulative consulting experience in the industry. Effectively, the consulting skills and tools were transformed into computerized, production information systems to provide airport and air traffic control professionals advanced Decision Support Systems, which had been continuously improved to meet the challenging needs of today\'s industry. These included airport and airline information systems, simulation, data capture and visualization, report generation and system monitoring tools.'
    },
    {
      year: '1993',
      content: 'ARC US established its presence in the US in 1993 and in 1996, moved its headquarters to the US where it established a presence in Texas concurrent with a major contract with Sabre Inc. In 2001, ARC US moved its headquarters to Point Roberts, WA, and its development office to Shanghai, PRC. Over twenty-five years of success in developing and distributing the most advanced airport/airspace simulation tool on the market, ARCport,'
    },
    {
      year: '2016',
      content: 'in June 2016, ARC US sold its ARCport product and all of its intellectual Property to Transoft Solutions Inc., of Richmond, British Columbia, Canada and contracted with Transoft to provide exclusive consulting services to Transoft. In 2019, the initial contract with Transoft Solutions Inc was modified to allow ARC to undertake consulting projects with all Transoft products for any clients worldwide. As of June 1, 2016, for all ARCport related enquiries, please click here and you will be redirected to the Transoft website. For enquires related to consulting services from ARC US or its association with the fund raising activities for the American Heart Association and American Stroke Association,  please continue on this website.'
    }
  ]

  return (
    <>
      <h2 className='head-text'>History of <span>ARC US</span></h2>

      <div>
        {data.map((obj, index) => (
          <div key={index} className='app__about-history'>
            <h1>{obj.year}</h1>
            <img src={require(`../../assets/airport${index}.jpg`)} alt=''/>
            <p>{obj.content}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  "app__whitebg"
)