import IModel from '../../core/interface/IModel';
export default class IssuedCodeSetting implements IModel {
    private expiresDays;
    private maxFailedAttempts;
    private deleteOnUse;
    getExpiresDays(): number | null;
    setExpiresDays(expiresDays: number | null): this;
    withExpiresDays(expiresDays: number | null): this;
    getMaxFailedAttempts(): number | null;
    setMaxFailedAttempts(maxFailedAttempts: number | null): this;
    withMaxFailedAttempts(maxFailedAttempts: number | null): this;
    getDeleteOnUse(): boolean | null;
    setDeleteOnUse(deleteOnUse: boolean | null): this;
    withDeleteOnUse(deleteOnUse: boolean | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IssuedCodeSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
