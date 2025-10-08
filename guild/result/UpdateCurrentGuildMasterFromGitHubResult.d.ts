import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class UpdateCurrentGuildMasterFromGitHubResult implements IResult {
    private item;
    getItem(): Gs2Guild.CurrentGuildMaster | null;
    setItem(item: Gs2Guild.CurrentGuildMaster | null): this;
    withItem(item: Gs2Guild.CurrentGuildMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateCurrentGuildMasterFromGitHubResult;
    toDict(): {
        [key: string]: any;
    };
}
