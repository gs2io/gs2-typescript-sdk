import IResult from '../../core/interface/IResult';
import * as Gs2Inbox from '../model';
export default class OpenByStampTaskResult implements IResult {
    private item;
    private newContextStack;
    getItem(): Gs2Inbox.Message | null;
    setItem(item: Gs2Inbox.Message | null): this;
    withItem(item: Gs2Inbox.Message | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): OpenByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
