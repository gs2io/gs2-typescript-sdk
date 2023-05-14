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
import LimitNamespace from './LimitNamespace';

export default class LimitMetrics implements IModel {
    private namespaces: LimitNamespace[]|null = null;
    public getNamespaces(): LimitNamespace[]|null {
        return this.namespaces;
    }
    public setNamespaces(namespaces: LimitNamespace[]|null) {
        this.namespaces = namespaces;
        return this;
    }
    public withNamespaces(namespaces: LimitNamespace[]|null): this {
        this.namespaces = namespaces;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LimitMetrics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitMetrics()
            .withNamespaces(data.namespaces ?
                data.namespaces.map((item: {[key: string]: any}) => {
                    return LimitNamespace.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaces": this.getNamespaces() ?
                this.getNamespaces()!.map((item: LimitNamespace) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
