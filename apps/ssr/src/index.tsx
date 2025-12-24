import Fastify from "fastify";

import fastifyStatic from "@fastify/static";
import path, { dirname } from "path";
import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { IncomingMessage, ServerResponse } from "http";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fastify = Fastify({
  logger: true,
});

// Serve static files only from /assets/* (or another subpath), not from root
fastify.register(fastifyStatic, {
  root: path.resolve(__dirname, "../../web/dist/"),
  decorateReply: false,
});

fastify.get("/", function (request, reply) {
  reply.send({ hello: "world" });
});

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
