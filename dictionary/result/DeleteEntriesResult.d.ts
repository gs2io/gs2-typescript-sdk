import IResult from '../../core/interface/IResult';
import * as Gs2Dictionary from '../model';
export default class DeleteEntriesResult implements IResult {
    private items;
    getItems(): Gs2Dictionary.Entry[] | null;
    setItems(items: Gs2Dictionary.Entry[] | null): this;
    withItems(items: Gs2Dictionary.Entry[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteEntriesResult;
    toDict(): {
        [key: string]: any;
    };
}
