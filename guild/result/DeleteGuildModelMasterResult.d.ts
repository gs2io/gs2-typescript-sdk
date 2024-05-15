import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class DeleteGuildModelMasterResult implements IResult {
    private item;
    getItem(): Gs2Guild.GuildModelMaster | null;
    setItem(item: Gs2Guild.GuildModelMaster | null): this;
    withItem(item: Gs2Guild.GuildModelMaster | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DeleteGuildModelMasterResult;
    toDict(): {
        [key: string]: any;
    };
}
