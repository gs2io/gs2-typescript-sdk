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
import ShowcaseBuyQuantityDistribution from './ShowcaseBuyQuantityDistribution';
import ShowcaseDisplayItem from './ShowcaseDisplayItem';
import ShowcaseShowcase from './ShowcaseShowcase';

export default class ShowcaseNamespace implements IModel {
    private namespaceName: string|null = null;
    private showcase: ShowcaseShowcase[]|null = null;
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
    public getShowcase(): ShowcaseShowcase[]|null {
        return this.showcase;
    }
    public setShowcase(showcase: ShowcaseShowcase[]|null) {
        this.showcase = showcase;
        return this;
    }
    public withShowcase(showcase: ShowcaseShowcase[]|null): this {
        this.showcase = showcase;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ShowcaseNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseNamespace()
            .withNamespaceName(data["namespaceName"])
            .withShowcase(data.showcase ?
                data.showcase.map((item: {[key: string]: any}) => {
                    return ShowcaseShowcase.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcase": this.getShowcase() ?
                this.getShowcase()!.map((item: ShowcaseShowcase) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
