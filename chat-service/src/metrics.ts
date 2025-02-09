import { collectDefaultMetrics, Registry } from 'prom-client';
import promBundle from 'express-prom-bundle';
import { Request, Response } from 'express';

// Configuração do registry
const registry = new Registry();
collectDefaultMetrics({ register: registry });

// Middleware para métricas HTTP
const metricsMiddleware = promBundle({
  autoregister: false,
  includeMethod: true,
  includePath: true,
  customLabels: { service: process.env.SERVICE_NAME },
  promRegistry: registry,
});

// Endpoint separado para métricas
const metricsEndpoint = (req: Request, res: Response) => {
  res.set('Content-Type', registry.contentType);
  registry.metrics().then(data => res.send(data));
};

export { metricsMiddleware, metricsEndpoint, registry };