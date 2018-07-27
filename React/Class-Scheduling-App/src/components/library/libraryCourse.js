import React, { Component } from "react";

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <label className="library-course__title">Problem Solving</label>
        {/*Icon component */}
        {/*arrow component */}
        {/*action button component */}
        <div className="library-course__description">
          <label>Course Description</label>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            convallis fringilla mattis. In non placerat est. In dapibus ligula
            risus, ut auctor justo venenatis ac.
          </p>
        </div>
      </div>
    );
  }
}

export default LibraryCourse;
