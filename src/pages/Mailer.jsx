import cat1 from "../img/1.png";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7qwiy8o",
        "template_3roqbda",
        e.target,
        "oEC9ufR81wLWvqIgB"
      )
      .then((res) => {
        toast.success("the cat is on the way to your crush");
        console.log(res);
      })
      .catch((err) => {
        toast.error("The cat is tired or you have wrong email");
        console.log(err);
      });
  }
  return (
    <>
      <div className="mailer-main">
        <div className="mailer-container">
          <h1>
            Hi Stranger, I'm CatMirer at your sevice! <br /> just fill up the
            form and I'll send it to your crush.
          </h1>
          <img src={cat1} alt="" />
          <form onSubmit={sendEmail}>
            <label>name of your crush: </label>
            <input type="text" name="name" className="form-control" />
            <label>Email of your crush: </label>
            <input type="email" name="user_email" className="form-control" />
            <label>Message to your crush: </label>
            <textarea name="message" rows="4" className="form-control" />
            <input
              type="submit"
              value="Send"
              className="form-control btn btn-primary"
              style={{ marginTop: "30px" }}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Mailer;
