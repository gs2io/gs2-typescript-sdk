import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class VerifyResult implements IResult {
    private item;
    getItem(): Gs2Project.Account | null;
    setItem(item: Gs2Project.Account | null): this;
    withItem(item: Gs2Project.Account | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyResult;
    toDict(): {
        [key: string]: any;
    };
}
