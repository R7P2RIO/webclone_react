import "./contact-form.css";

export const ContactForm = () => {
  return (
    <div className="main-container form-container">
      <div className="form-left">
        <div className="form-picture"></div>
        <div className="form-location">
          <div className="location">
            <span className="city">Sydney</span>
            <span className="address">48 Pirra Rd.</span>
            <span className="postal">Pyrmont NSW 2009</span>
          </div>

          <div className="location">
            <span className="city">Melbourne</span>
            <span className="address">161 Collins st.</span>
            <span className="postal">Melbourne VIC 3000</span>
          </div>

          <div className="location">
            <span className="city">Los Angeles</span>
            <span className="address">340 Main St, Venice</span>
            <span className="postal">VER 2000</span>
          </div>
        </div>
      </div>

      <div className="form form-right">
        <form className="form-flex">
          <div>
            <p className="form-title">Contact us</p>
          </div>
          <div>
            <p className="form-text">
              Have an inquiry or some feedback for us ?
            </p>
            <p className="form-text">
              Fill out the form below to contact our team
            </p>
          </div>

          <div className="name-lastname">
            <div className="container-input">
              <label htmlFor="name">Name</label>
              <input type="text" />
            </div>

            <div className="container-input">
              <label htmlFor="Last name">First name</label>
              <input type="text" />
            </div>
          </div>

          <div className="container-input">
            <label htmlFor="Email">Email</label>
            <input type="text" />
          </div>

          <div className="container-input" style={{ marginBottom: "1em" }}>
            <label htmlFor="Message">Message</label>
            <textarea type="text" className="input_textarea" />
          </div>

          <div className="container-btn">
            <button className="btn">send</button>
          </div>
        </form>
      </div>
    </div>
  );
};
