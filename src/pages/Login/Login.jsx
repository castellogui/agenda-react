import FormContainer from "./FormContainer";
import Waves from "./Waves";
import styles from "./style.css";

export default function Login() {
  return (
    <section className="w-full h-screen flex flex-row bg-gradient-to-t from-[#461999] to-[#020024] relative">
      <FormContainer>
        <span className="block text-7xl my-4">Agenda</span>
        <span className="block text-5xl my-4">Welcome!</span>
        <div
          id="g_id_onload"
          data-client_id="536069308677-hqgadfh70ninofit6nee4iisbt59sta9.apps.googleusercontent.com"
          data-login_uri="https://your.domain/your_login_endpoint"
          data-auto_prompt="false"
        ></div>
        <div
          class="g_id_signin"
          data-type="standard"
          data-size="large"
          data-theme="outline"
          data-text="sign_in_with"
          data-shape="rectangular"
          data-logo_alignment="left"
        ></div>
        <div className="barrier-container">
          <div className="barrier">
            <span>OR LOGIN WITH EMAIL</span>
          </div>
        </div>
      </FormContainer>
      <Waves />
    </section>
  );
}
