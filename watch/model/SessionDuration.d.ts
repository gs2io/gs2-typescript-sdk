import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class SessionDuration implements IModel {
    private statistics;
    private distribution;
    getStatistics(): Gs2Watch.SessionDurationStatistics | null;
    setStatistics(statistics: Gs2Watch.SessionDurationStatistics | null): this;
    withStatistics(statistics: Gs2Watch.SessionDurationStatistics | null): this;
    getDistribution(): Gs2Watch.SessionDurationDistribution[] | null;
    setDistribution(distribution: Gs2Watch.SessionDurationDistribution[] | null): this;
    withDistribution(distribution: Gs2Watch.SessionDurationDistribution[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SessionDuration | null;
    toDict(): {
        [key: string]: any;
    };
}
