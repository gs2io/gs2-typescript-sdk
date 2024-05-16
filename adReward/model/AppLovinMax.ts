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

export default class AppLovinMax implements IModel {
    private allowAdUnitId: string|null = null;
    private eventKey: string|null = null;
    public getAllowAdUnitId(): string|null {
        return this.allowAdUnitId;
    }
    public setAllowAdUnitId(allowAdUnitId: string|null) {
        this.allowAdUnitId = allowAdUnitId;
        return this;
    }
    public withAllowAdUnitId(allowAdUnitId: string|null): this {
        this.allowAdUnitId = allowAdUnitId;
        return this;
    }
    public getEventKey(): string|null {
        return this.eventKey;
    }
    public setEventKey(eventKey: string|null) {
        this.eventKey = eventKey;
        return this;
    }
    public withEventKey(eventKey: string|null): this {
        this.eventKey = eventKey;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AppLovinMax|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AppLovinMax()
            .withAllowAdUnitId(data["allowAdUnitId"])
            .withEventKey(data["eventKey"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "allowAdUnitId": this.getAllowAdUnitId(),
            "eventKey": this.getEventKey(),
        };
    }
}
