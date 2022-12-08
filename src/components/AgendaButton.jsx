export default function AgendaButton(props) {
  return (
    <div className="p-[0.5rem]">
      <button
        type="button"
        {...props}
        className={`bg-[#020024] text-white py-1 px-2 transition-all hover:bg-[#352575] ${props.customStyle}`}
      >
        {props.title}
      </button>
    </div>
  );
}
