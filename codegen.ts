import dotenv from 'dotenv'
import type { CodegenConfig } from '@graphql-codegen/cli'

dotenv.config({ path: '.env' })

const config: CodegenConfig = {
  overwrite: true,
  schema: './schema.graphql',
  generates: {
    'generated/schema.ts': {
      plugins: ['typescript'],
    },
  },
}

export default config
