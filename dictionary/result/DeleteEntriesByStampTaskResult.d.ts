import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class DeleteEntriesByStampTaskResult implements IResult {
    private items;
    private newContextStack;
    getItems(): Gs2Dictionary.Entry[] | null;
    setItems(items: Gs2Dictionary.Entry[] | null): this;
    withItems(items: Gs2Dictionary.Entry[] | null): this;
    getNewContextStack(): string | null;
    setNewContextStack(newContextStack: string | null): this;
    withNewContextStack(newContextStack: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteEntriesByStampTaskResult;
    toDict(): {
        [key: string]: any;
    };
}
