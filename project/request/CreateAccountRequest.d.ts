import IRequest from '../../core/interface/IRequest';
export default class CreateAccountRequest implements IRequest {
    private requestId;
    private contextStack;
    private email;
    private fullName;
    private companyName;
    private password;
    private lang;
    getRequestId(): string | null;
    setRequestId(requestId: string | null): this;
    withRequestId(requestId: string | null): this;
    getContextStack(): string | null;
    setContextStack(contextStack: string | null): this;
    withContextStack(contextStack: string | null): this;
    getEmail(): string | null;
    setEmail(email: string | null): this;
    withEmail(email: string | null): this;
    getFullName(): string | null;
    setFullName(fullName: string | null): this;
    withFullName(fullName: string | null): this;
    getCompanyName(): string | null;
    setCompanyName(companyName: string | null): this;
    withCompanyName(companyName: string | null): this;
    getPassword(): string | null;
    setPassword(password: string | null): this;
    withPassword(password: string | null): this;
    getLang(): string | null;
    setLang(lang: string | null): this;
    withLang(lang: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateAccountRequest;
    toDict(): {
        [key: string]: any;
    };
}
