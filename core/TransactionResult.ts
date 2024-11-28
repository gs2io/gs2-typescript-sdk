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

import IModel from './interface/IModel';
import VerifyActionResult from './VerifyActionResult';
import ConsumeActionResult from './ConsumeActionResult';
import AcquireActionResult from './AcquireActionResult';

export default class TransactionResult implements IModel {
    private transactionId: string|null = null;
    private verifyResults: VerifyActionResult[]|null = null;
    private consumeResults: ConsumeActionResult[]|null = null;
    private acquireResults: AcquireActionResult[]|null = null;
    public getTransactionId(): string|null {
        return this.transactionId;
    }
    public setTransactionId(transactionId: string|null) {
        this.transactionId = transactionId;
        return this;
    }
    public withTransactionId(transactionId: string|null): this {
        this.transactionId = transactionId;
        return this;
    }
    public getVerifyResults(): VerifyActionResult[]|null {
        return this.verifyResults;
    }
    public setVerifyResults(verifyResults: VerifyActionResult[]|null) {
        this.verifyResults = verifyResults;
        return this;
    }
    public withVerifyResults(verifyResults: VerifyActionResult[]|null): this {
        this.verifyResults = verifyResults;
        return this;
    }
    public getConsumeResults(): ConsumeActionResult[]|null {
        return this.consumeResults;
    }
    public setConsumeResults(consumeResults: ConsumeActionResult[]|null) {
        this.consumeResults = consumeResults;
        return this;
    }
    public withConsumeResults(consumeResults: ConsumeActionResult[]|null): this {
        this.consumeResults = consumeResults;
        return this;
    }
    public getAcquireResults(): AcquireActionResult[]|null {
        return this.acquireResults;
    }
    public setAcquireResults(acquireResults: AcquireActionResult[]|null) {
        this.acquireResults = acquireResults;
        return this;
    }
    public withAcquireResults(acquireResults: AcquireActionResult[]|null): this {
        this.acquireResults = acquireResults;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): TransactionResult|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new TransactionResult()
            .withTransactionId(data["transactionId"])
            .withVerifyResults(data.verifyResults ?
                data.verifyResults.map((item: {[key: string]: any}) => {
                    return VerifyActionResult.fromDict(item);
                }
            ) : [])
            .withConsumeResults(data.consumeResults ?
                data.consumeResults.map((item: {[key: string]: any}) => {
                    return ConsumeActionResult.fromDict(item);
                }
            ) : [])
            .withAcquireResults(data.acquireResults ?
                data.acquireResults.map((item: {[key: string]: any}) => {
                    return AcquireActionResult.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "transactionId": this.getTransactionId(),
            "verifyResults": this.getVerifyResults() ?
                this.getVerifyResults()!.map((item: VerifyActionResult) => {
                    return item.toDict();
                }
            ) : [],
            "consumeResults": this.getConsumeResults() ?
                this.getConsumeResults()!.map((item: ConsumeActionResult) => {
                    return item.toDict();
                }
            ) : [],
            "acquireResults": this.getAcquireResults() ?
                this.getAcquireResults()!.map((item: AcquireActionResult) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
