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
import AccountNamespaceTypeDistributionStatistics from './AccountNamespaceTypeDistributionStatistics';
import AccountNamespaceTypeDistributionSegment from './AccountNamespaceTypeDistributionSegment';
import AccountNamespaceTypeDistribution from './AccountNamespaceTypeDistribution';

export default class AccountNamespaceDistributions implements IModel {
    private type: AccountNamespaceTypeDistribution|null = null;
    public getType(): AccountNamespaceTypeDistribution|null {
        return this.type;
    }
    public setType(type: AccountNamespaceTypeDistribution|null) {
        this.type = type;
        return this;
    }
    public withType(type: AccountNamespaceTypeDistribution|null): this {
        this.type = type;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AccountNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccountNamespaceDistributions()
            .withType(AccountNamespaceTypeDistribution.fromDict(data["type"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "type": this.getType()?.toDict(),
        };
    }
}
