export default function FormContainer(props) {
  return (
    <div className="relative min-w-[25%] w-auto 2xl:w-[25%] min-h-[50%] h-auto bg-[#e4e4e4] rounded-xl my-auto mx-10 md:m-auto py-4 opacity-80 text-center z-50">
      {props.children}
    </div>
  );
}
