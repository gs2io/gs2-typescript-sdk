import IResult from '../../core/interface/IResult';
import * as Gs2SerialKey from '../model';
export default class VerifyByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2SerialKey.SerialKey | null;
    setItem(item: Gs2SerialKey.SerialKey | null): this;
    withItem(item: Gs2SerialKey.SerialKey | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): VerifyByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
