export default function Input(props) {
    return (
      <div className="p-[0.5rem] flex flex-col">
        <label>{props.label}</label>
        <input type='text' {...props} style={{width: `${props.size}%`}} className="bg-[#E9E7E7] focus:outline-none px-4 py-2"/>
      </div>
    );
  }