
import Button from "../components/Button";
import Input from "../components/Input";
import InputLabelAnimated from "../components/InputLabelAnimated";

export default function Login() {
  return (
    <section className="w-full h-screen flex flex-row">
      <div className="w-[40%] h-full bg-[#6327C8] flex-col hidden md:flex">
        <div className="w-[45%] text-center m-auto">
          <img src="./src/assets/logo.png" alt="logo" className=" px-14 my-8" />
          <span className="text-white font-[MorgantRegular] text-sm">AGENDA</span>
        </div>
      </div>
      <div className="w-full md:w-[60%] h-full bg-[#fff]">
        <div className="w-[60%] h-full m-auto flex">
          <div className="w-[80%] m-auto flex flex-col">
            <img src="./src/assets/logo-roxo.png" alt="logo" className="w-[50%] mx-auto  md:hidden" />
            <span className="text-[#6327C8] font-[MorgantRegular] text-sm text-center mb-2  md:hidden">AGENDA</span>
            <form className="m-auto">
              {/* <Input for="user" label={`Usuário`} size={`100`} placeholder="Insira seu usuário"></Input>
              <Input for="password" label={`Senha`} size={`100`} type="password" placeholder="Insira sua senha"></Input> */}
              <InputLabelAnimated label="Usuário"></InputLabelAnimated>
              <InputLabelAnimated label="Senha"></InputLabelAnimated>
              <Button title={'Entrar'} type="submit"></Button>
            </form>  
          </div>
        </div>
      </div>
    </section>
  );
}