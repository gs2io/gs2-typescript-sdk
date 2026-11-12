import IModel from '../../core/interface/IModel';
export default class AccountDeletionSetting implements IModel {
    private gracePeriodMinutes;
    private loginDuringGracePeriod;
    private cleanUserDataScope;
    getGracePeriodMinutes(): number | null;
    setGracePeriodMinutes(gracePeriodMinutes: number | null): this;
    withGracePeriodMinutes(gracePeriodMinutes: number | null): this;
    getLoginDuringGracePeriod(): string | null;
    setLoginDuringGracePeriod(loginDuringGracePeriod: string | null): this;
    withLoginDuringGracePeriod(loginDuringGracePeriod: string | null): this;
    getCleanUserDataScope(): string | null;
    setCleanUserDataScope(cleanUserDataScope: string | null): this;
    withCleanUserDataScope(cleanUserDataScope: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AccountDeletionSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
