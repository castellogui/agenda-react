export default function FormContainer(props){
    return (
        <div className="min-w-[25%] w-auto min-h-[50%] h-auto bg-[#e4e4e4] rounded-xl m-auto opacity-80 text-center">
            {props.children}
        </div>
    )
}