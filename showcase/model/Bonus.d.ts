import IModel from '../../core/interface/IModel';
import * as Gs2Showcase from '../../showcase/model';
export default class Bonus implements IModel {
    private routeKey;
    private acquireActions;
    getRouteKey(): string | null;
    setRouteKey(routeKey: string | null): this;
    withRouteKey(routeKey: string | null): this;
    getAcquireActions(): Gs2Showcase.AcquireAction[] | null;
    setAcquireActions(acquireActions: Gs2Showcase.AcquireAction[] | null): this;
    withAcquireActions(acquireActions: Gs2Showcase.AcquireAction[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): Bonus | null;
    toDict(): {
        [key: string]: any;
    };
}
