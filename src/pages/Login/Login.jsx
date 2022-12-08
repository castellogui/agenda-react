import FormContainer from "./components/FormContainer";
import Waves from "./components/Waves";
import styles from "./style.css";
import AgendaInput from "../../components/AgendaInput";
import AgendaButton from "../../components/AgendaButton";
import GoogleButton from "./components/GoogleButton";
import SectionBreak from "./components/SectionBreak";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { updateName } from "../../store/actions/user";
import { showMessage } from "../../mixins/MessagesMixin";

function Login() {
  const navigate = useNavigate();
  const divGoogleButtonRender = useRef();
  const actualUser = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  };

  const handleToken = () => {};

  window.handleGoogleToken = (response, error) => {
    try {
      if (error == undefined) {
        //token verify
        console.log(response);
      } else {
        showMessage(
          "error",
          undefined,
          "There was an error!",
          `Google API returned an error. Error: ${error.message}`,
          undefined,
          undefined,
          "Okay"
        );
      }
    } catch (error) {
      showMessage(
        "error",
        undefined,
        "There was an error!",
        `We have an error while trying to verify Google Token in our API. Error: ${error.message}`,
        undefined,
        undefined,
        "Okay"
      );
    }
  };

  useEffect(() => {
    if (window.google != undefined) {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: (response, error) => handleGoogleToken(response, error),
      });

      window.google.accounts.id.renderButton(divGoogleButtonRender.current, {
        theme: "outline",
        size: "large",
        type: "standard",
        text: "sign_in_with",
        shape: "rectangular",
      });
    }
  });

  return (
    <section className="w-full h-screen flex flex-row bg-gradient-to-t from-[#461999] to-[#020024] relative">
      <FormContainer>
        <div className="my-2">
          <span className="block text-3xl font-bold text-[#020024]">Agenda</span>
          <span className="block text-4xl font-light text-[#020024]">Welcome!</span>
        </div>
        <GoogleButton refDiv={divGoogleButtonRender}></GoogleButton>
        <SectionBreak text="OR LOGIN WITH EMAIL"></SectionBreak>
        <form onSubmit={(e) => signIn(e)}>
          <AgendaInput
            label="Email"
            type={`text`}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            size="93"
            margin={`m-auto`}
          ></AgendaInput>
          <AgendaInput
            label="Password"
            type={`password`}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            size="93"
            margin={`m-auto`}
          ></AgendaInput>
          <AgendaButton
            title={`Sign In`}
            type={"submit"}
            customstyle={`rounded-lg py-2 w-[93%]`}
          ></AgendaButton>
        </form>
        <span className="block text-lg font-light my-2 text-[#020024]">Forget Password?</span>
        <SectionBreak
          action={true}
          actionFunction={() => {
            navigate("/signup");
          }}
          text="OR SIGN UP"
        ></SectionBreak>
      </FormContainer>
      <Waves />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    userName: state.user.name,
  };
};

export default connect(mapStateToProps)(Login);
