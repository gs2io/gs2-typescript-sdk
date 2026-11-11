import IModel from '../../core/interface/IModel';
export default class ParticipantSetting implements IModel {
    private userId;
    private scriptId;
    getUserId(): string | null;
    setUserId(userId: string | null): this;
    withUserId(userId: string | null): this;
    getScriptId(): string | null;
    setScriptId(scriptId: string | null): this;
    withScriptId(scriptId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): ParticipantSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
