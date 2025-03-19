import { Tooltip } from 'antd';
import { CSSProperties } from 'react';

import { Row, Text } from '@/ui/components';
import { BtcDisplay } from '@/ui/pages/Main/WalletTabScreen/components/BtcDisplay';
import { fontSizes } from '@/ui/theme/font';

const $noBreakStyle: CSSProperties = {
  whiteSpace: 'nowrap',
  wordBreak: 'keep-all'
};

interface BalanceTooltipProps {
  avaiableAmount: string;
  unavailableAmount: string;
  totalAmount: string;
  balanceValue: string;
  btcUnit: string;
  unisatUrl: string;
  disableUtxoTools?: boolean;
}

export const BalanceTooltip = ({
  avaiableAmount,
  unavailableAmount,
  totalAmount,
  balanceValue,
  btcUnit,
  unisatUrl,
  disableUtxoTools = false
}: BalanceTooltipProps) => {
  return (
    <Tooltip
      placement={'bottom'}
      title={
        <>
          <div style={{ textAlign: 'left' }}>
            <Row>
              <span style={{ ...$noBreakStyle, width: 80 }}>{'Available '}</span>
              <span style={$noBreakStyle}>{` ${avaiableAmount} ${btcUnit}`}</span>
            </Row>
            <Row>
              <span style={{ ...$noBreakStyle, width: 80 }}>{'Unavailable '}</span>
              <span style={$noBreakStyle}>{` ${unavailableAmount} ${btcUnit}`}</span>
              {disableUtxoTools ? null : (
                <div
                  style={{
                    display: 'flex',
                    width: 50,
                    height: 20,
                    padding: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 10,
                    flexShrink: 0,
                    borderRadius: 4,
                    border: '1px solid rgba(244, 182, 44, 0.15)',
                    background: 'rgba(244, 182, 44, 0.10)',
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    window.open(`${unisatUrl}/utils/utxo`);
                  }}>
                  <Text
                    text="Unlock"
                    size="xs"
                    style={{
                      color: '#F4B62C',
                      fontFamily: 'Inter',
                      fontWeight: 500
                    }}
                  />
                </div>
              )}
            </Row>
            <Row>
              <span style={{ ...$noBreakStyle, width: 80 }}>{'Total '}</span>
              <span style={$noBreakStyle}>{` ${totalAmount} ${btcUnit}`}</span>
            </Row>
          </div>
        </>
      }
      overlayStyle={{
        fontSize: fontSizes.xs
      }}>
      <div>
        <Text text={'TOTAL BALANCE'} textCenter color="textDim" />
        <BtcDisplay balance={balanceValue} />
      </div>
    </Tooltip>
  );
};
