export default function Button(props) {
    return (
      <div className="p-[0.5rem]">
        <button
          type="button"
          {...props}
          className="bg-[#6327C8] text-white py-1 px-2 transition-all hover:bg-[#352575] rounded-md"
        >
          {props.title}
        </button>
      </div>
    );
  }