import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class UpdateCurrentRateMasterResult implements IResult {
    private item;
    getItem(): Gs2Enhance.CurrentRateMaster | null;
    setItem(item: Gs2Enhance.CurrentRateMaster | null): this;
    withItem(item: Gs2Enhance.CurrentRateMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentRateMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
