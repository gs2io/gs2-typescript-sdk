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

import * as Gs2Watch from '../../watch/model'
import DictionaryNamespaceEntryByNameDistributionStatistics from './DictionaryNamespaceEntryByNameDistributionStatistics';
import DictionaryNamespaceEntryByNameDistributionSegment from './DictionaryNamespaceEntryByNameDistributionSegment';
import DictionaryNamespaceEntryByNameDistribution from './DictionaryNamespaceEntryByNameDistribution';
import DictionaryNamespaceEntryByUserDistributionStatistics from './DictionaryNamespaceEntryByUserDistributionStatistics';
import DictionaryNamespaceEntryByUserDistributionSegment from './DictionaryNamespaceEntryByUserDistributionSegment';
import DictionaryNamespaceEntryByUserDistribution from './DictionaryNamespaceEntryByUserDistribution';

export default class DictionaryNamespaceDistributions implements IModel {
    private entryByName: Gs2Watch.DictionaryNamespaceEntryByNameDistribution|null = null;
    private entryByUser: Gs2Watch.DictionaryNamespaceEntryByUserDistribution|null = null;
    public getEntryByName(): Gs2Watch.DictionaryNamespaceEntryByNameDistribution|null {
        return this.entryByName;
    }
    public setEntryByName(entryByName: Gs2Watch.DictionaryNamespaceEntryByNameDistribution|null) {
        this.entryByName = entryByName;
        return this;
    }
    public withEntryByName(entryByName: Gs2Watch.DictionaryNamespaceEntryByNameDistribution|null): this {
        this.entryByName = entryByName;
        return this;
    }
    public getEntryByUser(): Gs2Watch.DictionaryNamespaceEntryByUserDistribution|null {
        return this.entryByUser;
    }
    public setEntryByUser(entryByUser: Gs2Watch.DictionaryNamespaceEntryByUserDistribution|null) {
        this.entryByUser = entryByUser;
        return this;
    }
    public withEntryByUser(entryByUser: Gs2Watch.DictionaryNamespaceEntryByUserDistribution|null): this {
        this.entryByUser = entryByUser;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DictionaryNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DictionaryNamespaceDistributions()
            .withEntryByName(Gs2Watch.DictionaryNamespaceEntryByNameDistribution.fromDict(data["entryByName"]))
            .withEntryByUser(Gs2Watch.DictionaryNamespaceEntryByUserDistribution.fromDict(data["entryByUser"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "entryByName": this.getEntryByName()?.toDict(),
            "entryByUser": this.getEntryByUser()?.toDict(),
        };
    }
}
