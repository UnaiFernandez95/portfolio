import { useForm, ValidationError } from "@formspree/react";
import Button from "../../components/atoms/button/Button";
import CommandLineInputNav from "../../components/molecules/commandLineInputNav/CommandLineInputNav";
import Input from "../../components/atoms/input/Input";

import "./contact.css";

//TODO: improve CommandLine styles 
//TODO: add form validation

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvyaron");
  if (state.succeeded) {
    return (
      <>
        <h2>Feel free to connect with me 🙋‍♂️</h2>
        <p>Thanks for contacting me!</p>
        <CommandLineInputNav />
      </>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Feel free to connect with me 🙋‍♂️</h2>

      <div className="contact-form-fields">
          <Input id="name" name="name" label="Name:" maxLength={50} required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <Input
            id="number"
            name="number"
            label="Phone Number:"
            maxLength={13}
          />
          <ValidationError
            prefix="Number"
            field="number"
            errors={state.errors}
          />
      </div>

      <Input
        id="email"
        type="email"
        name="email"
        label="Email address: "
        maxLength={50}
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="email">Message:</label>
      <textarea id="message" name="message" required />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button disabled={state.submitting}>Submit</Button>

      <CommandLineInputNav />
    </form>
  );
}

export default Contact;
