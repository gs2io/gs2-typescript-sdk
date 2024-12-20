import IModel from '../../core/interface/IModel';
import * as Gs2Watch from '../../watch/model';
export default class AccountNamespaceDistributions implements IModel {
    private type;
    getType(): Gs2Watch.AccountNamespaceTypeDistribution | null;
    setType(type: Gs2Watch.AccountNamespaceTypeDistribution | null): this;
    withType(type: Gs2Watch.AccountNamespaceTypeDistribution | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AccountNamespaceDistributions | null;
    toDict(): {
        [key: string]: any;
    };
}
