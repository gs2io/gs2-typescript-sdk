import IModel from '../../core/interface/IModel';
import SessionDurationStatistics from './SessionDurationStatistics';
import SessionDurationDistribution from './SessionDurationDistribution';
export default class SessionDuration implements IModel {
    private statistics;
    private distribution;
    getStatistics(): SessionDurationStatistics | null;
    setStatistics(statistics: SessionDurationStatistics | null): this;
    withStatistics(statistics: SessionDurationStatistics | null): this;
    getDistribution(): SessionDurationDistribution[] | null;
    setDistribution(distribution: SessionDurationDistribution[] | null): this;
    withDistribution(distribution: SessionDurationDistribution[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SessionDuration | null;
    toDict(): {
        [key: string]: any;
    };
}
