export default function contact() {
      return (
             <div>
   <li className="home"><a href="Home.html">Home</a></li>

<div className="container">
  <div style="text-align:center">
    <h2>Contact Us</h2>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div className="row">
    <div className="column">
      <a href="https://maps.app.goo.gl/aLxSNuwoifCMroyZ8" style="width:100%"> Location On Map</a>

      

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
        
</div>
</div>

        <p>Address:</p>
        <br/>
        <p>3521, 8th Street East,</p>
        <p>Saskatoon, SK S7H 0W5</p>
        <i className="glyphicon glyphicon-Address"></i>
        <br/>

        <p>Phone</p>
        <a href="" style="width:100%"> 3062926392</a><br/>
        <i className="glyphicon glyphicon-cloud" style="font-size:24px;"></i><br/>
        <p>Email</p>
        <a href="" style="width:100%"> bgpandya1@gmail.com</a><br/>
        <p>Follow Us</p><br/>
        <i className="glyphicon glyphicon-facebook" style="font-size:24px;"></i>
        <i className="glyphicon glyphicon-instagram" style="font-size:24px;"></i>


    </div>

    <div className="column">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:170px"></textarea>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  </div>

      )
    }