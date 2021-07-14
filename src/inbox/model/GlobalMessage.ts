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

import IModel from '@/gs2/core/interface/IModel';
import { AcquireAction } from './AcquireAction';
import { TimeSpan } from './TimeSpan';

export class GlobalMessage implements IModel {
    private globalMessageId: string|null = null;
    private name: string|null = null;
    private metadata: string|null = null;
    private readAcquireActions: AcquireAction[]|null = null;
    private expiresTimeSpan: TimeSpan|null = null;
    private expiresAt: number|null = null;

    public getGlobalMessageId(): string|null {
        return this.globalMessageId;
    }

    public setGlobalMessageId(globalMessageId: string|null) {
        this.globalMessageId = globalMessageId;
        return this;
    }

    public withGlobalMessageId(globalMessageId: string|null): this {
        this.globalMessageId = globalMessageId;
        return this;
    }

    public getName(): string|null {
        return this.name;
    }

    public setName(name: string|null) {
        this.name = name;
        return this;
    }

    public withName(name: string|null): this {
        this.name = name;
        return this;
    }

    public getMetadata(): string|null {
        return this.metadata;
    }

    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }

    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }

    public getReadAcquireActions(): AcquireAction[]|null {
        return this.readAcquireActions;
    }

    public setReadAcquireActions(readAcquireActions: AcquireAction[]|null) {
        this.readAcquireActions = readAcquireActions;
        return this;
    }

    public withReadAcquireActions(readAcquireActions: AcquireAction[]|null): this {
        this.readAcquireActions = readAcquireActions;
        return this;
    }

    public getExpiresTimeSpan(): TimeSpan|null {
        return this.expiresTimeSpan;
    }

    public setExpiresTimeSpan(expiresTimeSpan: TimeSpan|null) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    }

    public withExpiresTimeSpan(expiresTimeSpan: TimeSpan|null): this {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    }

    public getExpiresAt(): number|null {
        return this.expiresAt;
    }

    public setExpiresAt(expiresAt: number|null) {
        this.expiresAt = expiresAt;
        return this;
    }

    public withExpiresAt(expiresAt: number|null): this {
        this.expiresAt = expiresAt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GlobalMessage|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GlobalMessage()
            .withGlobalMessageId(data["globalMessageId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withReadAcquireActions(data.readAcquireActions ?
                data.readAcquireActions.map((item: {[key: string]: any}) => {
                    return AcquireAction.fromDict(item);
                }
            ) : [])
            .withExpiresTimeSpan(TimeSpan.fromDict(data["expiresTimeSpan"]))
            .withExpiresAt(data["expiresAt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "globalMessageId": this.getGlobalMessageId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "readAcquireActions": this.getReadAcquireActions() ?
                this.getReadAcquireActions()!.map((item: AcquireAction) => {
                    return item.toDict();
                }
            ) : [],
            "expiresTimeSpan": this.getExpiresTimeSpan()?.toDict(),
            "expiresAt": this.getExpiresAt(),
        };
    }
}
