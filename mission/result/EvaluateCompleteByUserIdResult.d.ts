import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class EvaluateCompleteByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Mission.Complete | null;
    setItem(item: Gs2Mission.Complete | null): this;
    withItem(item: Gs2Mission.Complete | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): EvaluateCompleteByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
