import IModel from '../../core/interface/IModel';
import LimitLimit from './LimitLimit';
export default class LimitNamespace implements IModel {
    private namespaceName;
    private limit;
    getNamespaceName(): string | null;
    setNamespaceName(namespaceName: string | null): this;
    withNamespaceName(namespaceName: string | null): this;
    getLimit(): LimitLimit[] | null;
    setLimit(limit: LimitLimit[] | null): this;
    withLimit(limit: LimitLimit[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): LimitNamespace | null;
    toDict(): {
        [key: string]: any;
    };
}
