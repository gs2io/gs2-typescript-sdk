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

export default class Threshold implements IModel {
    private metadata: string|null = null;
    private values: number[]|null = null;
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
    public getValues(): number[]|null {
        return this.values;
    }
    public setValues(values: number[]|null) {
        this.values = values;
        return this;
    }
    public withValues(values: number[]|null): this {
        this.values = values;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Threshold|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Threshold()
            .withMetadata(data["metadata"])
            .withValues(data.values ?
                data.values.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "metadata": this.getMetadata(),
            "values": this.getValues() ?
                this.getValues()!.map((item: number) => {
                    return item;
                }
            ) : [],
        };
    }
}
