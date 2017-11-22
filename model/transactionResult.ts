/**
 * CityPay POS API
 * CityPay Point of Sale API for payment with card present devices including EMV readers and contactless POS readers.  The API is available from https://github.com/citypay/citypay-pos-api  The API makes it simple to add EMV and contactless card acceptance to iOS, Android, Tablet and desktop applicaitons using a HTTPS protocol. It segregates the complexity of payment processing from the sales environment and eliminates any necessity for the target system to handle card data. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dev@citypay.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { TransactionData } from './transactionData';


export interface TransactionResult {
    /**
     * A description of the status of a transaction
     */
    status?: string;
    /**
     * The indentifier uniquely identifying the transaction
     */
    identifier?: string;
    /**
     * A boolean value stating whether the transaction has completed. The value will be false if the transaction is in progress. Should the value be true, a property containing the transaction details is made available.
     */
    isComplete?: boolean;
    data?: TransactionData;
}
