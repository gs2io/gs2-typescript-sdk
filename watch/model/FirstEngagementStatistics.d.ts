import IModel from '../../core/interface/IModel';
import FirstEngagementStatisticsLoginDays from './FirstEngagementStatisticsLoginDays';
export default class FirstEngagementStatistics implements IModel {
    private loginDays;
    getLoginDays(): FirstEngagementStatisticsLoginDays | null;
    setLoginDays(loginDays: FirstEngagementStatisticsLoginDays | null): this;
    withLoginDays(loginDays: FirstEngagementStatisticsLoginDays | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): FirstEngagementStatistics | null;
    toDict(): {
        [key: string]: any;
    };
}
