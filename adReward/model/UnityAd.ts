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

export default class UnityAd implements IModel {
    private keys: string[]|null = null;
    public getKeys(): string[]|null {
        return this.keys;
    }
    public setKeys(keys: string[]|null) {
        this.keys = keys;
        return this;
    }
    public withKeys(keys: string[]|null): this {
        this.keys = keys;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UnityAd|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnityAd()
            .withKeys(data.keys ?
                data.keys.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "keys": this.getKeys() ?
                this.getKeys()!.map((item: string) => {
                    return item;
                }
            ) : [],
        };
    }
}
