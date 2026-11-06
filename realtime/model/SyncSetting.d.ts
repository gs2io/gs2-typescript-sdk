import IModel from '../../core/interface/IModel';
export default class SyncSetting implements IModel {
    private objectCatalog;
    getObjectCatalog(): string | null;
    setObjectCatalog(objectCatalog: string | null): this;
    withObjectCatalog(objectCatalog: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): SyncSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
