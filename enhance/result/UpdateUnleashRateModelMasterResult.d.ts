import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class UpdateUnleashRateModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Enhance.UnleashRateModelMaster | null;
    setItem(item: Gs2Enhance.UnleashRateModelMaster | null): this;
    withItem(item: Gs2Enhance.UnleashRateModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateUnleashRateModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
