import dotenv from 'dotenv'
import type { CodegenConfig } from '@graphql-codegen/cli'

dotenv.config({ path: '.env' })

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GRAPHQL_URL,
  generates: {
    'gql/schema/types.ts': {
      plugins: ['typescript'],
    },
  },
}

export default config
