# FashionHub Automation Test Suite

**Technical Challenge – QA Team Lead**

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

Command,Environment,Description
npm run test,Production,Default (recommended)
npm run test:prod,Production,Same as above
npm run test:staging,Staging,Uses staging URL
npm run test:local,Local,Uses localhost:4000

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

This solution meets all requirements of the challenge:

Runs on any browser
Works against Local / Staging / Production
Well-structured and production-ready
Easy to maintain and extend


Made with ❤️ for the QA Team Lead position
