import IModel from '../../core/interface/IModel';
export default class EngagementAverage implements IModel {
    private newUserRate;
    private returnUserRate;
    private engagedUserRate;
    getNewUserRate(): number | null;
    setNewUserRate(newUserRate: number | null): this;
    withNewUserRate(newUserRate: number | null): this;
    getReturnUserRate(): number | null;
    setReturnUserRate(returnUserRate: number | null): this;
    withReturnUserRate(returnUserRate: number | null): this;
    getEngagedUserRate(): number | null;
    setEngagedUserRate(engagedUserRate: number | null): this;
    withEngagedUserRate(engagedUserRate: number | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): EngagementAverage | null;
    toDict(): {
        [key: string]: any;
    };
}
