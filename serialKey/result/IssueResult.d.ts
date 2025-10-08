import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class IssueResult implements IResult {
    private item;
    getItem(): Gs2SerialKey.IssueJob | null;
    setItem(item: Gs2SerialKey.IssueJob | null): this;
    withItem(item: Gs2SerialKey.IssueJob | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): IssueResult;
    toDict(): {
        [key: string]: any;
    };
}
