import bcrypt from "bcrypt";

export default class Msctpsd {
    private crdntl: string = "";

    constructor(msctpsd: string){
        (async()=>{this.crdntl = await this.hashingMsctpsd(msctpsd);})();
    }

    get _sctpsd(){
        return this.crdntl;
    }

    private hashingMsctpsd(msctpsd: string){
        return bcrypt.hash(msctpsd, 12);
    }

    async compareCredentials(input: string): Promise<boolean>{
        return await bcrypt.compare(input, this.crdntl);
    }
}