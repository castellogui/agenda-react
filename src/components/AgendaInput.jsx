export default function AgendaInput(props) {
  return (
    <div
      className={`p-[0.5rem] flex flex-col  ${props.margin}`}
      style={{ width: `${props.size}%` }}
    >
      <label className="text-left">{props.label}</label>
      <input
        type={`${props.type}`}
        {...props}
        className={`bg-white focus:outline-none px-4 py-2 rounded-lg ${props.customStyle}`}
      />
    </div>
  );
}
