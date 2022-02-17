import IModel from '../../core/interface/IModel';
export default class Password implements IModel {
    private userId;
    private userName;
    private createdAt;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getUserName(): string | null;
    setUserName(userName: string | null): this;
    withUserName(userName: string | null): this;
    getCreatedAt(): number | null;
    setCreatedAt(createdAt: number | null): this;
    withCreatedAt(createdAt: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Password | null;
    toDict(): {
        [key: string]: any;
    };
}
