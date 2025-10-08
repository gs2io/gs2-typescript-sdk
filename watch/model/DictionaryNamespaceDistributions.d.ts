import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class DictionaryNamespaceDistributions implements IModel {
    private entryByName;
    private entryByUser;
    getEntryByName(): Gs2Watch.DictionaryNamespaceEntryByNameDistribution | null;
    setEntryByName(entryByName: Gs2Watch.DictionaryNamespaceEntryByNameDistribution | null): this;
    withEntryByName(entryByName: Gs2Watch.DictionaryNamespaceEntryByNameDistribution | null): this;
    getEntryByUser(): Gs2Watch.DictionaryNamespaceEntryByUserDistribution | null;
    setEntryByUser(entryByUser: Gs2Watch.DictionaryNamespaceEntryByUserDistribution | null): this;
    withEntryByUser(entryByUser: Gs2Watch.DictionaryNamespaceEntryByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DictionaryNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
