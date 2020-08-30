module.exports = [
  // Message Container
  ['vuepress-plugin-container', {
    type: 'custom-error',
    before: (info) => `<div class="custom-block error"><p class="custom-title">${info}</p>`,
    after: '</div>'
  }],
  ['vuepress-plugin-container', {
    type: 'custom-warn',
    before: (info) => `<div class="custom-block warn"><p class="custom-title">${info}</p>`,
    after: '</div>'
  }],
  ['vuepress-plugin-container', {
    type: 'custom-info',
    before: (info) => `<div class="custom-block info"><p class="custom-title">${info}</p>`,
    after: '</div>'
  }],
  ['vuepress-plugin-container', {
    type: 'custom-tips',
    before: (info) => `<div class="custom-block tips"><p class="custom-title">${info}</p>`,
    after: '</div>',
  }],
  // Align Container
  ['vuepress-plugin-container', {
    type: 'align-left',
    before: `<div class="align-block left">`,
    after: `</div>`
  }],
  ['vuepress-plugin-container', {
    type: 'align-center',
    before: `<div class="align-block center">`,
    after: `</div>`
  }],
  ['vuepress-plugin-container', {
    type: 'align-right',
    before: `<div class="align-block right">`,
    after: `</div>`
  }]
]
