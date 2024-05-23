import React from 'react'
import {
    LeetcodeBadges,
    LeetcodeContestRatingGraph,
    LeetcodeSolvedProblemsStats,
    LeetcodeSubmissionsHeatmap,
    LeetcodeTopRatingHistogram,
  } from "leetcode-profiler";
import { Row } from "react-bootstrap";

const Leetcode = () => {
    const username = "agarwalnimit88"
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            Days I <strong className="purple">Code</strong>
          </h1>
          <LeetcodeSubmissionsHeatmap username={username} />
        </Row>
      );    
}

export default Leetcode