export const fluxpayData = {
  title: 'FluxPay',
  service: 'Payment Ledger Platform',
  timeline: 'Dec 2025 - Feb 2026 (3 months)',
  role: 'Full Stack Developer',
  githubUrl: 'https://github.com/wilku702/fluxpay',
  techStack: ['React.js', 'Spring Boot', 'PostgreSQL', 'Redis', 'Kafka', 'Docker'],
  description: `FluxPay is a full-stack payment ledger built with double-entry bookkeeping at its core. A React 19 SPA sits on top of a Spring Boot API backed by PostgreSQL, Redis, and Kafka — handling deposits, withdrawals, and account-to-account transfers with idempotency guarantees, optimistic concurrency control, and real-time balance caching.`,
  images: [
    {
      src: '/projects/fluxpay/01-login.png',
      alt: 'FluxPay split-screen login page with branded hero panel and sign-in form'
    }
  ],
  sections: [
    {
      headerType: 'h3',
      title: 'ARCHITECTURE',
      contentType: 'split-content',
      content:
        'The frontend is a React 19 SPA built with Vite and Framer Motion, communicating with a Spring Boot 3.2 REST API secured by JWT authentication and a rate-limiting filter. PostgreSQL handles persistent storage with Flyway-managed migrations, while Redis provides a balance caching layer and Kafka powers async event streaming for daily account summaries.',
      list: [
        'Double-entry bookkeeping — every transfer creates paired DEBIT and CREDIT records linked by a correlation ID',
        'Idempotency keys checked inside the @Transactional boundary to prevent duplicate processing',
        'Optimistic locking with automatic retry (up to 3 attempts) on concurrent balance conflicts',
        'Redis balance cache with configurable TTL and graceful fallback when unavailable'
      ],
      images: []
    },
    {
      headerType: 'h3',
      title: 'DASHBOARD',
      contentType: 'demonstration',
      position: 'left',
      content:
        'The main dashboard surfaces all linked accounts with real-time balances, a quick-transfer shortcut, and an interactive balance trend chart. Account cards show current balance and account type at a glance, with click-through to full transaction history.',
      images: [
        {
          src: '/projects/fluxpay/02-dashboard-load.png',
          alt: 'FluxPay dashboard showing account cards, quick transfer widget, and balance trend chart'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'ACCOUNT DETAIL',
      contentType: 'demonstration',
      position: 'right',
      content:
        'Drilling into an account reveals a balance trend line, a credits-vs-debits breakdown chart, and a paginated transaction history table. Chart tooltips display exact balances on hover, and the transaction list shows type, amount, status, and timestamp for every ledger entry.',
      images: [
        {
          src: '/projects/fluxpay/04-account-detail.png',
          alt: 'Checking account detail page with balance trend chart, credits and debits breakdown, and transaction history table'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'TRANSACTIONS',
      contentType: 'showcase',
      deviceFrame: 'browser',
      content:
        'Deposits, withdrawals, and transfers each flow through the same idempotent pipeline — a client-generated UUID prevents duplicate processing, and optimistic locking with automatic retry handles concurrent access to the same account.',
      images: [
        {
          src: '/projects/fluxpay/05-deposit-tabs.png',
          alt: 'Deposit and Withdraw page with tab navigation and filled deposit form',
          caption: 'Deposit & Withdraw',
          description: 'Tabbed interface for depositing into or withdrawing from any account.'
        },
        {
          src: '/projects/fluxpay/06-transfer.png',
          alt: 'Transfer funds form showing Checking to Savings transfer of $1,500',
          caption: 'Transfer Funds',
          description: 'Account-to-account transfers that create paired double-entry ledger records.'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'DATA VISUALIZATION',
      contentType: 'demonstration',
      position: 'left',
      content:
        'Balance history charts render with Recharts and support interactive tooltips showing exact balances at any point in time. The credits-vs-debits bar chart gives a quick visual breakdown of money flowing in and out of each account.',
      images: [
        {
          src: '/projects/fluxpay/07-chart-hover.png',
          alt: 'Balance chart with hover tooltip displaying Feb 18 balance of $3,950.00'
        }
      ]
    },
    {
      headerType: 'h3',
      title: 'MOBILE RESPONSIVE',
      contentType: 'demonstration',
      position: 'right',
      content:
        'The entire interface adapts to mobile viewports — account cards stack vertically, the navigation collapses into a hamburger menu, and charts resize to fit smaller screens without losing interactivity.',
      images: [
        {
          src: '/projects/fluxpay/08-mobile.png',
          alt: 'FluxPay mobile responsive view at 390px showing stacked account cards and hamburger navigation'
        }
      ]
    }
  ]
};
