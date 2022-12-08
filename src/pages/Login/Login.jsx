import FormContainer from "./FormContainer";
import Waves from "./Waves";
import styles from "./style.css";
import AgendaInput from "../../components/AgendaInput";
import Button from "../../components/AgendaButton";

export default function Login() {
  return (
    <section className="w-full h-screen flex flex-row bg-gradient-to-t from-[#461999] to-[#020024] relative">
      <FormContainer>
        <div className="my-2">
          <span className="block text-3xl font-bold text-[#020024]">Agenda</span>
          <span className="block text-4xl font-light text-[#020024]">Welcome!</span>
        </div>
        <div className="w-full h-10 flex justify-center my-5">
          <div
            id="g_id_onload"
            data-client_id={import.meta.env.VITE_GOOGLE_CLIENT_ID}
            data-login_uri="https://your.domain/your_login_endpoint"
            data-auto_prompt="false"
          ></div>
          <div
            className="g_id_signin"
            data-type="standard"
            data-size="large"
            data-theme="outline"
            data-text="sign_in_with"
            data-shape="rectangular"
            data-logo_alignment="left"
          ></div>
        </div>
        <div className="barrier-container">
          <div className="barrier">
            <span>OR LOGIN WITH EMAIL</span>
          </div>
        </div>
        <form>
          <AgendaInput label="Email" type={`text`} size="93" margin={`m-auto`}></AgendaInput>
          <AgendaInput label="Password" type={`password`} size="93" margin={`m-auto`}></AgendaInput>
          <Button title={`Sign In`} customStyle={`rounded-lg py-2 w-[93%]`}></Button>
        </form>
        <span className="block text-lg font-light my-2 text-[#020024]">Forget Password?</span>
        <div className="barrier-container">
          <div className="barrier">
            <span>OR SIGN UP</span>
          </div>
        </div>
      </FormContainer>
      <Waves />
    </section>
  );
}
