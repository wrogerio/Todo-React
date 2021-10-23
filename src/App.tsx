import { useState } from "react";
import * as C from "./App.styles";
import { Item } from "./types/item";
import { ListItem } from "./components/ListItem";
import { AddArea } from "./components/AddArea";
import { dados } from "./data/data";

const App = () => {
    const [list, setList] = useState<Item[]>(dados);

    const handleAddTask = (taskName: string) => {
        setList([...list, { id: list.length + 1, name: taskName, done: false }]);
    };

    return (
        <C.Container>
            <C.Area>
                <C.Header>Lista de Tarefas</C.Header>

                <AddArea onEnter={handleAddTask} />

                {list.map((item, index) => (
                    <ListItem key={index} item={item} />
                ))}
            </C.Area>
        </C.Container>
    );
};

export default App;
