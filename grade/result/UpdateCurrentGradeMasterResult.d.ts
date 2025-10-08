import IResult from '../../core/interface/IResult';
import * as Gs2Grade from '../model';
export default class UpdateCurrentGradeMasterResult implements IResult {
    private item;
    getItem(): Gs2Grade.CurrentGradeMaster | null;
    setItem(item: Gs2Grade.CurrentGradeMaster | null): this;
    withItem(item: Gs2Grade.CurrentGradeMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentGradeMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
