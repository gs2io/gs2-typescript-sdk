import IModel from '../../core/interface/IModel';
export default class AccountNamespaceStatistics implements IModel {
    private signup;
    private authentication;
    private registeredTakeOver;
    private removeTakeOver;
    private executeTakeOver;
    getSignup(): number | null;
    setSignup(signup: number | null): this;
    withSignup(signup: number | null): this;
    getAuthentication(): number | null;
    setAuthentication(authentication: number | null): this;
    withAuthentication(authentication: number | null): this;
    getRegisteredTakeOver(): number | null;
    setRegisteredTakeOver(registeredTakeOver: number | null): this;
    withRegisteredTakeOver(registeredTakeOver: number | null): this;
    getRemoveTakeOver(): number | null;
    setRemoveTakeOver(removeTakeOver: number | null): this;
    withRemoveTakeOver(removeTakeOver: number | null): this;
    getExecuteTakeOver(): number | null;
    setExecuteTakeOver(executeTakeOver: number | null): this;
    withExecuteTakeOver(executeTakeOver: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AccountNamespaceStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
