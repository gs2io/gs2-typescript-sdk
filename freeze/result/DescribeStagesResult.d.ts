import IResult from '../../core/interface/IResult';
import * as Gs2Freeze from '../model';
export default class DescribeStagesResult implements IResult {
    private items;
    getItems(): Gs2Freeze.Stage[] | null;
    setItems(items: Gs2Freeze.Stage[] | null): this;
    withItems(items: Gs2Freeze.Stage[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeStagesResult;
    toDict(): {
        [key: string]: any;
    };
}
