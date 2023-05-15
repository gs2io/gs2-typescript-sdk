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
import InventoryInventoryStatisticsDistribution from './InventoryInventoryStatisticsDistribution';
import InventoryInventoryStatistics from './InventoryInventoryStatistics';
import InventoryItemStatistics from './InventoryItemStatistics';
import InventoryItemDistribution from './InventoryItemDistribution';
import InventoryItem from './InventoryItem';
import InventoryInventory from './InventoryInventory';
import InventoryNamespace from './InventoryNamespace';

export default class InventoryMetrics implements IModel {
    private namespaces: InventoryNamespace[]|null = null;
    public getNamespaces(): InventoryNamespace[]|null {
        return this.namespaces;
    }
    public setNamespaces(namespaces: InventoryNamespace[]|null) {
        this.namespaces = namespaces;
        return this;
    }
    public withNamespaces(namespaces: InventoryNamespace[]|null): this {
        this.namespaces = namespaces;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InventoryMetrics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InventoryMetrics()
            .withNamespaces(data.namespaces ?
                data.namespaces.map((item: {[key: string]: any}) => {
                    return InventoryNamespace.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaces": this.getNamespaces() ?
                this.getNamespaces()!.map((item: InventoryNamespace) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
