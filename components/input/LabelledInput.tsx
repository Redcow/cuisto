import { Input } from "components/input/Input.tsx";

type Props = 
{
    text: string,
    [attr:string]: any;
}

export function LabelledInput({text, ...attributes}: Props) {
    return (
    <label>
        {text}
        <Input {...attributes} />
    </label>);
}