import React from 'react';

const Banner = (props) => {


    return (
        <div>
        <div>This is the banner { props.logo }</div>
        <p></p>
        <ul>
            {props.user.hobbies.map((hobby, i) => {
                return <li key={i}>{hobby}</li>
            })}
        </ul>
        </div>
    )
};

export default Banner;