# Real-Time Embedded Sensor Data Pipeline

A comprehensive real-time monitoring and analytics dashboard for embedded sensor data pipelines. This application provides enterprise-grade visualization, performance tracking, and deployment monitoring for IoT sensor networks.

![Dashboard Overview](https://img.shields.io/badge/Status-Active-success)
![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![React](https://img.shields.io/badge/React-19-61dafb)

## 🚀 Features

### Core Capabilities
- **Real-Time Monitoring**: Live tracking of 24+ sensors across multiple locations
- **Performance Analytics**: Comprehensive metrics for latency, throughput, and system health
- **Data Quality Management**: Monitor data completeness, accuracy, and validation
- **Deployment Tracking**: CI/CD pipeline monitoring with environment health checks
- **Interactive Dashboards**: Rich visualizations with responsive charts and graphs
- **Alert System**: Real-time notifications for sensor status changes and anomalies

### Dashboard Sections

#### 1. Overview Dashboard
- Key Performance Indicators (KPIs) at a glance
- Latency reduction tracking (45% improvement)
- Throughput monitoring (30% improvement)
- Active sensor status (24 sensors online)
- Query speed optimization (40% faster)
- Real-time latency and throughput charts
- Recent events timeline

#### 2. Sensor Monitoring
- Comprehensive sensor grid view
- Support for multiple sensor types:
  - Temperature sensors
  - Pressure sensors
  - Humidity sensors
  - Vibration sensors
  - Flow sensors
- Filter by sensor type and status
- Detailed sensor information modals
- Real-time status updates (online/warning/offline)
- Historical data visualization

#### 3. Analytics & Performance
- Performance metrics overview
- Latency distribution analysis
- Throughput trend tracking
- Data quality metrics (98.7% completeness)
- Error rate monitoring
- Sensor utilization statistics
- P95/P99 latency tracking

#### 4. Deployments & CI/CD
- Multi-environment monitoring (Production, Staging, Development)
- System uptime tracking (99.98%)
- Deployment timeline visualization
- Pipeline status monitoring
- Environment health indicators
- Automated deployment triggers

#### 5. Settings & Configuration
- System configuration management
- User preferences
- Theme customization (dark mode support)
- Notification settings

## 🛠️ Technology Stack

### Frontend
- **Framework**: Next.js 15.2.4 (React 19)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.9 with PostCSS
- **UI Components**: Radix UI primitives
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Form Handling**: React Hook Form with Zod validation
- **Date Handling**: date-fns
- **Animations**: tailwindcss-animate

### UI Component Library
- Custom component library built with shadcn/ui patterns
- 60+ reusable UI components including:
  - Cards, Buttons, Dialogs, Dropdowns
  - Charts, Tables, Forms
  - Accordions, Tabs, Tooltips
  - Modals, Alerts, Toasts
  - Progress indicators, Sliders
  - Navigation menus, Breadcrumbs

### Development Tools
- **Package Manager**: pnpm
- **Linting**: ESLint
- **Analytics**: Vercel Analytics

## 📦 Installation

### Prerequisites
- Node.js 18+ or 22+ recommended
- pnpm (recommended) or npm

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Real-Time-Embedded-Sensor-Data-Pipeline.git
   cd Real-Time-Embedded-Sensor-Data-Pipeline
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Usage

### Development Mode
```bash
pnpm dev
```
Starts the development server on `http://localhost:3000` with hot-reload enabled.

### Production Build
```bash
pnpm build
```
Creates an optimized production build.

### Start Production Server
```bash
pnpm start
```
Starts the production server (requires `pnpm build` first).

### Linting
```bash
pnpm lint
```
Runs ESLint to check code quality and style.

## 📁 Project Structure

```
Real-Time-Embedded-Sensor-Data-Pipeline/
├── app/                          # Next.js app directory
│   ├── analytics/               # Analytics page
│   ├── data/                    # Data management page
│   ├── deployments/             # Deployments monitoring page
│   ├── sensors/                 # Sensors monitoring page
│   ├── settings/                # Settings page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Home page
├── components/                   # React components
│   ├── ui/                      # Reusable UI components (60+ components)
│   ├── analytics-dashboard.tsx  # Analytics dashboard
│   ├── dashboard-nav.tsx        # Navigation component
│   ├── dashboard-overview.tsx   # Main dashboard
│   ├── sensor-monitoring.tsx    # Sensor monitoring
│   ├── deployments-monitor.tsx  # Deployment monitoring
│   ├── *-chart.tsx             # Various chart components
│   └── ...                      # Additional feature components
├── lib/                         # Utility functions and helpers
├── hooks/                       # Custom React hooks
├── public/                      # Static assets
├── styles/                      # Additional styles
├── components.json              # UI components configuration
├── next.config.mjs             # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 🎨 Key Components

### Dashboard Components
- **DashboardOverview**: Main dashboard with KPIs and overview
- **SensorMonitoring**: Comprehensive sensor grid and monitoring
- **AnalyticsDashboard**: Performance analytics and metrics
- **DeploymentsMonitor**: CI/CD and deployment tracking

### Chart Components
- **LatencyChart**: Real-time latency visualization
- **ThroughputChart**: Throughput trends and patterns
- **DataQualityChart**: Data quality metrics
- **ErrorRateChart**: Error tracking and analysis
- **SensorUtilizationChart**: Sensor usage statistics

### Data Components
- **SensorCard**: Individual sensor status display
- **MetricCard**: KPI metric display
- **SystemStatusCard**: Environment health status
- **PipelineStatus**: CI/CD pipeline status

## 🔧 Configuration

### TypeScript Configuration
The project uses strict TypeScript configuration with ES6 target and ESNext modules. Path aliases are configured for cleaner imports:
```typescript
"@/*": ["./*"]
```

### Next.js Configuration
- TypeScript build errors are ignored for flexibility
- Image optimization is disabled
- Configured for production deployment

### Styling
- Tailwind CSS 4.1.9 with custom configuration
- Dark mode enabled by default
- Custom CSS animations
- Responsive design for all screen sizes

## 🌐 Deployment

### Vercel (Recommended)
This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/johaankjis/Real-Time-Embedded-Sensor-Data-Pipeline)

### Other Platforms
The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Google Cloud Platform
- Self-hosted with Node.js

## 📊 Performance Metrics

The dashboard tracks and displays:
- **Latency Reduction**: 45% improvement vs baseline
- **Throughput Increase**: 30% improvement (2.4K events/sec)
- **Query Speed**: 40% faster (85ms average)
- **System Uptime**: 99.98% availability
- **Data Quality**: 98.7% completeness
- **Active Sensors**: 24 sensors across 3 deployments

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style and conventions
- Use TypeScript for type safety
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📝 License

This project is private and proprietary. All rights reserved.

## 👥 Authors

- **johaankjis** - [GitHub Profile](https://github.com/johaankjis)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components inspired by [shadcn/ui](https://ui.shadcn.com/)
- Icons by [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)
- Generated with [v0.app](https://v0.dev/)

## 📞 Support

For support, issues, or feature requests, please open an issue on GitHub.

---

**Note**: This is a dashboard application with simulated sensor data for demonstration purposes. For production use, integrate with your actual sensor data pipeline and backend services.
