import IResult from '../../core/interface/IResult';
import * as Gs2Version from '../model';
export default class DescribeVersionModelsResult implements IResult {
    private items;
    getItems(): Gs2Version.VersionModel[] | null;
    setItems(items: Gs2Version.VersionModel[] | null): this;
    withItems(items: Gs2Version.VersionModel[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DescribeVersionModelsResult;
    toDict(): {
        [key: string]: any;
    };
}
