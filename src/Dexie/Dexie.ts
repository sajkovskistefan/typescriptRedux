import Dexie from 'dexie';

interface OneToDo {
    id?: number,
    name: string
};

class ToDoDatabase extends Dexie {

    to_dos: Dexie.Table<OneToDo, number>

    constructor() {
        super("ToDoDatabase");
        this.version(1).stores({
            to_dos: "++id, name"
        })
        this.to_dos = this.table("to_dos")
    };
};

export var db = new ToDoDatabase();