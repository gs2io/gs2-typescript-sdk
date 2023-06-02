import IModel from '../../core/interface/IModel';
import SessionDurationStatistics from './SessionDurationStatistics';
import SessionDurationDistributionSegment from './SessionDurationDistributionSegment';
export default class SessionDuration implements IModel {
    private statistics;
    private distribution;
    getStatistics(): SessionDurationStatistics | null;
    setStatistics(statistics: SessionDurationStatistics | null): this;
    withStatistics(statistics: SessionDurationStatistics | null): this;
    getDistribution(): SessionDurationDistributionSegment[] | null;
    setDistribution(distribution: SessionDurationDistributionSegment[] | null): this;
    withDistribution(distribution: SessionDurationDistributionSegment[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SessionDuration | null;
    toDict(): {
        [key: string]: any;
    };
}
