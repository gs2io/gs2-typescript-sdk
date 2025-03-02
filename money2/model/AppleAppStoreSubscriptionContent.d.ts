import IModel from '../../core/interface/IModel';
export default class AppleAppStoreSubscriptionContent implements IModel {
    private subscriptionGroupIdentifier;
    getSubscriptionGroupIdentifier(): string | null;
    setSubscriptionGroupIdentifier(subscriptionGroupIdentifier: string | null): this;
    withSubscriptionGroupIdentifier(subscriptionGroupIdentifier: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): AppleAppStoreSubscriptionContent | null;
    toDict(): {
        [key: string]: any;
    };
}
