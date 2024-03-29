<h1>POS System with React and Node</h1>

<p>POS system is a simple point of sales mini project which allows logged in users to view order list, view all currently open orders, view order details of a particular order, add new items and update item count of an existing order.</p>

<p>This version of POS system is built with React and Node.js</p>

<p>You can test the POS system in your browser using either of follwing options.</p>
	<ul>
		<li>Using the hosted version</li>
		<li>By running the application node server and client locally.</li>
	</ul>

<h2> Hosted Version </h2>

<p> Click <a href="http://104.196.203.107:3000">here</a> to run the hosted POS system.

<h2> Running node server and client locally</h2>

<h3> Running node server</h3>
<ol>
<li>Make sure you have an uptodate version of node.js installed on your system. If you do not have node.js in your system you can download it <a href="https://nodejs.org/en/">here</a></li>

<li> Clone this repositary to your machine.</li>

<li> On the command line navigate to the directory <b>server</b></li>

        cd server

<li>Install server dependencies by running following command.</li>
         
        npm install


<li> Start the server</li>
        
        npm start

</ol>

<h3> Running react client locally</h3>
<ol>
<li>On the teriminal navigate to the directory <b>client</b></li>

        cd client

<li>Install the client dependencies.</li>

        npm install


<li>Start the client</li>
        
        npm start

</ol>
<li> Open a browser and access: <a href="http://localhost:3000">http://localhost:3000 </a></li>

<h4>Test user login</h4>
<p>email : john.smith@gmail.com</p>
<p>password : 123</p>

<h2> Running the tests </h2>

<h3> Testing react client with  <a href="https://jestjs.io/">Jest</a> </h3>
<ol>
<li>
Navigate to the client directory and run following code
</li>

        cd client
        npm test
</ol>


<h3> Testing node server with <a href="https://www.npmjs.com/package/supertest">Supertest</a> </h3>
<ol>
<li>
Navigate to the server directory and run following code
</li>

        cd server
        npm test
</ol>


 	
	






 
