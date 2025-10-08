import IModel from '../../core/interface/IModel';
export default class TwoFactorAuthenticationSetting implements IModel {
    private status;
    getStatus(): string | null;
    setStatus(status: string | null): this;
    withStatus(status: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): TwoFactorAuthenticationSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
