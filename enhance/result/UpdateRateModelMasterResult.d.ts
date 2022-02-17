import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class UpdateRateModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Enhance.RateModelMaster | null;
    setItem(item: Gs2Enhance.RateModelMaster | null): this;
    withItem(item: Gs2Enhance.RateModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateRateModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
