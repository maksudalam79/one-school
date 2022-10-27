import React from 'react';

const Question = () => {
    return (
        <div>
            <div className=" w-full m-auto border p-10 max-w-xs">
        <p>
          <span className="label-text text-4xl">what is cors?</span>
          </p>
        <p className="w-full max-w-xs">
        CORS is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.</p> 
        </div>
            <div className="w-full m-auto max-w-xs border m-2 p-10">
        <p>
          <span className="label-text text-4xl">Why are you using firebase?</span>
          </p>
        <p className="w-full max-w-xs">
        Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. Release Apps Confidently. Customize Your App. Monitor App Performance.</p> 
        </div>
            <div className="w-full m-auto max-w-xs border m-2 p-10">
        <p>
          <span className="label-text text-4xl">What other options do you have to implement authentication?</span>
          </p>
        <p className="w-full max-w-xs">
        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p> 
        </div>
            <div className=" w-full m-auto max-w-xs border m-2 p-10">
        <p>
          <span className="text-4xl">How does the private route work?</span>
          </p>
        <p className="w-full max-w-xs">
        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p> 
        </div>
            <div className=" w-full m-auto max-w-xs border m-2 p-10">
        <p>
          <span className="text-4xl">What is Node?</span>
          </p>
        <p className="w-full max-w-xs">
        A node is a basic unit of a data structure, such as a linked list or tree data structure.</p> 
        </div>
            <div className=" w-full m-auto max-w-xs border m-2 p-10">
        <p>
          <span className=" text-4xl">How does Node work?</span>
          </p>
        <p className="w-full max-w-xs">
        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p> 
        </div>
        </div>
    );
};

export default Question;