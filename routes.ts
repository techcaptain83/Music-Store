export const dashboardRoutesPrefix = '/dashboard'
export const dashboardRoutes = {
  seller: {
    index: {
      name: 'Dashboard',
      path: '',
      params: {},
      icon: 'dashboard.svg',
    },
    myStash: {
      name: 'My Stash',
      path: 'my-stash',
      params: {},
      icon: 'box.svg',
    },
    payouts: {
      name: 'Payouts',
      path: 'payouts',
      params: {},
      icon: 'sales2.svg',
    },
  },
  user: {
    orderhistory: {
      name: 'Order History',
      path: 'order-history',
      params: {},
      icon: 'receipt.svg',
    },
    settings: {
      name: 'Settings',
      path: 'settings',
      params: {},
      icon: 'settings.svg',
    },
  },
} as const

export const dashboardRoutesSellerList = Object.values(dashboardRoutes.seller)
export const dashboardRoutesUserList = Object.values(dashboardRoutes.user)
