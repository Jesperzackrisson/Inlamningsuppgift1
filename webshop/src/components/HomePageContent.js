import React from 'react'
import HeroImage from '../Images/heroImage.png';

// import { useHistory } from 'react-router-dom'

const HomePageContent = () => {

    // const history = useHistory()

    return (
        <div className="hero-text">
            <div className="dummy-text">
                <h1>Lorem</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga veritatis odit velit tempore dolorem vero distinctio porro ducimus obcaecati modi quaerat nisi ipsum quis blanditiis, qui sapiente itaque dolorum.</p>
            </div>
            <div className="dummy-image">
                <img src={HeroImage} alt=""/>
            </div>
            
        </div>
    )
}

export default HomePageContent
