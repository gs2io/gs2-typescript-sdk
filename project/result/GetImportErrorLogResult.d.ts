import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class GetImportErrorLogResult implements IResult {
    private item;
    getItem(): Gs2Project.ImportErrorLog | null;
    setItem(item: Gs2Project.ImportErrorLog | null): this;
    withItem(item: Gs2Project.ImportErrorLog | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetImportErrorLogResult;
    toDict(): {
        [key: string]: any;
    };
}
