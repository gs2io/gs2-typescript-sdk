import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class UpdateCurrentRateMasterResult implements IResult {
    private item;
    getItem(): Gs2Exchange.CurrentRateMaster | null;
    setItem(item: Gs2Exchange.CurrentRateMaster | null): this;
    withItem(item: Gs2Exchange.CurrentRateMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentRateMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
