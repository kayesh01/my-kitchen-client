import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <h2 className='text-2xl'><span className='text-3xl text-red-600 mb-4'>Question:</span> Difference between SQL and NoSQL is Given Below.</h2>
            <p><span className='text-2xl'>Answer: </span> SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <h2 className='text-2xl'><span className='text-3xl text-red-600 mb-4'>Question:</span> What is JWT, and how does it work?</h2>
            <p><span className='text-2xl'>Answer: </span>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. <br />Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains. <br />
                Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with. </p>
            <h2 className='text-2xl'><span className='text-3xl text-red-600 mb-4'>Question:</span> What is the difference between javascript and NodeJS?</h2>
            <p><span className='text-2xl'>Answer: </span>Javascript is a programming language that is used for writing scripts on the website. <br />
                NodeJS is a Javascript runtime environment. <br /> Javascript can only be run in the browsers. <br /> We can run Javascript outside the browser with the help of NodeJS. <br /> It is basically used on the client-side. <br /> It is mostly used on the server-side. <br /> Javascript is capable enough to add HTML and play with the DOM. <br /> Nodejs does not have capability to add HTML tags.
            </p>
            <h2 className='text-2xl'><span className='text-3xl text-red-600 mb-4'>Question:</span> How does NodeJS handle multiple requests at the same time?</h2>
            <p><span className='text-2xl'>Answer: </span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
        </div>
    );
};

export default Blog;