import IResult from '../../core/interface/IResult';
import * as Gs2Inbox from '../model';
export default class GetGlobalMessageMasterResult implements IResult {
    private item;
    getItem(): Gs2Inbox.GlobalMessageMaster | null;
    setItem(item: Gs2Inbox.GlobalMessageMaster | null): this;
    withItem(item: Gs2Inbox.GlobalMessageMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetGlobalMessageMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
