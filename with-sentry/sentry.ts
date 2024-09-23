// Context: https://docs.sentry.io/platforms/javascript/best-practices/shared-environments/
// This really only applies to content scripts that are executed, but we'll set it up for the whole extension here.

import {
  BrowserClient,
  defaultStackParser,
  getDefaultIntegrations,
  makeFetchTransport,
  Scope
} from "@sentry/browser";

const integrations = getDefaultIntegrations({}).filter((defaultIntegration) => {
  return !["BrowserApiErrors", "Breadcrumbs", "GlobalHandlers"].includes(
    defaultIntegration.name
  );
});

const sentryClient = new BrowserClient({
  dsn: process.env.PLASMO_PUBLIC_SENTRY_DSN,
  stackParser: defaultStackParser,
  integrations,
  transport: makeFetchTransport
});

const sentryScope = new Scope();
sentryScope.setClient(sentryClient);

sentryClient.init(); // initializing has to be done after setting the client on the scope

export const scope = sentryScope;
export const client = sentryClient;