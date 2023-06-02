import IModel from '../../core/interface/IModel';
import DictionaryNamespaceEntryByNameDistribution from './DictionaryNamespaceEntryByNameDistribution';
import DictionaryNamespaceEntryByUserDistribution from './DictionaryNamespaceEntryByUserDistribution';
export default class DictionaryNamespaceDistributions implements IModel {
    private entryByName;
    private entryByUser;
    getEntryByName(): DictionaryNamespaceEntryByNameDistribution | null;
    setEntryByName(entryByName: DictionaryNamespaceEntryByNameDistribution | null): this;
    withEntryByName(entryByName: DictionaryNamespaceEntryByNameDistribution | null): this;
    getEntryByUser(): DictionaryNamespaceEntryByUserDistribution | null;
    setEntryByUser(entryByUser: DictionaryNamespaceEntryByUserDistribution | null): this;
    withEntryByUser(entryByUser: DictionaryNamespaceEntryByUserDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): DictionaryNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
