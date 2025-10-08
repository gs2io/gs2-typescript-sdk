import IResult from '../../core/interface/IResult';
import * as Gs2Distributor from '../model';
export default class BatchExecuteApiResult implements IResult {
    private results;
    getResults(): Gs2Distributor.BatchResultPayload[] | null;
    setResults(results: Gs2Distributor.BatchResultPayload[] | null): this;
    withResults(results: Gs2Distributor.BatchResultPayload[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): BatchExecuteApiResult;
    toDict(): {
        [key: string]: any;
    };
}
