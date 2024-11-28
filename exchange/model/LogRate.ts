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

export default class LogRate implements IModel {
    private base: number|null = null;
    private logs: number[]|null = null;
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
    public getLogs(): number[]|null {
        return this.logs;
    }
    public setLogs(logs: number[]|null) {
        this.logs = logs;
        return this;
    }
    public withLogs(logs: number[]|null): this {
        this.logs = logs;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): LogRate|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new LogRate()
            .withBase(data["base"])
            .withLogs(data.logs ?
                data.logs.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "base": this.getBase(),
            "logs": this.getLogs() ?
                this.getLogs()!.map((item: number) => {
                    return item;
                }
            ) : null,
        };
    }
}
