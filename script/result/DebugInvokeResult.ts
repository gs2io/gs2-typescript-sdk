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
import * as Gs2Script from '../model'

export default class DebugInvokeResult implements IResult {
    private code: number|null = null;
    private result: string|null = null;
    private transaction: Gs2Script.Transaction|null = null;
    private randomStatus: Gs2Script.RandomStatus|null = null;
    private executeTime: number|null = null;
    private charged: number|null = null;
    private output: string[]|null = null;

    public getCode(): number|null {
        return this.code;
    }

    public setCode(code: number|null) {
        this.code = code;
        return this;
    }

    public withCode(code: number|null): this {
        this.code = code;
        return this;
    }

    public getResult(): string|null {
        return this.result;
    }

    public setResult(result: string|null) {
        this.result = result;
        return this;
    }

    public withResult(result: string|null): this {
        this.result = result;
        return this;
    }

    public getTransaction(): Gs2Script.Transaction|null {
        return this.transaction;
    }

    public setTransaction(transaction: Gs2Script.Transaction|null) {
        this.transaction = transaction;
        return this;
    }

    public withTransaction(transaction: Gs2Script.Transaction|null): this {
        this.transaction = transaction;
        return this;
    }

    public getRandomStatus(): Gs2Script.RandomStatus|null {
        return this.randomStatus;
    }

    public setRandomStatus(randomStatus: Gs2Script.RandomStatus|null) {
        this.randomStatus = randomStatus;
        return this;
    }

    public withRandomStatus(randomStatus: Gs2Script.RandomStatus|null): this {
        this.randomStatus = randomStatus;
        return this;
    }

    public getExecuteTime(): number|null {
        return this.executeTime;
    }

    public setExecuteTime(executeTime: number|null) {
        this.executeTime = executeTime;
        return this;
    }

    public withExecuteTime(executeTime: number|null): this {
        this.executeTime = executeTime;
        return this;
    }

    public getCharged(): number|null {
        return this.charged;
    }

    public setCharged(charged: number|null) {
        this.charged = charged;
        return this;
    }

    public withCharged(charged: number|null): this {
        this.charged = charged;
        return this;
    }

    public getOutput(): string[]|null {
        return this.output;
    }

    public setOutput(output: string[]|null) {
        this.output = output;
        return this;
    }

    public withOutput(output: string[]|null): this {
        this.output = output;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DebugInvokeResult {
        return new DebugInvokeResult()
            .withCode(data["code"])
            .withResult(data["result"])
            .withTransaction(Gs2Script.Transaction.fromDict(data["transaction"]))
            .withRandomStatus(Gs2Script.RandomStatus.fromDict(data["randomStatus"]))
            .withExecuteTime(data["executeTime"])
            .withCharged(data["charged"])
            .withOutput(data.output ?
                data.output.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "code": this.getCode(),
            "result": this.getResult(),
            "transaction": this.getTransaction()?.toDict(),
            "randomStatus": this.getRandomStatus()?.toDict(),
            "executeTime": this.getExecuteTime(),
            "charged": this.getCharged(),
            "output": this.getOutput() ?
                this.getOutput()!.map((item: string) => {
                    return item;
                }
            ) : null,
        };
    }
}
