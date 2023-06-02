import IModel from '../../core/interface/IModel';
import GeneralDauWauMau from './GeneralDauWauMau';
import SessionDuration from './SessionDuration';
import FirstEngagement from './FirstEngagement';
import Engagements from './Engagements';
import ChurnRateAggregate from './ChurnRateAggregate';
import UseServices from './UseServices';
export default class GeneralMetrics implements IModel {
    private dauWauMau;
    private sessionDuration;
    private firstEngagement;
    private engagements;
    private churnRates;
    private useServices;
    getDauWauMau(): GeneralDauWauMau | null;
    setDauWauMau(dauWauMau: GeneralDauWauMau | null): this;
    withDauWauMau(dauWauMau: GeneralDauWauMau | null): this;
    getSessionDuration(): SessionDuration | null;
    setSessionDuration(sessionDuration: SessionDuration | null): this;
    withSessionDuration(sessionDuration: SessionDuration | null): this;
    getFirstEngagement(): FirstEngagement | null;
    setFirstEngagement(firstEngagement: FirstEngagement | null): this;
    withFirstEngagement(firstEngagement: FirstEngagement | null): this;
    getEngagements(): Engagements | null;
    setEngagements(engagements: Engagements | null): this;
    withEngagements(engagements: Engagements | null): this;
    getChurnRates(): ChurnRateAggregate | null;
    setChurnRates(churnRates: ChurnRateAggregate | null): this;
    withChurnRates(churnRates: ChurnRateAggregate | null): this;
    getUseServices(): UseServices | null;
    setUseServices(useServices: UseServices | null): this;
    withUseServices(useServices: UseServices | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GeneralMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}
