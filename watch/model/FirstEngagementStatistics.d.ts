import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class FirstEngagementStatistics implements IModel {
    private loginDays;
    getLoginDays(): Gs2Watch.FirstEngagementStatisticsLoginDays | null;
    setLoginDays(loginDays: Gs2Watch.FirstEngagementStatisticsLoginDays | null): this;
    withLoginDays(loginDays: Gs2Watch.FirstEngagementStatisticsLoginDays | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FirstEngagementStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
