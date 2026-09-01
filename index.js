const NAV_ACTIVE_CLASS = 'text-vodafone-red dark:text-primary-container border-b-2 border-vodafone-red pb-1 font-bold text-label-md hover:text-vodafone-red dark:hover:text-primary-container transition-colors cursor-pointer';
const NAV_INACTIVE_CLASS = 'text-secondary dark:text-secondary-fixed-dim font-medium text-label-md hover:text-vodafone-red dark:hover:text-primary-container transition-colors cursor-pointer';
const MOBILE_ACTIVE_CLASS = 'text-vodafone-red font-bold text-label-md px-3 py-3 rounded-lg bg-vodafone-red/10 hover:bg-vodafone-red/15 transition-colors cursor-pointer';
const MOBILE_INACTIVE_CLASS = 'text-secondary dark:text-secondary-fixed-dim font-medium text-label-md px-3 py-3 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer';

function toggleMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    menu.classList.toggle('hidden');
    icon.textContent = menu.classList.contains('hidden') ? 'menu' : 'close';
}

function showPage(name) {
    const calculator = document.getElementById('page-calculator');
    const home = document.getElementById('page-home');
    const rules = document.getElementById('page-rules');
    const packages = document.getElementById('page-packages');
    const lines = document.getElementById('page-lines');
    const navLog = document.getElementById('nav-log');
    const navHome = document.getElementById('nav-home');
    const navRules = document.getElementById('nav-rules');
    const navPackages = document.getElementById('nav-packages');
    const navLines = document.getElementById('nav-lines');
    const navMLog = document.getElementById('nav-m-log');
    const navMHome = document.getElementById('nav-m-home');
    const navMRules = document.getElementById('nav-m-rules');
    const navMPackages = document.getElementById('nav-m-packages');
    const navMLines = document.getElementById('nav-m-lines');

    calculator.classList.add('hidden');
    home.classList.add('hidden');
    rules.classList.add('hidden');
    packages.classList.add('hidden');
    lines.classList.add('hidden');
    navLog.className = NAV_INACTIVE_CLASS;
    navHome.className = NAV_INACTIVE_CLASS;
    navRules.className = NAV_INACTIVE_CLASS;
    navPackages.className = NAV_INACTIVE_CLASS;
    navLines.className = NAV_INACTIVE_CLASS;
    navMLog.className = MOBILE_INACTIVE_CLASS;
    navMHome.className = MOBILE_INACTIVE_CLASS;
    navMRules.className = MOBILE_INACTIVE_CLASS;
    navMPackages.className = MOBILE_INACTIVE_CLASS;
    navMLines.className = MOBILE_INACTIVE_CLASS;

    if (name === 'home') {
        home.classList.remove('hidden');
        navHome.className = NAV_ACTIVE_CLASS;
        navMHome.className = MOBILE_ACTIVE_CLASS;
    } else if (name === 'rules') {
        rules.classList.remove('hidden');
        navRules.className = NAV_ACTIVE_CLASS;
        navMRules.className = MOBILE_ACTIVE_CLASS;
    } else if (name === 'packages') {
        packages.classList.remove('hidden');
        navPackages.className = NAV_ACTIVE_CLASS;
        navMPackages.className = MOBILE_ACTIVE_CLASS;
    } else if (name === 'lines') {
        lines.classList.remove('hidden');
        navLines.className = NAV_ACTIVE_CLASS;
        navMLines.className = MOBILE_ACTIVE_CLASS;
    } else {
        calculator.classList.remove('hidden');
        navLog.className = NAV_ACTIVE_CLASS;
        navMLog.className = MOBILE_ACTIVE_CLASS;
    }

    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    menu.classList.add('hidden');
    icon.textContent = 'menu';
}

// Set initial state based on toggle class
let isPostpaid = document.getElementById('mode-toggle').classList.contains('is-postpaid');

function toggleMode() {
    const toggle = document.getElementById('mode-toggle');
    const postpaidPanel = document.getElementById('postpaid-panel');
    const prepaidPanel = document.getElementById('prepaid-panel');
    
    isPostpaid = !isPostpaid;
    
    if (isPostpaid) {
        toggle.classList.remove('is-prepaid');
        toggle.classList.add('is-postpaid');
        prepaidPanel.classList.remove('active');
        postpaidPanel.classList.add('active');
        calculatePostpaid();
    } else {
        toggle.classList.remove('is-postpaid');
        toggle.classList.add('is-prepaid');
        postpaidPanel.classList.remove('active');
        prepaidPanel.classList.add('active');
        calculatePrepaid();
    }
}

function formatCurrency(num) {
    return num.toFixed(2) + ' ج.م';
}

function calculatePostpaid() {
    const inputVal = parseFloat(document.getElementById('postpaid-input').value) || 0;
    const tax = inputVal * 0.23;
    const fixedFee = 11.5;
    const total = inputVal + tax + fixedFee;

    document.getElementById('postpaid-base').innerText = formatCurrency(inputVal);
    document.getElementById('postpaid-tax').innerText = formatCurrency(tax);
    document.getElementById('postpaid-total').innerText = formatCurrency(total);
}

function calculatePrepaid() {
    const inputVal = parseFloat(document.getElementById('prepaid-input').value) || 0;
    const factor = 1.43;
    const total = inputVal * factor;
    const taxAmount = total - inputVal;

    document.getElementById('prepaid-base').innerText = formatCurrency(inputVal);
    document.getElementById('prepaid-tax-amount').innerText = formatCurrency(taxAmount);
    document.getElementById('prepaid-total').innerText = formatCurrency(total);
}

// Initialize calculations
calculatePostpaid();
calculatePrepaid();

function switchPackageTab(tab) {
    const flexTab = document.getElementById('tab-flex');
    const redTab = document.getElementById('tab-red');
    const flexContent = document.getElementById('packages-flex');
    const redContent = document.getElementById('packages-red');

    if (tab === 'flex') {
        flexTab.className = 'px-8 py-3 rounded-lg text-body-lg font-bold transition-all duration-200 bg-vodafone-red text-white shadow-sm';
        redTab.className = 'px-8 py-3 rounded-lg text-body-lg font-bold transition-all duration-200 text-secondary hover:text-on-surface';
        flexContent.classList.remove('hidden');
        redContent.classList.add('hidden');
    } else {
        redTab.className = 'px-8 py-3 rounded-lg text-body-lg font-bold transition-all duration-200 bg-vodafone-red text-white shadow-sm';
        flexTab.className = 'px-8 py-3 rounded-lg text-body-lg font-bold transition-all duration-200 text-secondary hover:text-on-surface';
        redContent.classList.remove('hidden');
        flexContent.classList.add('hidden');
    }
}