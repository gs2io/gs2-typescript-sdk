import IResult from '../../core/interface/IResult';
import * as Gs2Project from '../model';
export default class WaitImportUserDataResult implements IResult {
    private item;
    getItem(): Gs2Project.ImportProgress | null;
    setItem(item: Gs2Project.ImportProgress | null): this;
    withItem(item: Gs2Project.ImportProgress | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): WaitImportUserDataResult;
    toDict(): {
        [key: string]: any;
    };
}
