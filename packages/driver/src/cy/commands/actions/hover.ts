import $errUtils from '../../../cypress2/error_utils'

export default (Commands) => {
  return Commands.addAll({ prevSubject: 'element' }, {
    hover () {
      return $errUtils.throwErrByPath('hover.not_implemented')
    },
  })
}
