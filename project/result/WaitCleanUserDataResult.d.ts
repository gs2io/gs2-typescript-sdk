import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class WaitCleanUserDataResult implements IResult {
    private item;
    getItem(): Gs2Project.CleanProgress | null;
    setItem(item: Gs2Project.CleanProgress | null): this;
    withItem(item: Gs2Project.CleanProgress | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WaitCleanUserDataResult;
    toDict(): {
        [key: string]: any;
    };
}
