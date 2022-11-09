interface ButtonProps {
  title: String;
}

export default function Button(props: ButtonProps) {
  return (
    <div className="p-[0.5rem]">
      <button
        type="button"
        className="bg-[#6327C8] text-white py-1 px-2 transition-all hover:bg-[#352575]"
      >
        {props.title}
      </button>
    </div>
  );
}
