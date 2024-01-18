// gatsby-node.js
const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allContentfulProjects {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  result.data.allContentfulProjects.edges.forEach(({ node }) => {
    createPage({
      path: `/projects/${node.id}`,
      component: path.resolve(`./src/templates/project-page.tsx`),
      context: {
        id: node.id,
      },
    });
  }); 
};
