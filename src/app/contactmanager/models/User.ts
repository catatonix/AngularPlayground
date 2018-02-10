import Note from './Note';

export default class User{
    id: number;
    birthDate: Date;
    name: string;
    avater: string;
    bio: string;
    notes: Note[];
}