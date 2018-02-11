import Note from './Note';

export default class User{
    id: number;
    birthDate: Date;
    name: string;
    avatar: string;
    bio: string;
    notes: Note[];
}