# FashionHub Automation Test Suite

**Technical Challenge – QA Team Lead (m/f/d)**

Automated test suite built with **Playwright + TypeScript** for the FashionHub demo application.

### Features
- ✅ Cross-browser testing (Chrome, Firefox, Safari)
- ✅ Multi-environment support: Local, Staging, Production
- ✅ Configuration priority: Command Line / Environment Variable > `test-config.json` > Default (Production)
- ✅ Page Object Model (POM) for easy maintenance and scalability
- ✅ Ready for Docker, Jenkins, and CI/CD pipelines
- ✅ HTML report + automatic traces and screenshots on failure

### Implemented Scenario
**As a customer, I want to verify I can log in**  
- Given a valid user provides the right username & password  
- When the user tries to login  
- Then user should see a welcome message with his username

**Login credentials**:  
Username: `demouser`  
Password: `fashion123`

---

### Prerequisites
- Node.js 18+  
- npm 9+  
- Docker (only if running the app locally)

---

### 1. Installation

```bash
git clone https://github.com/bautii/fashionhub-qa-automation-playwright.git
cd fashionhub-qa-automation-playwright
npm install

2. Running the Tests

CommandEnvironmentDescriptionnpm run testProductionDefault (recommended)npm run test:prodProductionSame as abovenpm run test:stagingStagingUses staging URLnpm run test:localLocalUses localhost:4000
Example with custom URL (highest priority):
BashBASE_URL=https://staging-env/fashionhub/ npm test

3. Environment Configuration
The framework checks in this order:

Environment variableBASE_URL (highest priority)
Filetest-config.json (copy test-config.json.example and edit)
Default: https://pocketaces2.github.io/fashionhub/

Example test-config.json:
JSON{
  "baseURL": "http://localhost:4000/fashionhub/"
}

4. Running Locally with Docker

Start the FashionHub app:Bashdocker run -d -p 4000:80 pocketaces2/fashionhub-demo-app
Run the tests:BashBASE_URL=http://localhost:4000/fashionhub/ npm test


5. View Test Report
Bashnpm run report
Opens a beautiful HTML report in your browser with videos, traces and screenshots.

6. CI/CD Ready

GitHub Actions workflow included (.github/workflows/ci.yml)
Designed to run in Jenkins with Docker containers
Parallel execution across browsers


Project Structure (clean & scalable)
textpages/          → Page Object Model
tests/          → Test cases (BDD style)
playwright.config.ts → All configuration
test-config.json    → Optional environment file

Troubleshooting

IssueSolutionPort 4000 already in usedocker stop $(docker ps -q) or change port in Docker commandBASE_URL not detectedUse BASE_URL=... npm test or create test-config.jsonPlaywright browsers not installedRun npx playwright installTest fails with "Welcome message not found"Check you are using the correct BASE_URL (Production by default)Permission denied / EACCESRun npm install with sudo or fix permissions on node_modulesDocker image not foundPull first: docker pull pocketaces2/fashionhub-demo-appTests run too slowAdd --workers=3 to package.json scripts or use headed mode for debugReport not openingRun npx playwright show-report manually
If you still have issues, check the console output and the test-results/ folder (traces are automatically saved).

This solution meets all requirements of the challenge:

Runs on any browser
Works against Local / Staging / Production
Well-structured and production-ready
Easy to maintain and extend


Made with ❤️
