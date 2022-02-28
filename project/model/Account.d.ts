import IModel from '../../core/interface/IModel';
export default class Account implements IModel {
    private accountId;
    private ownerId;
    private name;
    private email;
    private fullName;
    private companyName;
    private status;
    private createdAt;
    private updatedAt;
    static getAccountName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(accountName: string | null): string | null;
    getAccountId(): string | null;
    setAccountId(accountId: string | null): this;
    withAccountId(accountId: string | null): this;
    getOwnerId(): string | null;
    setOwnerId(ownerId: string | null): this;
    withOwnerId(ownerId: string | null): this;
    getName(): string | null;
    setName(name: string | null): this;
    withName(name: string | null): this;
    getEmail(): string | null;
    setEmail(email: string | null): this;
    withEmail(email: string | null): this;
    getFullName(): string | null;
    setFullName(fullName: string | null): this;
    withFullName(fullName: string | null): this;
    getCompanyName(): string | null;
    setCompanyName(companyName: string | null): this;
    withCompanyName(companyName: string | null): this;
    getStatus(): string | null;
    setStatus(status: string | null): this;
    withStatus(status: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getUpdatedAt(): number | null;
    setUpdatedAt(updatedAt: number | null): this;
    withUpdatedAt(updatedAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Account | null;
    toDict(): {
        [key: string]: any;
    };
}
