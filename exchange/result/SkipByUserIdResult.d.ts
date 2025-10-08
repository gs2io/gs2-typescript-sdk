import IResult from '../../core/interface/IResult';
import * as Gs2Exchange from '../model';
export default class SkipByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Exchange.Await | null;
    setItem(item: Gs2Exchange.Await | null): this;
    withItem(item: Gs2Exchange.Await | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SkipByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
