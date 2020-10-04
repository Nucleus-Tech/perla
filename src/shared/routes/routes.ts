export const onboardingRoute = () => `/onboarding`;
export const loginRoute = () => `${onboardingRoute()}/login`;
export const registrationRoute = () => `${onboardingRoute()}/registration`;

export const dashboardRoute = () => `/dashboard`;
export const homeRoute = () => `${dashboardRoute()}/home`;
export const aboutUsRoute = () => `${dashboardRoute()}/about-us`;

export const exploreRoute = () => `${dashboardRoute()}/explore`;
