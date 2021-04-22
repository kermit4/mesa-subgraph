// Contract ABIs and Events
import {
  NewTokenRelease,
  SaleClosed,
  NewTokenClaim,
  NewPurchase
} from '../../../generated/FixedPriceSale/FixedPriceSale'

// GraphQL Schemas
import { FixedPriceSale, FixedPriceSalePurchase } from '../../../generated/schema'

// Helpers
import { SALE_STATUS } from '../../helpers/sales'

export function handleSaleClosed(event: SaleClosed): void {
  let fixedPriceSale = FixedPriceSale.load(event.address.toHexString())
  if (!fixedPriceSale) {
    return
  }
  fixedPriceSale.status = SALE_STATUS.ENDED
  fixedPriceSale.updatedAt = event.block.timestamp.toI32()
  fixedPriceSale.save()
}

/**
 * WIP
 */
export function handleNewPurchase(event: NewPurchase): void {
  let fixedPriceSale = FixedPriceSale.load(event.address.toHexString())
  if (!fixedPriceSale) {
    return
  }
  let purchase = new FixedPriceSalePurchase(event.block.timestamp.toString())
  purchase.sale = event.address.toHexString()
  purchase.createdAt = event.block.timestamp.toI32()
  purchase.updatedAt = event.block.timestamp.toI32()
  purchase.amount = event.params.amount.toBigDecimal()
  purchase.buyer = event.params.buyer
  purchase.save()
}

/**
 * WIP
 */
export function handleNewTokenClaim(event: NewTokenClaim): void {
  // minimum raise
}

/**
 * WIP
 */
export function handleNewTokenRelease(event: NewTokenRelease): void {
  // tokens are swapped; sent to investors
  //
  let fixedPriceSale = FixedPriceSale.load(event.address.toHexString())
  if (!fixedPriceSale) {
    return
  }

  fixedPriceSale.status = SALE_STATUS.SETTLED
  fixedPriceSale.save()
}