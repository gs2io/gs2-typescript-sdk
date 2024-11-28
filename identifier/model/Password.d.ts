import IModel from '../../core/interface/IModel';
import * as Gs2Identifier from '../../identifier/model';
export default class Password implements IModel {
    private passwordId;
    private userId;
    private userName;
    private enableTwoFactorAuthentication;
    private twoFactorAuthenticationSetting;
    private createdAt;
    private revision;
    static getOwnerId(grn: string): string | null;
    static getUserName(grn: string): string | null;
    static isValid(grn: string): boolean;
    static createGrn(ownerId: string | null, userName: string | null): string | null;
    getPasswordId(): string | null;
    setPasswordId(passwordId: string | null): this;
    withPasswordId(passwordId: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getUserName(): string | null;
    setUserName(userName: string | null): this;
    withUserName(userName: string | null): this;
    getEnableTwoFactorAuthentication(): string | null;
    setEnableTwoFactorAuthentication(enableTwoFactorAuthentication: string | null): this;
    withEnableTwoFactorAuthentication(enableTwoFactorAuthentication: string | null): this;
    getTwoFactorAuthenticationSetting(): Gs2Identifier.TwoFactorAuthenticationSetting | null;
    setTwoFactorAuthenticationSetting(twoFactorAuthenticationSetting: Gs2Identifier.TwoFactorAuthenticationSetting | null): this;
    withTwoFactorAuthenticationSetting(twoFactorAuthenticationSetting: Gs2Identifier.TwoFactorAuthenticationSetting | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    getRevision(): number | null;
    setRevision(revision: number | null): this;
    withRevision(revision: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Password | null;
    toDict(): {
        [key: string]: any;
    };
}
