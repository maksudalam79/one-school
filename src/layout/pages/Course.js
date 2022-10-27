import React from 'react';
import Leftside from './Leftside';
import Question from './Question';
import Rightside from './Rightside';


const Course = () => {
    return (
        <div>
            <div className="grid grid-cols-2 m-4 ">
                <div>
                    <Rightside></Rightside>
                </div>
                <div>
                <Leftside></Leftside>
                </div>
            </div>
        </div>
    );
};

export default Course;