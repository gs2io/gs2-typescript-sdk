import IResult from '../../core/interface/IResult';
import * as Gs2Mission from '../model';
export default class GetCompleteByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Mission.Complete | null;
    setItem(item: Gs2Mission.Complete | null): this;
    withItem(item: Gs2Mission.Complete | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCompleteByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
