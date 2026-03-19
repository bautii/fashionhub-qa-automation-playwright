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
git clone https://github.com/YOUR-USERNAME/fashionhub-qa-automation-playwright.git
cd fashionhub-qa-automation-playwright
npm install
