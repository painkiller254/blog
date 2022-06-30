import React from 'react'

const Home = () => {
  return (
    <div>
        <h1>Chameleon</h1>
	    <div className='main'>
	        <p>Hi, my name is Kamau (a male name in my country) and on the internet I'm known as Chameleon. I like computers, music, birds, <a href="#">books</a>, <a href="#">physics</a>, photography and art. I acquired formal education in KCA University so if you want to <u><a href="#">Hire me</a></u> you can rest assured you are dealing with a professional. I have taught myself most of skills individually and whatever I don't know I do some research and use it in <a href="#">my projects</a> ... <strong>I ❤️ open source.</strong></p>


	        <button className='d--button'>Become a patron</button>

    
	        <p>Find me on &nbsp;
	        	<a href="https://github.com/painkiller254"><i class="fa fa-github-square" aria-hidden="true"></i></a>, &nbsp;
	        	<a href="https://twitter.com/Samueli67276769"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>, &nbsp;
	        	<a href="https://www.linkedin.com/in/samuel-kamau-58244922a/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>, 
	        	 and &nbsp;
                 <a href=""><i class="fa fa-google" aria-hidden="true"></i></a></p>

	        <h2>Blog</h2>
	        <p>2022-3-24  <a href="hacking101.html">Hacking-101</a></p>
	        <p>2022-3-27  <a href="hood radio">HOOD RADIO</a></p>
	        <p>2022-3-24  <a href="april14.html">April 14</a></p>
	        <p>2022-3-24  lorem ipsum</p>
	        <p>2022-3-24  lorem ipsum</p>
	        etc

	        <h2>Projects</h2>
	        <p><a href="https://github.com/painkiller254/Machine-learning.git">Fake news detector</a> : A machine learning project to identify fake newson social media sites.</p>
	        <p><a href="https://github.com/painkiller254/Twitter-bot.git">Twitter Bot</a> : A twitter bot using python that like and retweets posts.</p>
	        <p><a href="https://github.com/painkiller254/leads-tracker.git">Leads Tracker</a> : A chrome extension for saving web links.</p>
	        <p><a href='https://github.com/painkiller254/Airbnb.git'>Air-BnB</a> : An air-bnb clone using react. So cool.</p>
	        <p><a href="#">More....</a></p>


            <div className='footer'>
                <p>Copyright © 2022 Kamau Samuel</p>
            </div>
	</div>
    </div>
  )
}

export default Home