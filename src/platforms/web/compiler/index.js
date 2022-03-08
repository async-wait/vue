/* @flow */

import { baseOptions } from './options'
import { createCompiler } from 'compiler/index'

// 这里是通过createCompiler解构出来的compileToFunctions
const { compile, compileToFunctions } = createCompiler(baseOptions)

export { compile, compileToFunctions }
