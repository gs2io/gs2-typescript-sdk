import IResult from '../../core/interface/IResult';
import * as Gs2Enhance from '../model';
export default class DeleteProgressByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Enhance.Progress | null;
    setItem(item: Gs2Enhance.Progress | null): this;
    withItem(item: Gs2Enhance.Progress | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteProgressByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
