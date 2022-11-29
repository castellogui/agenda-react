
import Button from "../components/Button";
import Input from "../components/Input";

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
          <form action='#' className="m-auto">
            <Input label={`Usuário`} size={`100`} placeholder="Insira seu usuário"></Input>
            <Input label={`Senha`} size={`100`} type="password" placeholder="Insira sua senha"></Input>
            <Button title={'Entrar'} type="submit"></Button>
          </form>
        </div>
      </div>
    </section>
  );
}