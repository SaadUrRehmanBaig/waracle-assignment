import { validateSync } from 'class-validator';
import { EnvConfig } from './dtos/env-dto';

export function validateEnv(config: Record<string, any>) {
  const validatedConfig = Object.assign(new EnvConfig(), config);
  validatedConfig.PORT = parseInt(config.PORT, 10);
  const errors = validateSync(validatedConfig);
  if (errors.length > 0) {
    console.error(
      'Invalid environment configuration:',
      errors.map((e) => e.constraints),
    );
    process.exit(1);
  }
  return validatedConfig;
}
