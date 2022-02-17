import IResult from '../../core/interface/IResult';
import * as Gs2Version from '../model';
export default class CreateVersionModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Version.VersionModelMaster | null;
    setItem(item: Gs2Version.VersionModelMaster | null): this;
    withItem(item: Gs2Version.VersionModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CreateVersionModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
