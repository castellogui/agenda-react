import FormContainer from "./components/FormContainer";
import Waves from "./components/Waves";
import styles from "./style.css";
import AgendaInput from "../../components/AgendaInput";
import AgendaButton from "../../components/AgendaButton";
import GoogleButton from "./components/GoogleButton";
import SectionBreak from "./components/SectionBreak";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <section className="w-full h-screen flex flex-row bg-gradient-to-t from-[#461999] to-[#020024] relative">
      <FormContainer>
        <div className="my-2">
          <span className="block text-3xl font-bold text-[#020024]">Agenda</span>
          <span className="block text-4xl font-light text-[#020024]">Welcome!</span>
        </div>
        <GoogleButton></GoogleButton>
        <SectionBreak text="OR LOGIN WITH EMAIL"></SectionBreak>
        <form>
          <AgendaInput label="Email" type={`text`} size="93" margin={`m-auto`}></AgendaInput>
          <AgendaInput label="Password" type={`password`} size="93" margin={`m-auto`}></AgendaInput>
          <AgendaButton title={`Sign In`} customstyle={`rounded-lg py-2 w-[93%]`}></AgendaButton>
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
