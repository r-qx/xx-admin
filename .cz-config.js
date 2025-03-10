module.exports = {
  types: [
    { value: 'feat', name: 'feat: 新功能' },
    { value: 'fix', name: 'fix: 修复' }
  ],
  messages: {
    type: '选择提交类型：',
    customScope: '范围：',
    subject: '简要描述：',
    body: '详细描述：',
    footer: 'issue：',
    confirmCommit: '以上信息提交？（y/n/e/h）'
  },
  skipQuestions: ['body', 'footer'],
  subjectLimit: 72
}
