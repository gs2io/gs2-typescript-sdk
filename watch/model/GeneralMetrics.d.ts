import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class GeneralMetrics implements IModel {
    private dauWauMau;
    private sessionDuration;
    private firstEngagement;
    private engagements;
    private churnRates;
    private useServices;
    getDauWauMau(): Gs2Watch.GeneralDauWauMau | null;
    setDauWauMau(dauWauMau: Gs2Watch.GeneralDauWauMau | null): this;
    withDauWauMau(dauWauMau: Gs2Watch.GeneralDauWauMau | null): this;
    getSessionDuration(): Gs2Watch.SessionDuration | null;
    setSessionDuration(sessionDuration: Gs2Watch.SessionDuration | null): this;
    withSessionDuration(sessionDuration: Gs2Watch.SessionDuration | null): this;
    getFirstEngagement(): Gs2Watch.FirstEngagement | null;
    setFirstEngagement(firstEngagement: Gs2Watch.FirstEngagement | null): this;
    withFirstEngagement(firstEngagement: Gs2Watch.FirstEngagement | null): this;
    getEngagements(): Gs2Watch.Engagements | null;
    setEngagements(engagements: Gs2Watch.Engagements | null): this;
    withEngagements(engagements: Gs2Watch.Engagements | null): this;
    getChurnRates(): Gs2Watch.ChurnRateAggregate | null;
    setChurnRates(churnRates: Gs2Watch.ChurnRateAggregate | null): this;
    withChurnRates(churnRates: Gs2Watch.ChurnRateAggregate | null): this;
    getUseServices(): Gs2Watch.UseServices | null;
    setUseServices(useServices: Gs2Watch.UseServices | null): this;
    withUseServices(useServices: Gs2Watch.UseServices | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GeneralMetrics | null;
    toDict(): {
        [key: string]: any;
    };
}
