/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IModel from '../../core/interface/IModel';

import * as Gs2Idle from '../../idle/model'
import AcquireAction from './AcquireAction';

export default class AcquireActionList implements IModel {
    private acquireActions: Gs2Idle.AcquireAction[]|null = null;
    public getAcquireActions(): Gs2Idle.AcquireAction[]|null {
        return this.acquireActions;
    }
    public setAcquireActions(acquireActions: Gs2Idle.AcquireAction[]|null) {
        this.acquireActions = acquireActions;
        return this;
    }
    public withAcquireActions(acquireActions: Gs2Idle.AcquireAction[]|null): this {
        this.acquireActions = acquireActions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AcquireActionList|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AcquireActionList()
            .withAcquireActions(data.acquireActions ?
                data.acquireActions.map((item: {[key: string]: any}) => {
                    return Gs2Idle.AcquireAction.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions()!.map((item: Gs2Idle.AcquireAction) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
