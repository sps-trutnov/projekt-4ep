export class User {
    constructor(
        public readonly id: number, 
        public readonly userName: string, 
        public readonly email: string,
        public readonly isLibrarian: boolean,
        public readonly isAdministrator: boolean
    ) { }
}