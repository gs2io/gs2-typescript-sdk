import IResult from '../../core/interface/IResult';
import * as Gs2Deploy from '../model';
export default class ChangeSetResult implements IResult {
    private items;
    getItems(): Gs2Deploy.ChangeSet[] | null;
    setItems(items: Gs2Deploy.ChangeSet[] | null): this;
    withItems(items: Gs2Deploy.ChangeSet[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ChangeSetResult;
    toDict(): {
        [key: string]: any;
    };
}
