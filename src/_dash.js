import React from 'react'
//import * as FcIcons from 'react-icons/fc'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/co2',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavTitle',
    anchor: 'Emission Calculate',
  },

  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Combustion (Scope 1)',
    to: '/to',
    icon: <CIcon name="cil-puzzle" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Stationary',
        to: '/table',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Mobile',
        to: '/tableMobile',
      },
    ],
  },

  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Electricity (Scope 2)',
    to: '/to',
    icon: <CIcon name="cil-puzzle" customClasses="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Purchased Electricity',
        to: '/tableElectricity',
      },
    ],
  },
]

export default _nav
