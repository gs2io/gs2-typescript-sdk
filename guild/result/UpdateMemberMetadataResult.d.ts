import IResult from '../../core/interface/IResult';
import * as Gs2Guild from '../model';
export default class UpdateMemberMetadataResult implements IResult {
    private item;
    getItem(): Gs2Guild.Guild | null;
    setItem(item: Gs2Guild.Guild | null): this;
    withItem(item: Gs2Guild.Guild | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): UpdateMemberMetadataResult;
    toDict(): {
        [key: string]: any;
    };
}
