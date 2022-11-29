import "./InputLabelAnimated/InputLabelAnimated.css"

export default function InputLabelAnimated(props) {
    return (
      <div className="p-[0.5rem] my-5 flex flex-col relative">
        <input id="input" type='text' {...props} style={{width: `${props.size}%`}} className="bg-[#E9E7E7] focus:outline-none px-4 py-2" placeholder=" "/>
        <label id="label">{props.label}</label>
      </div>
    );
  }