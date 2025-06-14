import { useForm, ValidationError } from "@formspree/react";
import CommandLine from "../../components/organisms/comandLine/CommandLine";
import Button from "../../components/atoms/button/Button";
import CommandLineInputNav from "../../components/molecules/commandLineInputNav/CommandLineInputNav";
import "./contact.css";
import Input from "../../components/atoms/input/Input";

//TODO: improve CommandLine styles 
//TODO: add form validation

const Contact = () => {
  const [state, handleSubmit] = useForm("mgvyaron");
  if (state.succeeded) {
    return (
      <CommandLine className="contact-command-line">
        <h2>Feel free to connect with me 🙋‍♂️</h2>
        <p>Thanks for contacting me!</p>
        <CommandLineInputNav />
      </CommandLine>
    );
  }
  return (
    <CommandLine className="contact-command-line">
      <h2>Feel free to connect with me 🙋‍♂️</h2>

      <form onSubmit={handleSubmit} className="contact-command-line-form">
        <div className="esential-info">
          {/* <!-- Name --> */}
          <div className="form-name">
            <Input id="name" name="name" label="Name:"  maxLength={50} required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* <!-- Phone Number --> */}
          <div className="form-phone">
            <Input id="number" name="number" label="Phone Number:"  maxLength={13} />
            <ValidationError
              prefix="Number"
              field="number"
              errors={state.errors}
            />
          </div>
        </div>

        {/* <!-- Email --> */}
        <Input id="email" type="email" name="email" label="Email address: " maxLength={50} required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        {/* <!-- Message --> */}
        <label htmlFor="email">Message:</label>
        <textarea id="message" name="message" required />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <Button disabled={state.submitting}>Submit</Button>
      </form>
      <CommandLineInputNav />
    </CommandLine>
  );
}

export default Contact;
