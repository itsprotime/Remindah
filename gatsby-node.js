const path = require('path');

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const CheatSheet = path.resolve('src/templates/CheatSheet.js');

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    return Promise.reject(result.errors);
  }

  return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: CheatSheet,
      context: {}, // additional data can be passed via context
    });
  });
};
