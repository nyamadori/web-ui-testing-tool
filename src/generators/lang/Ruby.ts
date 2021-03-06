import LanguageGenerator from '../../lib/LanguageGenerator'

export default class RubyGenerator extends LanguageGenerator {
  method (call, opts: {}, ...args) {
    return `${call}${this.argList(args, opts)}`
  }

  argList (args: any[], opts) {
    var inner = args.map((arg) => this.arg(arg))
    const optArgs = this.optionArg(opts)

    if (optArgs !== '') {
      inner = inner.concat(optArgs)
    }

    if (this.options['useParameterParentheses']) {
      return `(${inner.join(', ')})`
    } else {
      return ` ${inner.join(', ')}`
    }
  }

  arg (value) {
    console.log('arg', value)
    var type = typeof value

    if (type === 'object' && value.rubyType) {
      type = value.rubyType
    }

    return this[`${type}Literal`](value)
  }

  optionArg (opts = {}) {
    var args = []

    for (const key in opts) {
      const value = opts[key]
      args.push(`${key}: ${this.arg(value)}`)
    }

    return args.join(', ')
  }

  stringLiteral (value) {
    if (this.options['stringLiteralType'] === 'singleQuote') {
      return `'${value}'`
    } else {
      return `"${value}"`
    }
  }

  numberLiteral (value) {
    return value
  }

  symbolValue (label) {
    return { rubyType: 'symbol', label: label }
  }

  symbolLiteral (symbol) {
    return `:${symbol.label}`
  }
}
