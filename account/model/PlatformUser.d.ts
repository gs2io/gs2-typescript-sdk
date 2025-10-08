import IModel from '../../core/interface/IModel';
export default class PlatformUser implements IModel {
    private type;
    private userIdentifier;
    private userId;
    getType(): number | null;
    setType(type: number | null): this;
    withType(type: number | null): this;
    getUserIdentifier(): string | null;
    setUserIdentifier(userIdentifier: string | null): this;
    withUserIdentifier(userIdentifier: string | null): this;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): PlatformUser | null;
    toDict(): {
        [key: string]: any;
    };
}
