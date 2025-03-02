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

import * as Gs2Money2 from '../../money2/model'

export default class AppleAppStoreSubscriptionContent implements IModel {
    private subscriptionGroupIdentifier: string|null = null;
    public getSubscriptionGroupIdentifier(): string|null {
        return this.subscriptionGroupIdentifier;
    }
    public setSubscriptionGroupIdentifier(subscriptionGroupIdentifier: string|null) {
        this.subscriptionGroupIdentifier = subscriptionGroupIdentifier;
        return this;
    }
    public withSubscriptionGroupIdentifier(subscriptionGroupIdentifier: string|null): this {
        this.subscriptionGroupIdentifier = subscriptionGroupIdentifier;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AppleAppStoreSubscriptionContent|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AppleAppStoreSubscriptionContent()
            .withSubscriptionGroupIdentifier(data["subscriptionGroupIdentifier"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "subscriptionGroupIdentifier": this.getSubscriptionGroupIdentifier(),
        };
    }
}
