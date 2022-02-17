import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class CreateRateModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Exchange.RateModelMaster | null;
    setItem(item: Gs2Exchange.RateModelMaster | null): this;
    withItem(item: Gs2Exchange.RateModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateRateModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
