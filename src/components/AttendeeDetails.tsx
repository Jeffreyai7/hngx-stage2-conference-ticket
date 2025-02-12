
const AttendeeDetails = () => {
  return (
    <section>
     <div>
        <div>
          <h1>Attendee Details</h1>
          <span>step 2/3</span>
          </div>
          <div className="progressbar"></div>
     </div>
     <div>
        <div>
            <span>Upload Profile Photo</span>
            <div>Image upload</div>
        </div>
        <div className="division"></div>
        <div>
            <div>
                <label htmlFor="name">Enter your name</label>
                <input type="text" name="fullName"  id="name"/>
            </div>
            <div>
                <label htmlFor="email">Enter your email</label>
                <div><input type="email" name="email" id="email"/></div>
            </div>
            <div>
                <label htmlFor="textarea">Special request?</label>
                <textarea name="textarea" id="textarea" placeholder="Textarea"></textarea>
            </div>
            <div>
                <button>Back</button>
                <button>Get My Free Ticket</button>
            </div>
        </div>
     </div>




    </section>
  )
}

export default AttendeeDetails