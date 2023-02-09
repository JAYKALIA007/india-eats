import React from "react";

const Shimmer = () =>  {
    return(
        <div>
            {Array(10).fill("").map((e,index) => (
                <div className="shimmer-card" key={index}>
                    <div className="img-shimmer"></div>
                    <div className="name-shimmer"></div>
                    <div className="cuisines-shimmer"></div>
                    <div className="cuisines-shimmer"></div>
                </div>
            ))}
        </div>
    )
}
export default Shimmer