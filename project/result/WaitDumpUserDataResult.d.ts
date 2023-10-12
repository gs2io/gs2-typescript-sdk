import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class WaitDumpUserDataResult implements IResult {
    private item;
    getItem(): Gs2Project.DumpProgress | null;
    setItem(item: Gs2Project.DumpProgress | null): this;
    withItem(item: Gs2Project.DumpProgress | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WaitDumpUserDataResult;
    toDict(): {
        [key: string]: any;
    };
}
