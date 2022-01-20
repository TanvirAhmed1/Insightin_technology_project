import { Bookmark } from "./bookmark";
import { RegularNote } from "./regularnote";
import { Reminder } from "./reminder";
import { ToDo } from "./todo";

export interface Member {
    id: string;
    username: string;
    email: string;
    regularnotes: RegularNote[];
    bookmarks: Bookmark[];
    todos: ToDo[];
    reminders: Reminder[];
}

