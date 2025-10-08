import IResult from '../../core/interface/IResult';
import * as Gs2Buff from '../model';
export default class DescribeBuffEntryModelsResult implements IResult {
    private items;
    getItems(): Gs2Buff.BuffEntryModel[] | null;
    setItems(items: Gs2Buff.BuffEntryModel[] | null): this;
    withItems(items: Gs2Buff.BuffEntryModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeBuffEntryModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
