export default class Email {
    private readonly value: string;

    constructor(value: string){
        this.value = value;
    }

    private isValidEmail(value: string): boolean {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    /**
     * This method will validate if the email has the valid pattern
     * and if it has will return the email value. In case that is not
     * a valid email, this will return null.
     * @returns An email value as string if it is valid or null instead.
     */
    get _value(): string | null {
        return this.isValidEmail(this.value) ? this.value : null;
    }

}