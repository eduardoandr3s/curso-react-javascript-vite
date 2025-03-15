type ButtonProps = {
    onclick: () => void;
    label: string;
}

const Button = ({onclick,label}: ButtonProps) => {
return(
    <button onClick={onclick}>{label}</button>
)
}

export default Button;
