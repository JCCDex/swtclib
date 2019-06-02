"use strict"

import { Factory } from "./transaction"
const Transaction = Factory()

export { Factory, Transaction }
export {
  IAmount,
  ISwtcTxOptions,
  IPaymentTxOptions,
  IOfferCreateTxOptions,
  IOfferCancelTxOptions,
  IContractInitTxOptions,
  IContractInvokeTxOptions,
  IContractDeployTxOptions,
  IContractCallTxOptions
} from "./types"
