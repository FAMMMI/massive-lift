import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='p-3 blog-container'>
            <div className='mb-2'>
                <h3 className='text-center'>1. Authorization vs Authentication</h3>
                <p><b>Answer:</b> Authentication prefers to the process of verifying who someone is, whereas Authorization is the process of verifying what specific applications, files, and data a user has access to. <br /> Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user whereas Authorization works through settings that are implemented and maintained by the organization. <br />
                    Authentication is visible to and partially changeable by the user but Authorization is not visible to or changeable by the user. </p>
            </div>
            <hr />
            <div>
                <h3 className='text-center'>2. Why are you using firebase? What are the options do you have to implement authentication ?</h3>
                <p><b>Answer:</b> Firebase manages all data real-time in the database. So, the exchange of data from the database is easy and quick. <br /> There are various authentication types: <br />
                    *STYTCH. <br />
                    *Ory. <br />
                    *Supabase. <br />
                    *Okta. <br />
                    *Keycloak.
                </p>
            </div>
            <hr />
            <div>
                <h3 className='text-center'>3. What other services does firebase provide other than authentication?</h3>
                <p><b>Answer:</b> Firebase provides <b>Cloud storage</b> as well as <b>cloud Firestore </b>. It also provide <b>Realtime Database</b> . It also supports its user with <b>Firebase Hosting</b> .  </p>
            </div>
        </div>
    );
};

export default Blog;