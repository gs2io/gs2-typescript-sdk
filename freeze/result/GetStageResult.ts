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

import IResult from '../../core/interface/IResult';
import * as Gs2Freeze from '../model'

export default class GetStageResult implements IResult {
    private item: Gs2Freeze.Stage|null = null;
    private source: Gs2Freeze.Microservice[]|null = null;
    private current: Gs2Freeze.Microservice[]|null = null;

    public getItem(): Gs2Freeze.Stage|null {
        return this.item;
    }

    public setItem(item: Gs2Freeze.Stage|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Freeze.Stage|null): this {
        this.item = item;
        return this;
    }

    public getSource(): Gs2Freeze.Microservice[]|null {
        return this.source;
    }

    public setSource(source: Gs2Freeze.Microservice[]|null) {
        this.source = source;
        return this;
    }

    public withSource(source: Gs2Freeze.Microservice[]|null): this {
        this.source = source;
        return this;
    }

    public getCurrent(): Gs2Freeze.Microservice[]|null {
        return this.current;
    }

    public setCurrent(current: Gs2Freeze.Microservice[]|null) {
        this.current = current;
        return this;
    }

    public withCurrent(current: Gs2Freeze.Microservice[]|null): this {
        this.current = current;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetStageResult {
        return new GetStageResult()
            .withItem(Gs2Freeze.Stage.fromDict(data["item"]))
            .withSource(data.source ?
                data.source.map((item: {[key: string]: any}) => {
                    return Gs2Freeze.Microservice.fromDict(item);
                }
            ) : null)
            .withCurrent(data.current ?
                data.current.map((item: {[key: string]: any}) => {
                    return Gs2Freeze.Microservice.fromDict(item);
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "source": this.getSource() ?
                this.getSource()!.map((item: Gs2Freeze.Microservice) => {
                    return item.toDict();
                }
            ) : null,
            "current": this.getCurrent() ?
                this.getCurrent()!.map((item: Gs2Freeze.Microservice) => {
                    return item.toDict();
                }
            ) : null,
        };
    }
}
