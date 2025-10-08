import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class GetCurrentGuildMasterResult implements IResult {
    private item;
    getItem(): Gs2Guild.CurrentGuildMaster | null;
    setItem(item: Gs2Guild.CurrentGuildMaster | null): this;
    withItem(item: Gs2Guild.CurrentGuildMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): GetCurrentGuildMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
