import { useForm, ValidationError } from "@formspree/react";
import CommandLine from "../../components/comandLine/CommandLine";
import "./contact.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvyaron");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <CommandLine className="contact-command-line">
      <h2>Feel free to connect with me 🙋‍♂️</h2>
      <form onSubmit={handleSubmit}>
        <label className="fs-label" htmlFor="name">
          Name:
        </label>
        <input className="fs-input" id="name" name="name" required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <label htmlFor="email">Email Address:</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label className="fs-label" htmlFor="number">
          Phone Number:
        </label>
        <input className="fs-input" id="number" name="number" required />
        <ValidationError prefix="Number" field="number" errors={state.errors} />
        <label htmlFor="email">Message:</label>
        <textarea id="message" name="message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </CommandLine>
  );
}

export default Contact;
