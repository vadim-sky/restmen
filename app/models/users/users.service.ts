
module users {
    import Person = users.Person;

    export function find (person: Person): User  {
        return new User(person);
    }
}
