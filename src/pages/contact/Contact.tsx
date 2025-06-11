import { useForm, ValidationError } from "@formspree/react";
import CommandLine from "../../components/comandLine/CommandLine";
import "./contact.css";
import Button from "../../components/button/Button";

//TODO: improve CommandLine styles 
//TODO: add form validation

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvyaron");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <CommandLine className="contact-command-line">
      <h2>Feel free to connect with me 🙋‍♂️</h2>

      <form onSubmit={handleSubmit}>
        <div className="esential-info">
          {/* <!-- Name --> */}
          <div className="form-name">
            <label className="fs-label" htmlFor="name">
              Name:
            </label>
            <input className="fs-input" id="name" name="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* <!-- Phone Number --> */}
          <div className="form-phone">
            <label className="fs-label" htmlFor="number">
              Phone Number:
            </label>
            <input className="fs-input" id="number" name="number" required />
            <ValidationError
              prefix="Number"
              field="number"
              errors={state.errors}
            />
          </div>
        </div>

        {/* <!-- Email --> */}
        <label htmlFor="email">Email Address:</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* <!-- Message --> */}
        <label htmlFor="email">Message:</label>
        <textarea id="message" name="message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <Button disabled={state.submitting}>
          Submit
        </Button>
      </form>
    </CommandLine>
  );
}

export default Contact;
