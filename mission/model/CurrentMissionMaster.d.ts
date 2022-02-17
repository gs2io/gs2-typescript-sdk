import IModel from '../../core/interface/IModel';
export default class CurrentMissionMaster implements IModel {
    private namespaceId;
    private settings;
    getNamespaceId(): string | null;
    setNamespaceId(namespaceId: string | null): this;
    withNamespaceId(namespaceId: string | null): this;
    getSettings(): string | null;
    setSettings(settings: string | null): this;
    withSettings(settings: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): CurrentMissionMaster | null;
    toDict(): {
        [key: string]: any;
    };
}
