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

export default class AdMob implements IModel {
    private allowAdUnitIds: string[]|null = null;
    public getAllowAdUnitIds(): string[]|null {
        return this.allowAdUnitIds;
    }
    public setAllowAdUnitIds(allowAdUnitIds: string[]|null) {
        this.allowAdUnitIds = allowAdUnitIds;
        return this;
    }
    public withAllowAdUnitIds(allowAdUnitIds: string[]|null): this {
        this.allowAdUnitIds = allowAdUnitIds;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AdMob|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AdMob()
            .withAllowAdUnitIds(data.allowAdUnitIds ?
                data.allowAdUnitIds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "allowAdUnitIds": this.getAllowAdUnitIds() ?
                this.getAllowAdUnitIds()!.map((item: string) => {
                    return item;
                }
            ) : [],
        };
    }
}
