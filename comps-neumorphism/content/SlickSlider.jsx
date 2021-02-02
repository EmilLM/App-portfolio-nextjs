import React, {Component} from 'react'
import Project from './Project'
import projectsData from '../../projectsData'
import Slider from "react-slick";

export default class CenterMode extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      adaptiveHeight: true

    };
    return (
   
        <Slider {...settings}>
          {projectsData.map( project => {
                return <Project project={project} key={project.id} />
            })}
        </Slider>
    );
  }
}