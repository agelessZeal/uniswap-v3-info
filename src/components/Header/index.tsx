/* eslint-disable @typescript-eslint/no-var-requires */
// import { ChainId } from '@uniswap/sdk'
import React from 'react'
// import { Text } from 'rebass'
import { NavLink } from 'react-router-dom'
import { darken } from 'polished'

import styled from 'styled-components'

// import Logo from '../../assets/svg/logo.svg'
import LogoDark from '../../assets/svg/logo_white.svg'
// import { useActiveWeb3React } from '../../hooks'
// import { useDarkModeManager } from '../../state/user/hooks'
// import { useETHBalances } from '../../state/wallet/hooks'

// import { YellowCard } from '../Card'
// import { Moon, Sun } from 'react-feather'
import Menu from '../Menu'

import Row, { RowFixed } from '../Row'
// import Web3Status from '../Web3Status'
import SearchSmall from 'components/Search'
import { HideMedium } from 'theme'

const HeaderFrame = styled.div`
  display: grid;
  grid-template-columns: 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 2;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  background-color: ${({ theme }) => theme.bg0};

  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    padding: 0 1rem;
    width: calc(100%);
    position: relative;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        padding: 0.5rem 1rem;
  `}
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;

  ${({ theme }) => theme.mediaWidth.upToMedium`
      padding-bottom: 1rem;
      width: 100%;
  `};
`

// const HeaderElement = styled.div`
//   display: flex;
//   align-items: center;

//   /* addresses safari's lack of support for "gap" */
//   & > *:not(:first-child) {
//     margin-left: 8px;
//   }

//   ${({ theme }) => theme.mediaWidth.upToMedium`
//    flex-direction: row-reverse;
//     align-items: center;
//   `};
// `

const HeaderElementWrap = styled.div`
  display: flex;
  align-items: center;
`

const HeaderRow = styled(RowFixed)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
   width: 100%;
  `};
`

const HeaderLinks = styled(Row)`
  justify-content: center;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 1rem 0 1rem 1rem;
    justify-content: flex-end;
`};
`

// const AccountElement = styled.div<{ active: boolean }>`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   background-color: ${({ theme, active }) => (!active ? theme.bg0 : theme.bg1)};
//   border-radius: 12px;
//   white-space: nowrap;
//   width: 100%;
//   cursor: pointer;

//   :focus {
//     border: 1px solid blue;
//   }
// `

// const HideSmall = styled.span`
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     display: none;
//   `};
// `

// const NetworkCard = styled(YellowCard)`
//   border-radius: 12px;
//   padding: 8px 12px;
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     margin: 0;
//     margin-right: 0.5rem;
//     width: initial;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     flex-shrink: 1;
//   `};
// `

// const BalanceText = styled(Text)`
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//     display: none;
//   `};
// `

const Title = styled(NavLink)`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  :hover {
    cursor: pointer;
  }
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
  `};
`

const UniIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

const activeClassName = 'ACTIVE'

const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text3};
  font-size: 1rem;
  width: fit-content;
  margin: 0 6px;
  padding: 8px 12px;
  font-weight: 500;

  &.${activeClassName} {
    border-radius: 12px;
    background-color: ${({ theme }) => theme.bg2};
    color: ${({ theme }) => theme.text1};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
`

export const StyledMenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};
  margin-left: 8px;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`

// const NETWORK_LABELS: { [chainId in ChainId]?: string } = {
//   [ChainId.RINKEBY]: 'Rinkeby',
//   [ChainId.ROPSTEN]: 'Ropsten',
//   [ChainId.GÖRLI]: 'Görli',
//   [ChainId.KOVAN]: 'Kovan',
// }

export default function Header() {
  // const { account, chainId } = useActiveWeb3React()

  // const userEthBalance = useETHBalances(account ? [account] : [])?.[account ?? '']
  // const [isDark] = useDarkModeManager()
  // const [darkMode, toggleDarkMode] = useDarkModeManager()

  return (
    <HeaderFrame>
      <HeaderRow>
        <Title to="/">
          <UniIcon>
            <img width={'24px'} src={LogoDark} alt="logo" />
          </UniIcon>
        </Title>
        <HeaderLinks>
          <StyledNavLink id={`pool-nav-link`} to={'/'} isActive={(match, { pathname }) => pathname === '/'}>
            Overview
          </StyledNavLink>
          {/* <StyledNavLink id={`swap-nav-link`} to={'/protocol'}>
            Protocol
          </StyledNavLink> */}
          <StyledNavLink id={`stake-nav-link`} to={'/pools'}>
            Pools
          </StyledNavLink>
          <StyledNavLink id={`stake-nav-link`} to={'/tokens'}>
            Tokens
          </StyledNavLink>
          {/* <StyledNavLink id={`stake-nav-link`} to={'/wallet'}>
            Wallet
          </StyledNavLink> */}
        </HeaderLinks>
      </HeaderRow>
      <HeaderControls>
        <SearchSmall />
        {/* <HeaderElement>
          <HideSmall>
            {chainId && NETWORK_LABELS[chainId] && (
              <NetworkCard title={NETWORK_LABELS[chainId]}>{NETWORK_LABELS[chainId]}</NetworkCard>
            )}
          </HideSmall>
          <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
            {account && userEthBalance ? (
              <BalanceText style={{ flexShrink: 0 }} pl="0.75rem" pr="0.5rem" fontWeight={500}>
                {userEthBalance?.toSignificant(4)} ETH
              </BalanceText>
            ) : null}
            <Web3Status />
          </AccountElement>
        </HeaderElement> */}
        <HideMedium>
          <HeaderElementWrap>
            {/* <StyledMenuButton onClick={() => toggleDarkMode()}>
            {darkMode ? <Moon size={20} /> : <Sun size={20} />}
          </StyledMenuButton> */}
            <Menu />
          </HeaderElementWrap>
        </HideMedium>
      </HeaderControls>
    </HeaderFrame>
  )
}
