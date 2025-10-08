import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class CreateProgressByStampSheetResult implements IResult {
    private item;
    getItem(): Gs2Enhance.Progress | null;
    setItem(item: Gs2Enhance.Progress | null): this;
    withItem(item: Gs2Enhance.Progress | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateProgressByStampSheetResult;
    toDict(): {
        [key: string]: any;
    };
}
