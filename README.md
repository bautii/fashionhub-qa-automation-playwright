# FashionHub Automation Test Suite

**Technical Challenge – QA Team Lead (m/f/d)**

Automated test suite built with **Playwright + TypeScript** for the FashionHub demo application.

### ✨ Features
- ✅ Cross-browser testing (Chrome, Firefox, Safari)
- ✅ Multi-environment support: **Local • Staging • Production**
- ✅ Smart configuration priority:  
  `BASE_URL` (env) > `test-config.json` > Default (Production)
- ✅ Clean Page Object Model (POM) – easy to maintain and scale
- ✅ Ready for Docker, Jenkins and CI/CD
- ✅ HTML report + automatic traces & screenshots on failure

### Implemented Scenario
**As a customer, I want to verify I can log in**

- Given a valid user provides the right username & password  
- When the user tries to login  
- Then user should see a welcome message with his username

**Login credentials**  
**Username:** `demouser`  
**Password:** `fashion123`

---

### Prerequisites
- Node.js 18+
- npm 9+
- Docker (only for local app)

---

### 1. Installation

```bash
git clone https://github.com/bautii/fashionhub-qa-automation-playwright.git
cd fashionhub-qa-automation-playwright
npm install

2. Running the Tests

CommandEnvironmentDescriptionnpm run testProductionDefault (recommended)npm run test:prodProductionSame as abovenpm run test:stagingStagingUses staging URLnpm run test:localLocalUses http://localhost:4000/fashionhub/
Custom URL (highest priority):
BashBASE_URL=https://staging-env/fashionhub/ npm test

3. Environment Configuration
Priority order:

Environment variable BASE_URL
File test-config.json (copy from test-config.json.example)
Default: https://pocketaces2.github.io/fashionhub/


4. Running Locally with Docker
Bash# 1. Start the app
docker run -d -p 4000:80 pocketaces2/fashionhub-demo-app

# 2. Run tests
BASE_URL=http://localhost:4000/fashionhub/ npm test

5. View Report
Bashnpm run report
Opens a beautiful HTML report with videos, traces and screenshots.

6. CI/CD Ready

GitHub Actions included (.github/workflows/ci.yml)
Ready for Jenkins + Docker
Parallel execution on 3 browsers


Project Structure
textpages/                 → Page Object Model
tests/                 → Test cases (BDD style)
playwright.config.ts   → All configuration
test-config.json       → Optional environment file

Troubleshooting

IssueSolutionPort 4000 already in usedocker stop $(docker ps -q)BASE_URL not detectedUse BASE_URL=... npm test or create test-config.jsonPlaywright browsers missingnpx playwright installWelcome message not foundCheck you are using the correct BASE_URLDocker image not founddocker pull pocketaces2/fashionhub-demo-appReport not openingnpx playwright show-report

This solution meets 100% of the challenge requirements

Cross-browser
Multi-environment
Production-ready structure
Easy to maintain and extend


Made with ❤️ 
