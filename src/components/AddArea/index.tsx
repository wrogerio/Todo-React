import { KeyboardEvent, useState } from "react";
import * as C from "./styles";

type Props = {
    onEnter: (taskName: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
    const [inputText, setInputText] = useState("");

    const handleKeyUp = (e: KeyboardEvent) => {
        if ((e.key === "Enter" || e.key === "NumpadEnter") && inputText.length > 0) {
            onEnter(inputText);
            setInputText("");
        }
    };

    return (
        <C.Container>
            <div className="image">➕</div>
            <input type="text" placeholder="Adcionar tarefa" value={inputText} onChange={(e) => setInputText(e.target.value)} onKeyUp={handleKeyUp} />
        </C.Container>
    );
};
