import Button from "../components/Button";

export default function Login() {
  return (
    <section className="w-full h-screen flex flex-row">
      <div className="w-[40%] h-full bg-[#6327C8] flex flex-col">
        <div className="w-[45%] text-center m-auto">
          <img src="./src/assets/logo.png" alt="logo" className=" px-14 my-8" />
          <span className="text-white font-[MorgantRegular] text-sm">AGENDA</span>
        </div>
      </div>
      <div className="w-[60%] h-full bg-[#fff]">
        <Button title={'Entrar'}></Button>
      </div>
    </section>
  );
}
