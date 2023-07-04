import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class CreateIncrementalRateModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Exchange.IncrementalRateModelMaster | null;
    setItem(item: Gs2Exchange.IncrementalRateModelMaster | null): this;
    withItem(item: Gs2Exchange.IncrementalRateModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateIncrementalRateModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
