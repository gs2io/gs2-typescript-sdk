import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class GetCurrentRateMasterResult implements IResult {
    private item;
    getItem(): Gs2Enhance.CurrentRateMaster | null;
    setItem(item: Gs2Enhance.CurrentRateMaster | null): this;
    withItem(item: Gs2Enhance.CurrentRateMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCurrentRateMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
