import IModel from '../../core/interface/IModel';
export default class ReturningUserRatio implements IModel {
    private activeUsers;
    private returningUsers;
    private returningUserRatio;
    getActiveUsers(): number | null;
    setActiveUsers(activeUsers: number | null): this;
    withActiveUsers(activeUsers: number | null): this;
    getReturningUsers(): number | null;
    setReturningUsers(returningUsers: number | null): this;
    withReturningUsers(returningUsers: number | null): this;
    getReturningUserRatio(): number | null;
    setReturningUserRatio(returningUserRatio: number | null): this;
    withReturningUserRatio(returningUserRatio: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ReturningUserRatio | null;
    toDict(): {
        [key: string]: any;
    };
}
