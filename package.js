Package.describe({
  name: 'lindoelio:office365-oauth',
  version: '0.1.0',
  summary: 'Microsoft Office 365 OAuth flow',
  git: 'https://github.com/lindoelio/meteor-office365-oauth',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('ecmascript');
  api.use('oauth2', ['client', 'server']);
  api.use('oauth', ['client', 'server']);
  api.use('http', 'server');
  api.use('underscore', 'server');
  api.use('random', 'client');
  api.use('service-configuration', ['client', 'server']);

  api.addFiles('office365_client.js', 'client');
  api.addFiles('office365_server.js', 'server');

  api.export('Office365');
});