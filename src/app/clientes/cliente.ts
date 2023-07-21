export class Cliente {
    public id: number;
    public name: string;
    public lastname: string;
    public createAt: string;
    public email: string;

    constructor(id?: number, name?: string, lastname?: string, createAt?: string, email?: string) {
        this.id = id || 0; // Si id es null o undefined, asignamos 0 como valor predeterminado.
        this.name = name || '';
        this.lastname = lastname || '';
        this.createAt = createAt || '';
        this.email = email || '';
    }

    public getName(): string{
        return this.name;
    }
    public getLastname(): string{
        return this.lastname;
    }
    public getCreateAt(): string{
        return this.createAt;
    }
    public getEmail(): string{
        return this.email;
    }
    public getId(): number{
        return this.id;
    }
}
