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

import * as Gs2Exchange from '../../exchange/model'

export default class LogCost implements IModel {
    private base: number|null = null;
    private adds: number[]|null = null;
    private subs: number[]|null = null;
    public getBase(): number|null {
        return this.base;
    }
    public setBase(base: number|null) {
        this.base = base;
        return this;
    }
    public withBase(base: number|null): this {
        this.base = base;
        return this;
    }
    public getAdds(): number[]|null {
        return this.adds;
    }
    public setAdds(adds: number[]|null) {
        this.adds = adds;
        return this;
    }
    public withAdds(adds: number[]|null): this {
        this.adds = adds;
        return this;
    }
    public getSubs(): number[]|null {
        return this.subs;
    }
    public setSubs(subs: number[]|null) {
        this.subs = subs;
        return this;
    }
    public withSubs(subs: number[]|null): this {
        this.subs = subs;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LogCost|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LogCost()
            .withBase(data["base"])
            .withAdds(data.adds ?
                data.adds.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null)
            .withSubs(data.subs ?
                data.subs.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "base": this.getBase(),
            "adds": this.getAdds() ?
                this.getAdds()!.map((item: number) => {
                    return item;
                }
            ) : null,
            "subs": this.getSubs() ?
                this.getSubs()!.map((item: number) => {
                    return item;
                }
            ) : null,
        };
    }
}
