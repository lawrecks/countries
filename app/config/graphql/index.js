import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const graphqlConfig = (app) => {
  // schema
  const schema = buildSchema(`
    type Query {
        message: String
        type: String
    }
`);

  // Root resolver
  const root = {
    message: () => 'Welcome!',
    type: () => 'graphql',
  };

  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      rootValue: root,
      graphiql: true,
    }),
  );
};

export default graphqlConfig;
