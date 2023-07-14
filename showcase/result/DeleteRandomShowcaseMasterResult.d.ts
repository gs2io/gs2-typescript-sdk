import IResult from '../../core/interface/IResult';
import * as Gs2Showcase from '../model';
export default class DeleteRandomShowcaseMasterResult implements IResult {
    private item;
    getItem(): Gs2Showcase.RandomShowcaseMaster | null;
    setItem(item: Gs2Showcase.RandomShowcaseMaster | null): this;
    withItem(item: Gs2Showcase.RandomShowcaseMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteRandomShowcaseMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
