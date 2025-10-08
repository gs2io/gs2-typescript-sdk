import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class DeleteProgressByUserIdResult implements IResult {
    private item;
    getItem(): Gs2Enhance.Progress | null;
    setItem(item: Gs2Enhance.Progress | null): this;
    withItem(item: Gs2Enhance.Progress | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteProgressByUserIdResult;
    toDict(): {
        [key: string]: any;
    };
}
