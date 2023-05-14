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
import LimitCounterDistributionUsage from './LimitCounterDistributionUsage';
import LimitCounterDistribution from './LimitCounterDistribution';
import LimitCounter from './LimitCounter';
import LimitLimit from './LimitLimit';

export default class LimitNamespace implements IModel {
    private namespaceName: string|null = null;
    private limit: LimitLimit[]|null = null;
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }
    public getLimit(): LimitLimit[]|null {
        return this.limit;
    }
    public setLimit(limit: LimitLimit[]|null) {
        this.limit = limit;
        return this;
    }
    public withLimit(limit: LimitLimit[]|null): this {
        this.limit = limit;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitNamespace()
            .withNamespaceName(data["namespaceName"])
            .withLimit(data.limit ?
                data.limit.map((item: {[key: string]: any}) => {
                    return LimitLimit.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "limit": this.getLimit() ?
                this.getLimit()!.map((item: LimitLimit) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
