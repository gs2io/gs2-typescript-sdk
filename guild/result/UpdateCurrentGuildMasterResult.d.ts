import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class UpdateCurrentGuildMasterResult implements IResult {
    private item;
    getItem(): Gs2Guild.CurrentGuildMaster | null;
    setItem(item: Gs2Guild.CurrentGuildMaster | null): this;
    withItem(item: Gs2Guild.CurrentGuildMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentGuildMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
