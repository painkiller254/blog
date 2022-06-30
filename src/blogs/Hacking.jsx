import React from 'react'

    const Hacking = () => {
        return (
        <div>
            <div className='hack--main'> 
        	    <h1 id="hack" >Hacking 101</h1>
        
                <p> I hope you have as much fun reading this article as I did
                researching and writing it.
                Web Hacking 101 is my first blog, meant to help you get started hacking. I began
                writing this as a self-published explanation of 30 vulnerabilities, a by-product of my own
                learning.</p>
                <p> It quickly turned into so much more.
                My hope for the webpage, at the very least, is to open your eyes to the vast world of hacking.
                At best, I hope this will be your first step towards making the web a safer place while
                earning some money doing it.</p>
                <p>If you're starting out fresh like I was and this blog is among your first steps into the world
                of hacking, it's going to be important for you to understand how the internet works.</p>
                <p>
                Before you turn the page, what I mean is how the URL you type in the address bar is
                mapped to a domain, which is resolved to an IP address, etc.</p>
                <p>
                To frame it in a sentence: the internet is a bunch of systems that are connected and
                sending messages to each other.</p>
                <p> Some only accept certain types of messages, some only
                allow messages from a limited set of other systems, but every system on the internet
                receives an address so that people can send messages to it. It's then up to each system
                to determine what to do with the message and how it wants to respond.</p>
                <p>
                To define the structure of these messages, people have documented how some of these
                systems should communicate in Requests for Comments (RFC). As an example, take a
                look at HTTP.</p><p> HTTP defines the protocol of how your internet browser communicates
                with a web server. Because your internet browser and web server agreed to implement
                the same protocol, they are able to communicate.</p>
                <p>
                When you enter http://www.google.com in your browser's address bar and press return,
                the following steps describe what happens on a high level:</p>
                <p>
                • Your browser extracts the domain name from the URL, www.google.com.</p>
                <p>
                • Your computer sends a DNS request to your computer's configured DNS servers.
                DNS can help resolve a domain name to an IP address, in this case it resolves to</p>
                <p>
                216.58.201.228. Tip: you can use dig A www.google.com from your terminal to look
                up IP addresses for a domain.</p>
                <p>
                • Your computer tries to set up a TCP connection with the IP address on port 80,
                which is used for HTTP traffic. <br/>Tip: you can set up a TCP connection by running nc
                216.58.201.228 80 from your terminal.<br/>
                • If it succeeds, your browser will send an HTTP request like:<br/>
                GET / HTTP/1.1<br/>
                Host: www.google.com<br/>
                Connection: keep-alive<br/>
                Accept: application/html, */*<br/>
                • Now it will wait for a response from the server, which will look something like:<br/>
                Background 11<br/>
                HTTP/1.1 200 OK<br/>
                Content-Type: text/html<br/>
                {/* <.html><br/>
                <.head><br/>
                <.title>Google.com</.title><br/>
                </.head><br/>
                <.body><br/>
                ...<br/>
                </.body><br/>
                </.html><br/> */}
                </p>
                <p>Your browser will parse and render the returned HTML, CSS, and JavaScript.<br/> In this
                case, the home page of Google.com will be shown on your screen.<br/>
                Now, when dealing specifically with the browser, the internet and HTML, as mentioned
                previously, there is an agreement on how these messages will be sent, including the
                specific methods used and the requirement for a Host request-header for all HTTP/1.1
                requests, as noted above in bullet <br/>4. The methods defined include GET, HEAD, POST, PUT,
                DELETE, TRACE, CONNECT and OPTIONS.
                The GET method means to retrieve whatever information is identified by the request
                Uniform Request Identifier (URI).<br/> The term URI may be confusing, especially given the
                reference to a URL above, but essentially, for the purposes of this book, just know that
                a URL is like a person's address and is a type of URI which is like a person's name
                (thanks Wikipedia).<br/> While there are no HTTP police, typically GET requests should not be
                associated with any data altering functions, they should just retrieve and provide data.<br/>
                The HEAD method is identical to the GET message except the server must not return a
                message body in the response. <br/>Typically you won't often see this used but apparently it is
                often employed for testing hypertext links for validity, accessibility and recent changes.<br/>
                The POST method is used to invoke some function to be performed by the server, as
                determined by the server. In other words, typically there will be some type of back end
                action performed like creating a comment, registering a user, deleting an account, etc.<br/>
                The action performed by the server in response to the POST can vary and doesn't have
                to result in action being taken.<br/> For example, if an error occurs processing the request.<br/>
                The PUT method is used when invoking some function but referring to an already existing
                entity. For example, when updating your account, updating a blog post, etc. Again, the
                action performed can vary and may result in the server taking no action at all.<br/>
                The DELETE method is just as it sounds, it is used to invoke a request for the remote
                server to delete a resource identified by the URI.</p> 
                <p>The TRACE method is another uncommon method, this time used to reflect back the
                request message to the requester.<br/> This allows the requester to see what is being received
                by the server and to use that information for testing and diagnostic information.<br/>
                The CONNECT method is actually reserved for use with a proxy (a proxy is a basically a
                server which forwards requests to other servers)<br/>
                The OPTIONS method is used to request information from a server about the communication options available.<br/> For example, calling for OPTIONS may indicate that the server
                accepts GET, POST, PUT, DELETE and OPTIONS calls but not HEAD or TRACE.<br/>
                Now, armed with a basic understanding of how the internet works, we can dive into the
                different types of vulnerabilities that can be found in it.</p>
                
                <p>Copyright &copy 2022 Kamau Samuel </p>
    </div>
    </div>
  )
}

export default Hacking