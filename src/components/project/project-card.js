import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

class ProjectCard extends React.Component {
  render() {
    return (
      <a className="block rounded-lg shadow-lg transition-all hover:scale-110 hover:shadow-indigo-400/50 bg-white" href={this.props.to} target="_blank">
        <GatsbyImage image={this.props.image} className="w-full rounded-t-lg" />
         <div className="p-4">
          <h3 className="text-xl mb-2">{this.props.title}</h3>
          <p className="font-light">{this.props.description}</p>
         </div>
      </a>
    )
  }
}

export default ProjectCard