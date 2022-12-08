export default function SectionBreak(props) {
  return (
    <div className="barrier-container">
      <div className="barrier">
        {props.action ? (
          <span onClick={props.actionFunction} style={{ cursor: "pointer" }}>
            {props.text}
          </span>
        ) : (
          <span>{props.text}</span>
        )}
      </div>
    </div>
  );
}
