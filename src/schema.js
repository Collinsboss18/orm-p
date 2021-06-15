import { makeExecutableSchema } from 'apollo-server-express';
import { AppModule } from './app.module'

export default makeExecutableSchema({
	typeDefs: [AppSchema],
	resolvers: Resolvers
});